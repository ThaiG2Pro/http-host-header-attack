from flask import Flask, send_from_directory, request, jsonify
import os
import logging

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s [%(levelname)s] - %(message)s',
    datefmt='%Y-%m-%d %H:%M:%S'
)
logger = logging.getLogger(__name__)

app = Flask(__name__, static_folder='static')

@app.route('/reset/<token>')
def reset(token):
    # Log the token to server logs
    user_agent = request.headers.get('User-Agent', 'Unknown')
    ip_address = request.remote_addr
    
    logger.info(f"RESET TOKEN ACCESSED: {token}")
    logger.info(f"User Agent: {user_agent}")
    logger.info(f"IP Address: {ip_address}")
    
    # Return the index.html page
    return send_from_directory('static', 'index.html')

@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def catch_all(path):
    if path != "" and os.path.exists(os.path.join(app.static_folder, path)):
        return send_from_directory(app.static_folder, path)
    return send_from_directory('static', 'index.html')

if __name__ == '__main__':
    port = int(os.environ.get("PORT", 5000))
    app.run(host='0.0.0.0', port=port)
