# 🌸 Whimsy — Birthday Dream Space

A social birthday planning platform where users create beautiful pages, build wishlists, and receive messages from friends.

---

## 📁 Project Structure

```
whimsy/
├── auth.html          # Login + Signup page
├── setup.html         # First-time profile setup
├── app.html           # Main app (authenticated)
├── public.html        # Public share page (/public.html?u=username)
├── firestore.rules    # Firestore security rules
├── storage.rules      # Firebase Storage security rules
└── src/
    └── firebase-config.js  # ← You fill this in!
```

---

## 🚀 Setup Instructions

### Step 1 — Create Firebase Project

1. Go to [console.firebase.google.com](https://console.firebase.google.com)
2. Click **Add project** → name it "whimsy" → create
3. In Project Overview, click **Add app** → Web (</> icon)
4. Register app as "whimsy-web" → Copy the `firebaseConfig` object

### Step 2 — Fill in Firebase Config

Open `src/firebase-config.js` and replace the placeholder values:

```js
const firebaseConfig = {
  apiKey: "AIzaSy...",           // from Firebase Console
  authDomain: "whimsy-xxx.firebaseapp.com",
  projectId: "whimsy-xxx",
  storageBucket: "whimsy-xxx.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abc123"
};
```

### Step 3 — Enable Authentication

1. Firebase Console → **Authentication** → Get Started
2. Enable **Email/Password** provider
3. Enable **Google** provider (add your support email)

### Step 4 — Create Firestore Database

1. Firebase Console → **Firestore Database** → Create database
2. Choose **Start in production mode** → select your region
3. Go to **Rules** tab → paste contents of `firestore.rules` → Publish

### Step 5 — Enable Firebase Storage

1. Firebase Console → **Storage** → Get Started
2. Accept defaults → choose region
3. Go to **Rules** tab → paste contents of `storage.rules` → Publish

### Step 6 — Create Firestore Indexes

Go to Firestore → Indexes → Add these composite indexes:

| Collection | Fields | Query scope |
|-----------|--------|-------------|
| `messages` | `toUserId` ASC, `createdAt` DESC | Collection |
| `wishlists` | `userId` ASC, `private` ASC | Collection |

### Step 7 — Run Locally

Since the app uses Firebase JS SDK via CDN (ES modules), you need a local server:

**Option A — VS Code Live Server:**
1. Install "Live Server" extension
2. Right-click `auth.html` → Open with Live Server

**Option B — Python:**
```bash
cd whimsy
python3 -m http.server 8080
# Visit http://localhost:8080/auth.html
```

**Option C — Node.js:**
```bash
npx serve whimsy
```

---

## 🌐 Deploy to Firebase Hosting

```bash
npm install -g firebase-tools
firebase login
firebase init hosting
# Set public directory to: .  (current folder)
# Configure as SPA: No
firebase deploy
```

Your app will be live at: `https://your-project.web.app`

---

## 🔗 How Sharing Works

Each user gets a public page at:
```
https://your-domain/public.html?u=USERNAME
```

The Share Page URL can be customized with your actual domain.

For **custom domains** like `whimsy.app/u/username`, you'd need:
- A routing solution (Netlify redirects, Vercel rewrite rules, or Firebase hosting rewrites)

### Firebase Hosting Rewrite (firebase.json):
```json
{
  "hosting": {
    "rewrites": [
      { "source": "/u/**", "destination": "/public.html" }
    ]
  }
}
```
Then in `public.html`, parse the username from `window.location.pathname` instead of query params.

---

## 📊 Firestore Data Structure

```
users/{uid}
  - id, name, username, email, birthday, avatar
  - vibeType, theme, accentColor
  - createdAt, updatedAt

wishlists/{itemId}
  - userId, name, price, link, notes, category
  - private (bool), surprise (bool)
  - reserved (bool), reservedBy, reservedAt
  - imageUrl (if uploaded), bg, hearts
  - createdAt, updatedAt

planner/{eventId}
  - userId, title, time, location, emoji, notes
  - createdAt, updatedAt

messages/{msgId}
  - toUserId, toUsername
  - senderName, message
  - lockedUntilBirthday (bool)
  - createdAt
```

---

## ✨ Features

| Feature | Status |
|---------|--------|
| Email/Password auth | ✅ |
| Google Sign-in | ✅ |
| Profile setup (name, username, birthday, avatar) | ✅ |
| Wishlist CRUD with Firestore | ✅ |
| Image upload to Firebase Storage | ✅ |
| Real-time wishlist updates | ✅ |
| Birthday day planner | ✅ |
| Vibe personality quiz | ✅ |
| Theme customization (saved to DB) | ✅ |
| Public shareable page | ✅ |
| Anonymous gift reservation | ✅ |
| Friend messages (locked until birthday) | ✅ |
| Birthday countdown | ✅ |
| Copyable share link | ✅ |

---

## 🛠 Tech Stack

- **Frontend:** Vanilla HTML/CSS/JS (ES Modules)
- **Auth:** Firebase Authentication
- **Database:** Firebase Firestore (real-time)
- **Storage:** Firebase Storage (image uploads)
- **Hosting:** Firebase Hosting (or Vercel/Netlify)

---

Made with 🌸 by Whimsy
