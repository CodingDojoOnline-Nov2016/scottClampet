from __future__ import unicode_literals
from ..login_reg.models import User
from django.db import models

# Create your models here.
class Course(models.Model):
	name = models.CharField(max_length=255)
	description = models.CharField(max_length=1000)
	course_creator = models.ForeignKey(User, default='course_creators')
	created_at = models.DateTimeField(auto_now_add=True)
	updated_at = models.DateTimeField(auto_now=True)