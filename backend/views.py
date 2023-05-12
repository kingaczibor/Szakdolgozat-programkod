from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import authentication_classes, permission_classes
from .models import *
from .serializers import *


    
class SignInView(TokenObtainPairView):
    serializer_class = SignInSerializer

@authentication_classes([])
@permission_classes([])
class RegisterView(APIView):
    def post(self, request):
        serializer = UserSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)
    
@authentication_classes([])
@permission_classes([])
class InstallCreateView(APIView):
    def post (self, request):
        print(request.data)
        member = PersonalData.objects.create(fname=request.data['firstName'],
                                             lname=request.data['lastName'], 
                                             city=request.data['city'],
                                             street=request.data['street'], 
                                             house_num=request.data['housenum'], 
                                             phonenum=request.data['phone'], 
                                             email = request.data['email'], 
                                             is_klient= request.data['isClient'] == 'igen'  )
        install_status= InstallStatus.objects.get(name='New')
        Install.objects.create(item=Item.objects.get(pk=request.data['item']),
                               person_id=member,
                               have_item = request.data['has_item'] == 'igen', 
                              status=install_status)
        return Response(status=status.HTTP_200_OK)

@authentication_classes([])
@permission_classes([])
class RepairCreateView(APIView):
    def post (self, request):
        print (request.data)
        member = PersonalData.objects.create(fname=request.data['firstName'],
                                             lname=request.data['lastName'], 
                                             city=request.data['city'],
                                             street=request.data['street'], 
                                             house_num=request.data['housenum'], 
                                             phonenum=request.data['phone'], 
                                             email = request.data['email']  )
        install_status= InstallStatus.objects.get(name='New')
        Repair.objects.create(person_id=member,
                              item=request.data['item'],
                              what=request.data['what'],
                              when=request.data['when'],
                              status=install_status)
        return Response(status=status.HTTP_200_OK)


    
@authentication_classes([])
@permission_classes([])
class GetItemsAndTypesView(APIView):
    def get (self, request):
        item_serializer=ItemSerializer(Item.objects.all(), many=True)
        item_type_serializer=ItemTypeSerializer(ItemType.objects.all(), many=True)
        return Response(status=status.HTTP_200_OK, data={'items': item_serializer.data, 'item_types': item_type_serializer.data})

@authentication_classes([])
@permission_classes([])
class GetInstallsAndTypesView(APIView):
    def get (self, request):
        install_serializer=InstallSerializer(Install.objects.all(), many=True)
        install_status_serializer=InstallStatusSerializer(InstallStatus.objects.all(), many=True)
        return Response(status=status.HTTP_200_OK, data={'installs': install_serializer.data, 
                                                         'install_status': install_status_serializer.data})


@authentication_classes([])
@permission_classes([])
class ItemRegisterView(APIView):
    def post(self, request):
        if request.data['new']:
            category=ItemType.objects.create(name = request.data['newItem'])
        else:
            category=ItemType.objects.get(id=request.data['type']['id'])
        
        Item.objects.create(name=request.data['item'], item_type=category)
        return Response(status=status.HTTP_201_CREATED)


@authentication_classes([])
@permission_classes([])
class GetRepairsAndTypesView(APIView):
    def get (self, request):
        repair_serializer=RepairSerializer(Repair.objects.all(), many=True)
        install_status_serializer=InstallStatusSerializer(InstallStatus.objects.all(), many=True)
        return Response(status=status.HTTP_200_OK, data={'repairs': repair_serializer.data, 
                                                         'install_status': install_status_serializer.data})

@authentication_classes([])
@permission_classes([])
class RepairStatusModifyView(APIView):
    def post(self, request):
        repair_object=Repair.objects.get(id=request.data['id'])
        repair_object.status=InstallStatus.objects.get(id=request.data['Status'])
        repair_object.save()
        return Response(status=status.HTTP_200_OK)

@authentication_classes([])
@permission_classes([])
class InstallStatusModifyView(APIView):
    def post(self, request):
        install_object=Install.objects.get(id=request.data['id'])
        install_object.status=InstallStatus.objects.get(id=request.data['Status'])
        install_object.save()
        return Response(status=status.HTTP_200_OK)