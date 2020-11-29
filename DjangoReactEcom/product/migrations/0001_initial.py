# Generated by Django 3.1.3 on 2020-11-29 19:27

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Product',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
                ('main_image', models.ImageField(blank=True, default=None, null=True, upload_to='images/products/')),
                ('google_remarketing_image', models.ImageField(blank=True, default=None, null=True, upload_to='images/products/')),
                ('facebook_remarketing_image', models.ImageField(blank=True, default=None, null=True, upload_to='images/products/')),
                ('headline', models.CharField(blank=True, max_length=255, null=True)),
                ('description', models.CharField(blank=True, max_length=255, null=True)),
                ('regular_price', models.DecimalField(decimal_places=2, default=0.0, max_digits=10)),
                ('sale_price', models.DecimalField(decimal_places=2, default=0.0, max_digits=10)),
                ('stock', models.PositiveIntegerField(default=0)),
            ],
        ),
    ]
