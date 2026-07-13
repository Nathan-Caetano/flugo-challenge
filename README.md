---
description: Install, configure, and run Flugo locally.
icon: rocket
---

# Get started

## Get started

Run Flugo locally with Node.js and a Firebase project. Firestore must be enabled before the application can persist employees.

{% stepper %}
{% step %}
### Install dependencies

From the project root, install the project dependencies:

```bash
npm install
```
{% endstep %}

{% step %}
### Configure Firebase

Create a `.env` file in the project root. Add the Firebase web app values:

```ini
VITE_FIREBASE_API_KEY=YOUR_API_KEY
VITE_FIREBASE_AUTH_DOMAIN=YOUR_AUTH_DOMAIN
VITE_FIREBASE_PROJECT_ID=YOUR_PROJECT_ID
VITE_FIREBASE_STORAGE_BUCKET=YOUR_STORAGE_BUCKET
VITE_FIREBASE_MESSAGING_SENDER_ID=YOUR_MESSAGING_SENDER_ID
VITE_FIREBASE_APP_ID=YOUR_APP_ID
```

Create or select a Firebase project. Enable Cloud Firestore for that project.
{% endstep %}

{% step %}
### Start the development server

```bash
npm run dev
```

Open `http://localhost:5173` in your browser.
{% endstep %}
{% endstepper %}

{% hint style="warning" %}
Do not commit Firebase credentials stored in `.env`.
{% endhint %}

### Verify the setup

The application should load its employee list. Create an employee to verify Firestore access.
