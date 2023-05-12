from django.contrib import admin
from django.urls import path, include
from rest_framework_simplejwt.views import TokenRefreshView

from .views import *

urlpatterns = [
    path('user/', RegisterView.as_view(), name="sign_up"),
    path('token/', SignInView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('install-create/', InstallCreateView.as_view()),
    path('items/', GetItemsAndTypesView.as_view()),
    path('installs/', GetInstallsAndTypesView.as_view()),
    path('repair-create/', RepairCreateView.as_view()),
    path('itemregister/', ItemRegisterView.as_view()),
    path('repairs/', GetRepairsAndTypesView.as_view()),
    path('installmodify/', InstallStatusModifyView.as_view()),
    path('repairmodify/', RepairStatusModifyView.as_view())
    
]