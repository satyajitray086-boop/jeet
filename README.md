# Personal Portfolio Website

A sleek, responsive, and modern portfolio website showcasing personal information (**Name**, **Age**, **Bio**), categorized **Hobbies**, and milestones/honors (**Achievements**).

## ✨ Features

- **Personal Profile Showcase**: Prominently features your Name, Age, Title, Location, and Bio with clean glassmorphic cards and stats.
- **Hobbies & Interests**: Interactive grid categorized into *Creative & Arts*, *Intellectual & Tech*, and *Fitness & Outdoor* with instant category filtering.
- **Achievements Timeline**: Curated milestones with category tags (*Competitions*, *Academic*, *Leadership*, *Certifications*), dates, and badges.
- **Interactive Live Customizer**: Built-in "Customize" drawer that lets you update your Name, Age, Tagline, Bio, and Email right from the browser with persistent `localStorage` storage!
- **Dark / Light Theme**: Smooth theme switcher with ambient background glow effects.
- **100% Responsive**: Looks great on smartphones, tablets, and desktop displays.
- **Zero-Dependency Core**: Pure HTML5, modern CSS, and vanilla JavaScript (Lucide icons loaded via CDN).

---

## 🚀 How to View the Website

You can view the portfolio directly by opening `index.html` in your web browser, or by running a local server:

### Option 1: Direct File Open
On macOS, double-click `index.html` or run in your terminal:
```bash
open /Users/satyajitray/newton/index.html
```

### Option 2: Local HTTP Server (Recommended)
Run Python's built-in web server:
```bash
cd /Users/satyajitray/newton
python3 -m http.server 8000
```
Then visit `http://localhost:8000` in any web browser.

---

## 🛠️ How to Customize

### 1. In-Browser Quick Customization
Click the **"Customize"** button in the top navigation bar. You can edit your Name, Age, Tagline, Location, and Bio, and see the changes reflected immediately across the entire page.

### 2. Direct Code Editing
- **Personal Details & Content**: Edit `/Users/satyajitray/newton/index.html` directly to add more hobbies, achievements, or contact links.
- **Styling & Color Palettes**: Modify CSS variables in `/Users/satyajitray/newton/styles.css` under `:root` and `[data-theme="light"]`.
- **Default Profile Values**: Adjust default values in `/Users/satyajitray/newton/script.js`.
