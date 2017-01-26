# -*- coding: utf-8 -*-
# Generated by Django 1.10.5 on 2017-01-24 16:37
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('login_reg', '0001_initial'),
        ('courses', '0003_delete_coursemanager'),
    ]

    operations = [
        migrations.AddField(
            model_name='course',
            name='creator',
            field=models.ForeignKey(default='course_creator', on_delete=django.db.models.deletion.CASCADE, to='login_reg.User'),
        ),
    ]