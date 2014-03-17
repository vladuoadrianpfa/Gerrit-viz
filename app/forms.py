from wtforms import Form
from wtforms.fields import TextField, PasswordField
from wtforms import validators

class LoginForm(Form):
    email = TextField('Email Address', [validators.Required()])
    password = PasswordField('Password', [validators.Required()])
