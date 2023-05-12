from django.db import migrations

def create_initial_data(apps, schema_editor):
    Install = apps.get_model('backend', 'Install')
    InstallStatus = apps.get_model('backend', 'InstallStatus')


    # InstallStatus.objects.create(name='New')
    InstallStatus.objects.create(name='Folyamatban')
    InstallStatus.objects.create(name='Kész')

class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0006_auto_20230317_1258'),
    ]

    operations = [
        migrations.RunPython(create_initial_data)
    ]