# Generated by Django 4.1.1 on 2023-03-29 14:52

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '008'),
    ]

    operations = [
        migrations.AlterField(
            model_name='repair',
            name='status',
            field=models.ForeignKey(db_column='Status', null=True, on_delete=django.db.models.deletion.SET_NULL, to='backend.installstatus'),
        ),
        migrations.DeleteModel(
            name='RepairStatus',
        ),
    ]
