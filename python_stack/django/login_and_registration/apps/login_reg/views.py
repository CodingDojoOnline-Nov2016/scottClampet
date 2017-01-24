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

		valid, response = User.objects.userExistsLogin(request.POST)

		if not valid:
			for error in response:
				messages.error(request, error)
			return redirect('/')
		else:
			return redirect('/success')
	else:
		return redirect('/')

def register(request):
	if request.method == 'POST':

		valid, response = User.objects.validRegistration(request.POST)

		if not valid:
			for error in response:
				messages.error(request, error)
			return redirect('/')
		else:
			return redirect('/success')
	else:
		return redirect('/')

def success(request):
	context = {
		'title': 'Success'
	}
	return render(request, 'login_reg/success.html')