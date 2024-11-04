import os

# Email Configuration
EMAIL_CONFIG = {
    "SMTP_SERVER": "smtp.gmail.com",
    "SMTP_PORT": 587,
    "SENDER_EMAIL": "baljir0901@gmail.com",
    "SENDER_PASSWORD": "ebax tsgc xdgn gsai",
    "RECIPIENT_EMAIL": "baljir0901@gmail.com"
}

# File Configuration
FILE_CONFIG = {
    "TEMPLATE_PATH": "rirekisho_template.xlsx",
    "OUTPUT_DIR": "output",
    "KEEP_LAST": 5
}

# Form Configuration
REQUIRED_FIELDS = []  # All fields are now optional

# Create output directory if it doesn't exist
os.makedirs(FILE_CONFIG["OUTPUT_DIR"], exist_ok=True) 