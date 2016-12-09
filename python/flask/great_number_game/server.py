from flask import Flask, render_template, request, redirect, session
app = Flask(__name__)
app.secret_key = 'ThisIsSecret'

import random

@app.route('/')
def index():
	if session['rand'] == None:
		session['rand'] = random.randrange(0,101)
	else:
		pass
	return render_template('index.html', title='Great Number Game')



@app.route('/guess', methods=['POST'])
def user_guess():
	print "Got Post Info"

	session['guess'] = int(request.form['guess'])		
	

	if(session['guess'] > session['rand']):
		session['result'] = ' is too high!'
	elif(session['guess'] < session['rand']):
		session['result'] = ' is too low!'
	else:
		session['result'] = ' is exactly what I had in mind!'

	return redirect('/')

@app.route('/reset')
def reset():
	print 'rand number:', session['rand'], ',', session['result']
	session.clear()
	return redirect('/')

app.run(debug=True)


