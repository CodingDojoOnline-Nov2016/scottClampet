from __future__ import unicode_literals

from django.db import models

# Create your models here.
class ProductManager(models.Manager):
	def add_product(self, data):
		#first things first: validations!
		name = data['name']
		description = data['description']
		price = data['price']
		errors = []

		if len(name) < 1 or not name.isalpha():
			errors.append('Please put a valid product name!')

		if len(description) < 1:
			errors.append('Please describe your product!')

		if len(price) < 1:
			errors.append('All products must have a price!')
		print data

		if errors:
			return (False, errors)
		else:
			new_product = Product.objects.create(name=name, description=description, price=price)
			errors.append('Your new product was added!')
			return (True, new_product)



class Product(models.Model):
	name = models.CharField(max_length=100)
	description = models.TextField(max_length=1000)
	price = models.IntegerField()
	created_at = models.DateTimeField(auto_now_add=True)
	updated_at = models.DateTimeField(auto_now=True)	
	objects = ProductManager()