# Moodify 

## Problem Statement

Modern music platforms rely heavily on algorithmic recommendations, which often fail to capture a user’s real-time emotional state. A generic “sad” or “party” playlist may not reflect what a person actually wants to hear in a specific moment.

Moodify addresses this gap by enabling **community-driven, mood-based music discovery**, where users can explore songs tagged by real people based on how they feel.

---

## Features

* **Authentication System**

  * Email/Password and Google Sign-in using Firebase
  * Protected routes for secure access

* **Mood-Based Discovery**

  * Select a mood (🔥 😢 😴 💖 😡 🎉)
  * View songs tagged with that mood

* **Community Voting System**

  * Users can upvote songs
  * One user → one vote per song (prevents spam)

* **Add Song (CRUD)**

  * Users can contribute songs with title, artist, mood, and album art
  * Data stored in Firestore

* **Leaderboard**

  * Displays top-voted songs across the platform

* **Profile Page**

  * View user details
  * Logout functionality

* **Real-Time Updates**

  * Firestore listeners update songs and votes instantly

---

## Tech Stack

**Frontend**

* React (Vite)
* React Router
* Context API (state management)
* Tailwind CSS (UI styling)

**Backend & Services**

* Firebase Authentication
* Firestore Database (real-time)

**Development Tools**

* Vite
* Git & GitHub
* VS Code

---

## Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/moodify.git
cd moodify
```

---

### 2. Install Dependencies

```bash
npm install
```

---

### 3. Setup Firebase

* Go to Firebase Console
* Create a project
* Enable:

  * Authentication (Email/Password + Google)
  * Firestore Database

---

### 4. Add Environment Variables

Create a `.env.local` file in the root:

```env
VITE_API_KEY=your_api_key
VITE_AUTH_DOMAIN=your_auth_domain
VITE_PROJECT_ID=your_project_id
```

---

### 5. Run the App

```bash
npm run dev
```

---

### 6. Open in Browser

```
http://localhost:5173
```

---

## Project Structure

```
src/
  components/
  pages/
  hooks/
  context/
  services/
```

---

## Key Highlights

* Solves a real-world UX problem (emotion-based music discovery)
* Uses modern React practices (hooks, context, routing)
* Fully integrated with Firebase (auth + database)
* Real-time, interactive user experience

---
