from flask import Flask, render_template, request, redirect
app = Flask(__name__)
@app.route('/') #used to render our form
def index():
	return render_template('index.html')

@app.route('/users', methods=['POST']) # this route will handle our form submission
def create_users(): # notice how we defined which HTTP methods are allowed by this route
	print "Get Post Info"

	name = request.form['name']
	email = request.form['email']

	return redirect('/')
app.run(debug=True) #runs our server