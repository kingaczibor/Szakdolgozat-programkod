from django.db import migrations

def create_initial_data(apps, schema_editor):
    InstallStatus = apps.get_model('backend', 'InstallStatus')
   
    RepairStatus = apps.get_model('backend', 'RepairStatus')

    InstallStatus.objects.create(name='New')
    

    RepairStatus.objects.create(name='New')
    RepairStatus.objects.create(name='Folyamatban')
    RepairStatus.objects.create(name='Kész')

class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0007'),
    ]

    operations = [
        migrations.RunPython(create_initial_data)
    ]