# Personal Portfolio Website

A sleek, modern, and responsive portfolio website showcasing personal information (**Name**, **Age**, **Bio**), categorized **Hobbies**, milestones/honors (**Achievements**), and an **Interactive Contact Form** so visitors worldwide can reach you.

---

## ✨ Features

- **Personal Profile Showcase**: Prominently features your Name, Age, Title, Location, and Bio with clean glassmorphic cards and stats.
- **Hobbies & Interests**: Interactive grid categorized into *Creative & Arts*, *Intellectual & Tech*, and *Fitness & Outdoor* with instant category filtering.
- **Achievements Timeline**: Curated milestones with category tags (*Competitions*, *Academic*, *Leadership*, *Certifications*), dates, and badges.
- **📬 Interactive Contact Section**:
  - Direct message contact form (Name, Email, Subject, Message) with real-time validation and feedback alerts.
  - Zero-backend direct email delivery support with [Web3Forms](https://web3forms.com/) (free API key option).
  - One-click **"Open in Email App"** pre-filled button.
  - One-click **"Copy Email"** button with dynamic tooltip feedback.
  - Social media and professional profile links (GitHub, LinkedIn, Twitter/X).
- **Interactive Live Customizer**: Built-in "Customize" drawer that lets you update your Name, Age, Tagline, Bio, Email, and Web3Forms key right from the browser with persistent `localStorage` storage.
- **Dark / Light Theme**: Smooth theme switcher with ambient background glow effects.
- **100% Responsive**: Looks great on smartphones, tablets, and desktop displays.
- **Zero-Dependency Core**: Pure HTML5, modern CSS, and vanilla JavaScript (Lucide icons loaded via CDN).

---

## 🌐 Making It Public (So Anyone Can Visit Your Page)

Your project repository is connected to GitHub at `https://github.com/satyajitray086-boop/jeet`. You can make your portfolio live to the entire world for free in just 2 steps using **GitHub Pages**:

### Step 1: Push Your Latest Code to GitHub
Run the following commands in your terminal:
```bash
cd /Users/satyajitray/newton
git add .
git commit -m "Add responsive portfolio with contact form"
git push origin main
```

### Step 2: Enable GitHub Pages in 1 Click
1. Go to your repository on GitHub: **`https://github.com/satyajitray086-boop/jeet`**
2. Click on **Settings** (gear icon) > select **Pages** from the left sidebar.
3. Under **Branch**, choose `main` and folder `/ (root)`, then click **Save**.
4. Within 1 minute, your portfolio will be live at:
   👉 **`https://satyajitray086-boop.github.io/jeet/`**

Anyone on the internet can now visit your portfolio!

---

## ✉️ Receiving Messages from Visitors Directly to Your Email

You have two instant options for receiving messages from visitors:

### Option A: Free Automated Email Delivery (Recommended)
1. Go to [web3forms.com](https://web3forms.com/) and enter your email address to receive your free Access Key.
2. Open your portfolio website and click the **"Customize"** button in the navigation bar.
3. Paste the key into the **Web3Forms Key** field and click **Save Changes**.
4. Every time a visitor submits a message on your site, it will be delivered directly to your real email inbox!

### Option B: Direct Mail Client (Zero Setup Required)
Visitors can click **"Open in Email App"** or the email card on your site. This automatically launches their preferred email client (Gmail, Apple Mail, Outlook) with your email address, subject, and message pre-filled.

---

## 💻 Local Preview

Run Python's built-in web server:
```bash
cd /Users/satyajitray/newton
python3 -m http.server 8000
```
Then visit `http://localhost:8000` in any web browser.
