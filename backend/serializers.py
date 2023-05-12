from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework import serializers
from .models import *


class SignInSerializer(TokenObtainPairSerializer):
    pass

class UserSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = User
        fields = ["id", "email", "password"]

    def create(self, validated_data):
        user = User.objects.create(email=validated_data['email'],
                                         )
        user.set_password(validated_data['password'])
        user.save()
        return user
    
class ItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = Item
        fields = '__all__'

class ItemTypeSerializer(serializers.ModelSerializer):
    class Meta:
        model = ItemType
        fields = '__all__'


class PersonSerializer(serializers.ModelSerializer):
    class Meta:
        model = PersonalData
        fields = '__all__'


class InstallSerializer(serializers.ModelSerializer):
    person_id= serializers.SerializerMethodField(read_only=True)
    class Meta:
        model = Install
        fields = '__all__'
    
    def get_person_id(self, instance):
        return PersonSerializer(instance.person_id).data


class InstallStatusSerializer(serializers.ModelSerializer):
    class Meta:
        model = InstallStatus
        fields = '__all__'

class RepairSerializer(serializers.ModelSerializer):
    person_id= serializers.SerializerMethodField(read_only=True)
    class Meta:
        model = Repair
        fields = '__all__'
    
    def get_person_id(self, instance):
        return PersonSerializer(instance.person_id).data
