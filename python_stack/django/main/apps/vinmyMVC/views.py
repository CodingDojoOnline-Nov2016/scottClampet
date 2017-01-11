from django.shortcuts import render

# Create your views here.
def index(request):
	print 'Index Got iT!'
	return render(request, 'vinmyMVC/index.html')

def show(request):
	print 'Users Got iT!'
	print (request.method)
	return render(request, 'vinmyMVC/show_users.html')