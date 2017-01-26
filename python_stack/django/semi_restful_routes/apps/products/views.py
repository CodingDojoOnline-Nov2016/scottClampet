from django.shortcuts import render, redirect, HttpResponse
from django.contrib import messages
from .models import Product

# Create your views here.
def index(request):
	context = {
		'title': 'Products Home'
	}
	return render(request, 'products/index.html', context)

def new(request):
	context = {
		'title': 'Add Product'
	}
	return render(request, 'products/new.html', context)

def create(request):
	if request.method == 'POST':
		data = {
			'name': request.POST['name'],
			'description': request.POST['description'],
			'price': request.POST['name'],
		}

		valid, response = Product.objects.add_product(data)

	if not valid:
		for error in response:
			messages.error(request, error)
		return redirect('products:new')
	else:
		return redirect('products:index')
		
	return redirect('products:index')