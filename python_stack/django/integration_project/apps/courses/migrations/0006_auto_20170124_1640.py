# -*- coding: utf-8 -*-
# Generated by Django 1.10.5 on 2017-01-24 16:40
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('courses', '0005_auto_20170124_1638'),
    ]

    operations = [
        migrations.AlterField(
            model_name='course',
            name='creator',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='login_reg.User'),
        ),
    ]