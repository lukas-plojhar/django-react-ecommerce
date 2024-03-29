# Generated by Django 3.1.4 on 2021-03-07 14:05

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0004_auto_20210307_1404'),
    ]

    operations = [
        migrations.AddField(
            model_name='producttab',
            name='content',
            field=models.TextField(default=django.utils.timezone.now),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='producttab',
            name='headline',
            field=models.CharField(default=django.utils.timezone.now, max_length=60),
            preserve_default=False,
        ),
    ]
