from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager

class UserManager(BaseUserManager):
    def create_user(self, email, is_admin=False, password='asd'):
        user = self.model(email=self.normalize_email(email), is_admin=is_admin)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, password='asd'):
        user = self.create_user(email=email, is_admin=True, password=password)
        user.save(using=self._db)
        return user

    
class User(AbstractBaseUser):
    class Meta:
        db_table = 'Users'

    id = models.AutoField(db_column='ID', primary_key=True)
    fname=models.CharField(db_column='FirstName', max_length=20, blank=True)
    lname=models.CharField(db_column='LastName', max_length=20, blank=True)
    
    email = models.EmailField(db_column='Email', max_length=100, unique=True)
    is_admin = models.BooleanField(db_column='Admin', default=False)
    objects= UserManager()

    USERNAME_FIELD = 'email'

class Item(models.Model):
    class Meta:
        db_table = 'Item'

    id= models.AutoField(db_column='ID', primary_key=True)
    name= models.CharField(db_column='Name', max_length=50,blank=True)
    item_type= models.ForeignKey('ItemType', db_column='Type', null=True, on_delete=models.SET_NULL)

class ItemType(models.Model):
    class Meta:
        db_table = 'ItemType'
    
    id= models.AutoField(db_column='ID', primary_key=True)
    name= models.CharField(db_column='Name', max_length=50,blank=True)

class PersonalData(models.Model):
    class Meta:
        db_table= 'PersonalData'
    
    id= models.AutoField(db_column='ID', primary_key=True)
    fname= models.CharField(db_column='FirstName', max_length=20,blank=True)
    lname= models.CharField(db_column='LastName', max_length=20,blank=True)
    city= models.CharField(db_column='City', max_length=50,blank=True)
    street= models.CharField(db_column='Street', max_length=50,blank=True)
    house_num= models.IntegerField()
    phonenum=models.CharField(db_column='PhoneNumber',max_length=20,blank=True)
    email = models.EmailField(db_column='Email', max_length=100,blank=True)
    is_klient=models.BooleanField(db_column='Klient', default=False)

class Install(models.Model):
    class Meta:
        db_table='Install'
    
    id= models.AutoField(db_column='ID', primary_key=True)
    item=models.ForeignKey('Item', db_column='Item', null=True, on_delete=models.SET_NULL)
    person_id=models.ForeignKey('PersonalData',db_column='Person', null=True, on_delete=models.SET_NULL)
    have_item=models.BooleanField(db_column='HaveItem', default=False)
    status=models.ForeignKey('InstallStatus',db_column='Status', null=True, on_delete=models.SET_NULL)
    submitted_at=models.DateTimeField(null=True)

class InstallStatus(models.Model):
    class Meta:
        db_table='InstallStatus'
    id=models.AutoField(db_column='ID', primary_key=True)
    name=models.CharField(db_column='StatusName', max_length=20,blank=True)


class Repair(models.Model):
    class Meta:
        db_table='Repair'
    
    id=models.AutoField(db_column='ID', primary_key=True)
    what=models.TextField(db_column='WhatHappend', blank=True)
    when=models.DateTimeField(db_column='When', null=True)
    item=models.CharField(db_column='Item', max_length=50,blank=True)
    person_id=models.ForeignKey('PersonalData',db_column='Person', null=True, on_delete=models.SET_NULL)
    status=models.ForeignKey('InstallStatus',db_column='Status', null=True, on_delete=models.SET_NULL)
    submitted_at=models.DateTimeField(null=True)


    





