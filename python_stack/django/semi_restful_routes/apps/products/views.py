from django.shortcuts import render, redirect, HttpResponse
from django.contrib import messages
from .models import Product

# Create your views here.
def index(request):
	context = {
		'title': 'Products Home',
		'data': Product.objects.all()
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
			'price': request.POST['price'],
		}

		valid, response = Product.objects.add_product(data)

		if not valid:
			for error in response:
				messages.error(request, error)
			return redirect('products:new')
		else:
			return redirect('products:index')

	return redirect('products:index')

def show(request, id):
	context = {
		'title': 'Ohhh Ahhhh',
		'product': Product.objects.get(id=id)
	}
	return render(request, 'products/show.html', context)

def edit(request, id):
	context = {
		'title': 'Edit Page',
		'product': Product.objects.get(id=id)
	}
	return render(request, 'products/edit.html', context)

def update(request, id):
	if request.method =='POST':
		data = {
			'name': request.POST['name'],
			'description': request.POST['description'],
			'price': request.POST['price'],
		}
		valid, response = Product.objects.update_product(id, data)

		if not valid:
			for error in response:
				messages.error(request, error)
			return redirect('products:edit')
		else:
			return redirect('products:index')
	else:
		return redirect('products:index')

def destroy(request, id):
	product = Product.objects.get(id=id)
	product.delete()
	return redirect('products:index')
	

