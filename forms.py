from flask_wtf import FlaskForm
from wtforms import StringField, EmailField, TextAreaField
from wtforms.validators import DataRequired, Email



class ContactForm(FlaskForm):
    full_name = StringField(label="Full Name", validators=[DataRequired()], 
                            render_kw={"class": "form-control", "placeholder": "Enter full Name"})
    email = EmailField(label="Email", validators=[Email()], 
                       render_kw={"class": "form-control", "placeholder": "Enter Your Email"})
    message = TextAreaField(label="Message", validators=[DataRequired()], 
                            render_kw={"class": "form-control", "placeholder": "Enter your message"})
