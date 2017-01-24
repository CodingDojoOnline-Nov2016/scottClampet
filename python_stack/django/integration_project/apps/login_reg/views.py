from django.shortcuts import render, redirect, HttpResponse
from django.contrib import messages
from django.core.urlresolvers import reverse
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
			return redirect(reverse('users:index'))
		else:
			return redirect(reverse('courses:index'))
	else:
		return redirect(reverse('users:index'))

def register(request):
	if request.method == 'POST':

		valid, response = User.objects.validRegistration(request.POST)

		if not valid:
			for error in response:
				messages.error(request, error)
			return redirect(reverse('users:index'))
		else:
			return redirect(reverse('users:index'))
	else:
		return redirect(reverse('users:index'))

def success(request):
	context = {
		'title': 'Success'
	}
	return render(request, 'login_reg/success.html')