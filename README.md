# HTTP Host Header Attack Demo

This is a Flask application that demonstrates HTTP host header attack vulnerabilities by logging reset tokens from URLs.

## Setup

1. Install Python dependencies:
```
pip install -r requirements.txt
```

2. Run the application locally:
```
python app.py
```

3. Access the application at `http://localhost:5000`

## Deployment on Render

1. Push this repository to GitHub
2. Create a new Web Service on Render
3. Connect to your GitHub repository
4. Use the following settings:
   - Build Command: `pip install -r requirements.txt`
   - Start Command: `gunicorn app:app`

## URLs

When a user visits a URL like:
```
https://your-app.onrender.com/reset/9a9caf23-660b-4c7c-9161-556cacc2d9d9
```

The application will log the token to the server logs and display the password reset page.
