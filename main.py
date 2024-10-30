from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def hello():
    return 'This is my main page'

@app.route('/wedding_invitation')
def weddingInvitation():
    return render_template('wedding_invitation.html')

@app.route('/finance_planner')
def financePlanner():
    return render_template('finance_planner.html')

if __name__ == '__main__':
    app.run(debug=True)