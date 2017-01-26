from __future__ import unicode_literals

from django.db import models

import re

DIGIT_REGEX = re.compile(r'.*[^0-9].*')

# Create your models here.
class ProductManager(models.Manager):
	def add_product(self, data):
		#first things first: validations!
		name = data['name']
		description = data['description']
		errors = []

		if len(data['price']) < 1:
			errors.append('All products must have a price!')
		elif not data['price'].isdigit():
			errors.append('Price must be a number!')
		else:
			price = int(data['price'])

		if len(name) < 1 or not name.isalpha():
			errors.append('Please put a valid product name!')

		if len(description) < 1:
			errors.append('Please describe your product!')

		#return errors else create new product
		if errors:
			return (False, errors)
		else:
			errors.append(name+' was successfully added!')
			new_product = Product.objects.create(name=name, description=description, price=price)
			return (True, new_product)

	def update_product(self, id, data):
		#validations
		name = data['name']
		description = data['description']
		price = int(data['price'])
		errors = []

		if len(name) < 1 or not name.isalpha():
			errors.append('Please put a valid product name!')

		if len(description) < 1:
			errors.append('Please describe your product!')

		if len(data['price']) < 1:
			errors.append('All products must have a price!')
		print data

		#return errors else create new product
		if errors:
			return (False, errors)
		else:
			errors.append(name+' successfully updated!')
			product = self.get(id=id)
			product.name = name
			product.description = description
			product.price = price
			product.save()
			return(True, errors)




class Product(models.Model):
	name = models.CharField(max_length=100)
	description = models.TextField(max_length=1000)
	price = models.IntegerField()
	created_at = models.DateTimeField(auto_now_add=True)
	updated_at = models.DateTimeField(auto_now=True)	
	objects = ProductManager()