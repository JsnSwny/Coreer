# Generated by Django 3.2.18 on 2023-02-18 21:04

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0007_auto_20230218_2058'),
    ]

    operations = [
        migrations.AddField(
            model_name='customuser',
            name='profile_photo',
            field=models.CharField(blank=True, max_length=500, null=True),
        ),
    ]
