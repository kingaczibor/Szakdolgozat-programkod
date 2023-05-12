# Generated by Django 4.1.1 on 2023-03-17 11:58

from django.db import migrations

def create_initial_data(apps, schema_editor):
    Item = apps.get_model('backend', 'Item')
    ItemType = apps.get_model('backend', 'ItemType')

    Item.objects.create(name='Teljeskörű internet', item_type=ItemType.objects.get(name='Internet'))
    Item.objects.create(name='Router', item_type=ItemType.objects.get(name='Internet'))
    Item.objects.create(name='Switch', item_type=ItemType.objects.get(name='Internet'))
    Item.objects.create(name='Egy kamera', item_type=ItemType.objects.get(name='Kamera'))
    Item.objects.create(name='Kamerarendszer', item_type=ItemType.objects.get(name='Kamera'))
    Item.objects.create(name='TV', item_type=ItemType.objects.get(name='TV'))
    Item.objects.create(name='TV box', item_type=ItemType.objects.get(name='TV'))
    Item.objects.create(name='Számítógép telepítés', item_type=ItemType.objects.get(name='Egyéb'))
    Item.objects.create(name='Nyomtató', item_type=ItemType.objects.get(name='Egyéb'))

class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0005_auto_20230317_1250'),
    ]

    operations = [
        migrations.RunPython(create_initial_data)
    ]
