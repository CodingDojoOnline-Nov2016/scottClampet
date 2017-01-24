from django.shortcuts import render, redirect
from django.contrib import messages
from .models import User

# Create your views here.
def index(request):
	context = {
		'title': 'Login and Registration'
	}
	return render(request, 'login_reg/index.html', context)

def login(request):
	if request.method == 'POST':
		if User.objects.userExistsLogin(request.POST, request):
			doesExist = True
			return redirect('/success')
		else:
			doesExist = False
			return redirect('/')

def register(request):
	if request.method == 'POST':
		if User.objects.validRegistration(request.POST, request):
			isValid = True
			return redirect('/success')
		else:
			isValid = False
			return redirect('/')

def success(request):
	context = {
		'title': 'Success'
	}
	return render(request, 'login_reg/success.html')