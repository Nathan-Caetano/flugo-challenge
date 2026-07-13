---
description: Configure Firestore and understand employee persistence.
icon: database
---

# Firebase and data

## Firebase and data

Firebase Firestore stores the application’s employee records. The application uses a serverless backend.

### Firestore collection

All employee data uses the `employees` collection.

The project’s TypeScript types include an `Employee` type. The README does not define the document schema. Keep the application’s type and Firestore data aligned when extending fields.

### Environment configuration

The Firebase client reads values through `import.meta.env.*`. Vite exposes the Firebase settings through variables prefixed with `VITE_`.

Required variables:

```ini
VITE_FIREBASE_API_KEY=YOUR_API_KEY
VITE_FIREBASE_AUTH_DOMAIN=YOUR_AUTH_DOMAIN
VITE_FIREBASE_PROJECT_ID=YOUR_PROJECT_ID
VITE_FIREBASE_STORAGE_BUCKET=YOUR_STORAGE_BUCKET
VITE_FIREBASE_MESSAGING_SENDER_ID=YOUR_MESSAGING_SENDER_ID
VITE_FIREBASE_APP_ID=YOUR_APP_ID
```

### Configuration location

Firebase initialization lives in `src/firebase/`. Employee CRUD access lives in `src/services/`.

{% hint style="info" %}
Use a Firebase project with Cloud Firestore enabled before running the application.
{% endhint %}

### Security considerations

Configure Firestore security rules for your deployment. The project does not include authentication yet. Avoid exposing production data through permissive rules.
