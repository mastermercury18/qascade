from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('exp.html')

@app.route('/form_content', methods=['POST'])
def form_content():
    protein_cascade = request.form['protein_cascade']
    if protein_cascade == "Option 1":
        return render_template("option1.html")
    elif protein_cascade == "Option 2":
        return render_template("option2.html")
    elif protein_cascade == "Option 3":
        return render_template('option3.html')
    elif protein_cascade == "Option 4":
        return render_template("option4.html")
    else:  
        return "<!DOCTYPE html><html><head><title>Processed</title></head><body><h1>Form submitted successfully!</h1></body></html>"

@app.route('/input')
def change_to_input():
    return render_template('input.html')
app.debug = True
if __name__ == '__main__':
    app.run(host='0.0.0.0', port=80)