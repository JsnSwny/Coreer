# Generated by Django 3.2.18 on 2023-02-26 13:52

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0013_auto_20230226_1300'),
    ]

    operations = [
        migrations.AddField(
            model_name='customuser',
            name='tfidf_input',
            field=models.CharField(default='', max_length=1000),
        ),
    ]