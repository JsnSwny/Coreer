# Generated by Django 3.2.18 on 2023-02-24 19:33

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('recsys', '0002_rename_recommend_recommendation'),
    ]

    operations = [
        migrations.RenameField(
            model_name='recommendation',
            old_name='recommend_on',
            new_name='recommended_on',
        ),
    ]