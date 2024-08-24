from config import Config

from flask import (Flask, 
                   redirect, url_for, 
                   render_template,
                   flash, send_file)
from forms import ContactForm
from flask_wtf.csrf import CSRFProtect
from flask_mail import Mail, Message
from datetime import datetime

# Global initialization
csrf_token = CSRFProtect()
mail = Mail()


def app_init():
    """Initialize App"""
    app = Flask(__name__)
    app.config.from_object(Config)

    # CSRFToken Initialization
    csrf_token.init_app(app=app)

    # MAIL service Initialization
    mail.init_app(app=app)
    
    return app

app = app_init()


@app.route('/', methods=['GET','POST'])
def index():
    return render_template('index.html', title="Eugene - Home")

@app.route('/resume')
def resume():
    return render_template('resume.html', title="Eugene - Resume")

@app.route('/projects')
def projects():
    return render_template('projects.html', title="Eugene - Project")


@app.route('/contact', methods=["GET", "POST"])
def contact():
    form = ContactForm()
    try:
        if form.validate_on_submit():
            data = form.data
            message = Message(subject="Portfolio - Reach", 
                              recipients=["eugenemutuyimana15@gmail.com"], 
                              sender="eugeneemma7@gmail.com", 
                              html=f"""
                                <div style="padding: 10px; margin: 0 10px">
                                    <h3 style="text-align: center; color: white; background-color: #006400; padding: 10px;">MESSAGE FROM MY PORTFOLIO</h3>

                                    <div style="border-radius: 5px; ">
                                        <div style="background-color: #D3D3D3; padding: 10px; color: black; font-weight: 700">
                                            <p style="margin-bottom:0">Vistor's Names: {data['full_name']}</p>
                                            <p tyle="margin-bottom:0">Vistor's Email Address: {data['email']}</p>
                                        </div>
                                        <div style="background-color: white; padding: 10px">
                                            <p>{data['message']}</p>
                                        </div>
                                        <div style="background-color: #D3D3D3">
                                            <p>Sent on: {str(datetime.now().time())[:8]}</p>
                                        </div>
                                    </div>
                                </div>
                              """)
            mail.send(message)
            flash("Messages delivered", "success")
            return redirect(url_for("contact"))
    except Exception:
        flash("There should be network issues, try again!", "error")
        return redirect(url_for('contact'))
    return render_template('contact.html', title="Eugene - Contact", form=form)

@app.errorhandler(404)
def not_found(error):
    return render_template('404.html')


@app.route('/download')
def download_cv():
    from config import BASE_DIR
    from os import path
    cv_file = "MUTUYIMANA EUGENE_CV.pdf"
    MEDIA_LOCATION = path.join(BASE_DIR, 'media')
    file = path.join(MEDIA_LOCATION, cv_file)

    return send_file(file, as_attachment=True)

if __name__ == '__main__':
    app.run(port=5000, debug=True)