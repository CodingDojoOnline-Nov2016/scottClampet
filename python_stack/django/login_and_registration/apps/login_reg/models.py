from __future__ import unicode_literals

from django.db import models
from django.contrib import messages
import bcrypt
import re

EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9\.\+_-]+@[a-zA-Z0-9\._-]+\.[a-zA-Z]*$')


# Create your models here.
class Manager(models.Manager):
	def validRegistration(self, userInfo, request):
		#registration form validations
		isValid= True
		if not userInfo['first_name'].isalpha():
			messages.error(request, 'First name must only contain letters!')
			isValid = False
		if len(userInfo['first_name']) < 1:
			messages.error(request, 'Please put a first name!')
			isValid = False

		if not userInfo['last_name'].isalpha():
			messages.error(request, 'Last name must only contain letters!')
			isValid = False
		if len(userInfo['last_name']) < 1:
			messages.error(request, 'Please put a last name!')
			isValid = False

		if not EMAIL_REGEX.match(userInfo['email']):
			messages.error(request, 'Must be a valid email!')
			isValid = False
		if len(userInfo['email']) < 1:
			messages.error(request, 'Please put a valid email!')
			isValid = False
		if User.objects.filter(email=userInfo['email']):
			messages.error(request, 'A user with that email already exists!')
			isValid = False

		if len(userInfo['password']) < 8:
			messages.error(request, 'Password must be at least 8 characters long!')
			isValid = False
		if userInfo['password'] != userInfo['confirm']:
			messages.error(request, 'Passwords do not match!')
			isValid = False

		if isValid == True:
			messages.success(request, 'Great! Thanks for registering '+userInfo['first_name']+'!')
			hashed = bcrypt.hashpw(userInfo['password'].encode(), bcrypt.gensalt())
			User.objects.create(first_name=userInfo['first_name'], last_name=userInfo['last_name'], email=userInfo['email'], pw_hash=hashed)
		return isValid

	def userExistsLogin(self, userInfo, request):
		#check to see if user already exists
		doesExist = True
		if User.objects.filter(email=userInfo['email']):
			hashed = User.objects.get(email=userInfo['email']).pw_hash.encode()
			# hashed = hashed.encode()
			password = userInfo['password'].encode()
			# password = password.encode()
			if bcrypt.hashpw(password, hashed) == hashed:
				messages.success(request, 'Success! Welcome, '+User.objects.get(email=userInfo['email']).first_name+'!')
				doesExist = True
			else:
				messages.error(request, 'Invalid password!')
				doesExist = False
		else:
			messages.error(request, 'Invalid Email!')
			doesExist = False
		return doesExist


class User(models.Model):
	first_name = models.CharField(max_length=45)
	last_name = models.CharField(max_length=45)
	email = models.CharField(max_length=100)
	pw_hash = models.CharField(max_length=100)
	created_at = models.DateTimeField(auto_now_add=True)
	updated_at = models.DateTimeField(auto_now=True)

	objects = Manager()