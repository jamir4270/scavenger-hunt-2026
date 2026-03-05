# 🕵️‍♂️ scavenger-hunt-2026

A retro-themed digital gatekeeper for the **CS Week 2026** scavenger hunt. Built for the **Computer Science Students' Society ($CS^3$)** at Visayas State University.

**Live URL:** [scavenger-hunt.vercel.app](https://www.google.com/search?q=https://scavenger-hunt.vercel.app)

---

## 📟 System Overview

This project serves as the **final checkpoint** of the scavenger hunt. It is a static landing page where participants must enter the correct password to unlock the final clue.

Success on this page triggers the transition to the **Manhunt**—the ultimate final task of the competition.

### Key Features:

* **Retro UI:** A nostalgic, terminal-inspired aesthetic consistent with Computer Science heritage.
* **Digital Gatekeeper:** A password-protected interface that reveals the "Target" location/hint upon successful validation.
* **Next.js App Router:** Leverages modern Next.js features for fast, static delivery.

## 🛠️ Technical Stack

* **Framework:** [Next.js 14+ (App Router)](https://nextjs.org/)
* **Language:** [TypeScript](https://www.typescriptlang.org/)
* **Deployment:** [Vercel](https://vercel.com)
* **Styling:** Tailwind CSS / PostCSS

## 📁 Project Structure

Following the Next.js App Router convention:

* `app/page.tsx`: The main landing page and password logic.
* `app/target/page.tsx`: The "Success" route revealed after the correct password is entered.
* `public/target.jpg`: The visual clue or map for the Manhunt phase.
* `app/globals.css`: Custom retro styling and CRT effects.

## 🚀 Local Development

1. **Clone the repository:**
```bash
git clone https://github.com/jamir4270/scavenger-hunt-2026.git

```


2. **Install dependencies:**
```bash
npm install

```


3. **Launch the terminal:**
```bash
npm run dev

```


4. **Access the interface:**
Navigate to `http://localhost:3000` to view the terminal.

---

## 👨‍💻 Developer

Developed by **Jamir** ([@jamir4270](https://github.com/jamir4270))

For the **Computer Science Students' Society ($CS^3$)** *Visayas State University*
