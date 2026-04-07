# TARTIB (ترتيب) — The Science of Order

**Tartib** is a production-grade MERN stack application designed for students and developers to manage their focus, tasks, and knowledge in one unified ecosystem. 

Built with **Clean Architecture** principles, this project demonstrates a scalable "Monorepo" approach, separating user experience from administrative management.

---

## 🏛️ Project Architecture
This repository is organized into three core modules:

* **`/client`**: The primary user interface. Built with **React 19**, **Vite**, and **Tailwind CSS v4**. Features a Pomodoro timer and Obsidian-style Markdown notes.
* **`/admin`**: A restricted management portal. Focused on User CRUD operations, system configuration.
* **`/server`**: A decoupled Node.js/Express API. Implements JWT-based Role-Based Access Control (RBAC), Mongoose schemas, and Ajv validation.

---

## 🚀 Technical Highlights
- **Clean Code:** Modular folder structure (Controllers, Services, Models, Routes).
- **Styling:** Custom design system using Tailwind v4 (CSS-first configuration).
- **Knowledge Base:** Hierarchical note-taking with Markdown support and YAML metadata.
- **Security:** Secure authentication flow and protected routes for both Client and Admin.

---

## 🛠️ Getting Started
1. Clone the repo: `git clone git@github.com:mohamedalilab/Tartib.git`
2. Install dependencies for each module:
   - `cd client && npm install`
   - `cd admin && npm install`
   - `cd server && npm install`
3. Set up your `.env` in the `/server` folder.
4. Run the development environment.