# Generated by Django 3.2.18 on 2023-02-24 19:14

from django.conf import settings
from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('recsys', '0001_initial'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='Recommend',
            new_name='Recommendation',
        ),
    ]
