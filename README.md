🥄 Spoonful Planner: Your Energy-Friendly Daily Companion! 🥄

# Welcome to Spoonful Planner

A React app designed to help you manage your energy levels effectively using Spoon Theory. It’s perfect for keeping your tasks, goals, and self-care balanced, all in one place. Built with ADHD-friendly simplicity in mind!

## 🌟 Features:

- 📋 **Tiered Task Management**: Organize tasks into energy levels (tiers) and track your spoons.
- 💬 **Motivational Quotes**: Get inspired with daily quotes.
- 🌬️ **Breathing Exercises**: Quick, guided breathing to help you reset.
- 🗓️ **Google Calendar Integration**: Add tasks directly to your calendar.
- ✍️ **Journal**: Reflect on your day and save your thoughts.
- 🏆 **Stickers**: Collect rewards for completing tasks.
- 📘 **InfoModal**: Learn about Spoon Theory and how this app can help.

## 📂 Project Structure:

```
spoonful-planner/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Motivation.jsx
│   │   ├── BreathingExercise.jsx
│   │   ├── AddToGoogleCalendar.jsx
│   │   ├── Timer.jsx
│   │   ├── Stickers.jsx
│   │   ├── TaskManager.jsx
│   │   ├── Journal.jsx
│   │   ├── InfoModal.jsx
│   ├── App.jsx
│   ├── index.js
│   ├── supabaseClient.js
│   ├── index.css
├── tailwind.config.js
├── package.json
```

## 🚀 How to Get Started:

### 1️⃣ Install Dependencies:

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/spoonful-planner.git
    cd spoonful-planner
    ```

2. Install the required packages:

    ```bash
    npm install
    ```

### 2️⃣ Set Up Environment Variables:

Add the following variables to a `.env` file in the project root:

```
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
NEXT_PUBLIC_CLERK_FRONTEND_API_KEY=your_clerk_api_key
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_API_KEY=your_google_api_key
```

### 3️⃣ Run the App:

Start the development server:

```bash
npm start
```

The app will open at [http://localhost:3000](http://localhost:3000).

## 🎨 Tailwind CSS Configuration:

The app uses Tailwind CSS for styling. Tailwind is pre-configured with DaisyUI for beautiful and accessible components. If you want to customize styles:

- Edit `tailwind.config.js`:

    ```javascript
    module.exports = {
      content: ["./src/**/*.{js,jsx}"],
      theme: {
        extend: {},
      },
      plugins: [require("daisyui")],
    };
    ```

- Modify `src/index.css` for custom styles:

    ```css
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
    ```

## 🔑 Key Components:

Here’s what makes the app tick:

1. **Navbar**: Handles sign-in/sign-out with Clerk.
2. **Motivation**: Fetches daily quotes from the ZenQuotes API.
3. **BreathingExercise**: Guided breathing with a progress bar.
4. **AddToGoogleCalendar**: Adds tasks to Google Calendar.
5. **Timer**: Tracks time for focus or breaks.
6. **TaskManager**: Organizes tasks into tiers and tracks energy levels (spoons).
7. **Journal**: Lets you save and reflect on daily entries.
8. **Stickers**: Displays reward stickers earned for completed tasks.
9. **InfoModal**: Explains Spoon Theory.
---
## 💡 What is Spoon Theory?

Spoon Theory explains how people with limited energy (“spoons”) manage their day. Every task uses spoons, and once they’re gone, you need to rest and recharge. This app helps you track spoons and organize tasks by energy levels. Use it to balance productivity and self-care!

## 🛠️ Built With:

- **React**: Frontend library for building user interfaces.
- **Supabase**: Handles backend data (tasks, journal entries, stickers).
- **Clerk**: Authentication for secure sign-in and sign-out.
- **Tailwind CSS & DaisyUI**: Simple, accessible, and responsive design.

## 🙌 Contributions & Feedback:

We’d love to hear from you! Feel free to open issues or submit pull requests.

## 🥄 Spoon Management Made Easy. Start Planning Today! 🥄

