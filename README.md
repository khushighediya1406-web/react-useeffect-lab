# React useEffect Lab ⚛️

A small practice project built with **React + Vite** to understand how the `useEffect` hook works through simple, hands-on examples.

## 🚀 Features

### 1. Counter
- Increment, decrement and reset a count
- Uses `useEffect` to run code whenever the count changes (e.g. update the document title)
- Shows how the **dependency array** controls when an effect runs

### 2. Timer
- Start, pause and reset a timer that ticks every second
- Uses `setInterval` inside `useEffect`
- Demonstrates the **cleanup function** (`clearInterval`) to avoid memory leaks

### 3. API Calling
- Fetches data from a public API when the component mounts
- Handles **loading**, **error** and **success** states
- Uses `useEffect` with an empty dependency array `[]` to fetch only once

## 🧠 What I Learned

| Concept | Where it's used |
|---|---|
| `useEffect` without dependencies | Runs on every render |
| `useEffect` with `[]` | Runs once on mount (API call) |
| `useEffect` with `[value]` | Runs when `value` changes (Counter) |
| Cleanup function | Stops the interval (Timer) |
| Async data fetching | Loading / error handling (API) |

## 🛠️ Tech Stack

- React
- Vite
- JavaScript (ES6+)
- CSS

## 📁 Project Structure

```
react-useeffect-lab/
├── public/
├── src/
│   ├── components/
│   │   ├── Counter.jsx
│   │   ├── Timer.jsx
│   │   └── ApiCall.jsx
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

## ⚙️ Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/khushighediya1406-web/react-useeffect-lab.git
   ```

2. **Go to the project folder**
   ```bash
   cd react-useeffect-lab
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```
5. Open `http://localhost:5173` in your browser.

## Live Output
[Visit Effect](https://khushighediya1406-web.github.io/react-useeffect-lab/)



## 📄 License

This project is for learning purposes.
