from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='User',
            fields=[
                ('password', models.CharField(max_length=128, verbose_name='password')),
                ('last_login', models.DateTimeField(blank=True, null=True, verbose_name='last login')),
                ('id', models.AutoField(db_column='ID', primary_key=True, serialize=False)),
                ('email', models.EmailField(db_column='Email', max_length=100, unique=True)),
                ('is_admin', models.BooleanField(db_column='Admin', default=False)),
            ],
            options={
                'db_table': 'Users',
            },
        ),
    ]
