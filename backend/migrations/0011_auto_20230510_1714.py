# Generated by Django 4.1.1 on 2023-05-10 15:14

from django.db import migrations
from backend.models import User
from django.conf import settings

def generate_superuser(apps, schema_editor):
    user= User.objects.create(email=settings.DJANGO_SUPERUSER_EMAIL)
    user.set_password(settings.DJANGO_SUPERUSER_PASSWORD)
    user.save()

class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0010_install_submitted_at_repair_submitted_at_and_more'),
    ]

    operations = [
        migrations.RunPython(generate_superuser)
    ]
