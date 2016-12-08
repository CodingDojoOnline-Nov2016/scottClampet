from flask import Flask, render_template, request, redirect
app = Flask(__name__)

@app.route('/')
def index():
	return render_template('index.html')

@app.route('/result', methods=['GET','POST'])
def survey_result():
	print "Got Post Info"

	name = request.form['name']
	location = request.form['location']
	lang = request.form['lang']
	comment = request.form['comment']

	return render_template('result.html', info=request.form)

app.run(debug=True)