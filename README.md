<div align="center">

# 📋 Kanban Board

### A Modern Task Management Application

![Next.js](https://img.shields.io/badge/Next.js-16.0.6-black?style=for-the-badge&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React-19.1.0-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.x-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-7.1.0-2D3748?style=for-the-badge&logo=prisma&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-Neon-336791?style=for-the-badge&logo=postgresql&logoColor=white)

<br />

<!-- [🚀 Live Demo](https://your-demo-link.vercel.app) -->

<br />

![Kanban Board Preview](./public/images/linear-kanban.png)

</div>

---

## ✨ About

A sleek, modern **Kanban board application** built to help you organize tasks efficiently. Featuring a beautiful dark theme, drag-and-drop functionality, and real-time updates. Built with cutting-edge technologies to demonstrate clean code practices, thoughtful design, and smooth user experiences.

<br />

## 🎯 Features

| Feature               | Description                                     |
| --------------------- | ----------------------------------------------- |
| 🔐 **Authentication** | Secure user authentication powered by Clerk     |
| 🎨 **Modern UI**      | Beautiful dark theme with smooth animations     |
| 🖱️ **Drag & Drop**    | Intuitive task management with DnD Kit          |
| 📊 **Statistics**     | Visual task statistics with Recharts pie charts |
| 🔍 **Search**         | Quick search functionality to find tasks        |
| 📱 **Responsive**     | Fully responsive design for all devices         |
| ⚡ **Real-time**      | Optimistic updates for instant feedback         |
| 🗄️ **Serverless DB**  | PostgreSQL database hosted on Neon              |

<br />

## 🛠️ Tech Stack

<div align="center">

### Frontend

| Technology                                                                                                         | Version | Description                         |
| ------------------------------------------------------------------------------------------------------------------ | ------- | ----------------------------------- |
| ![Next.js](https://img.shields.io/badge/-Next.js-black?style=flat-square&logo=next.js)                             | 16.0.6  | React framework with App Router     |
| ![React](https://img.shields.io/badge/-React-61DAFB?style=flat-square&logo=react&logoColor=black)                  | 19.1.0  | JavaScript library for building UIs |
| ![TypeScript](https://img.shields.io/badge/-TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)   | 5.x     | Type-safe JavaScript development    |
| ![Tailwind](https://img.shields.io/badge/-Tailwind_CSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white) | 4.x     | Utility-first CSS framework         |

### Backend & Database

| Technology                                                                                                       | Version | Description                      |
| ---------------------------------------------------------------------------------------------------------------- | ------- | -------------------------------- |
| ![Prisma](https://img.shields.io/badge/-Prisma-2D3748?style=flat-square&logo=prisma&logoColor=white)             | 7.1.0   | Next-generation ORM              |
| ![PostgreSQL](https://img.shields.io/badge/-PostgreSQL-336791?style=flat-square&logo=postgresql&logoColor=white) | Neon    | Serverless PostgreSQL database   |
| ![Clerk](https://img.shields.io/badge/-Clerk-6C47FF?style=flat-square&logo=clerk&logoColor=white)                | 7.x     | Authentication & user management |

### UI & Components

| Technology                                                                                                   | Description                                           |
| ------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------- |
| ![Shadcn/ui](https://img.shields.io/badge/-Shadcn/ui-000000?style=flat-square&logo=shadcnui&logoColor=white) | Re-usable components built with Radix UI and Tailwind |
| ![Radix](https://img.shields.io/badge/-Radix_UI-161618?style=flat-square&logo=radix-ui&logoColor=white)      | Unstyled, accessible UI primitives                    |
| ![Lucide](https://img.shields.io/badge/-Lucide_Icons-F56565?style=flat-square)                               | Beautiful & consistent icons                          |
| ![Recharts](https://img.shields.io/badge/-Recharts-FF6384?style=flat-square)                                 | Composable charting library                           |
| ![DnD Kit](https://img.shields.io/badge/-DnD_Kit-FF4154?style=flat-square)                                   | Drag and drop toolkit                                 |
| ![Sonner](https://img.shields.io/badge/-Sonner-000000?style=flat-square)                                     | Beautiful toast notifications                         |

</div>

<br />

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18.x or higher
- **npm** or **pnpm**
- **PostgreSQL** database (Neon recommended)

### Installation

1️⃣ **Clone the repository**

```bash
git clone https://github.com/viboverse/linear-kanban.git
cd linear-kanban
```

2️⃣ **Install dependencies**

```bash
npm install
# or
pnpm install
```

3️⃣ **Set up environment variables**

```bash
cp .env.example .env
```

Update `.env` with your credentials:

```env
# Database
DATABASE_URL="postgresql://..."

# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="pk_..."
CLERK_SECRET_KEY="sk_..."
NEXT_PUBLIC_CLERK_SIGN_IN_URL="/sign-in"
NEXT_PUBLIC_CLERK_SIGN_UP_URL="/sign-up"
NEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL="/"
NEXT_PUBLIC_CLERK_SIGN_UP_FALLBACK_REDIRECT_URL="/"
```

4️⃣ **Initialize the database**

```bash
npx prisma migrate dev --name init
npx prisma generate
```

5️⃣ **Start the development server**

```bash
npm run dev
```

6️⃣ **Open your browser**

Navigate to [http://localhost:3000](http://localhost:3000) 🎉

<br />

## 🤝 Contributing

Contributions are welcome! Feel free to:

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<br />

## 📬 Contact

**Email** - vahab.afsharian94@gmail.com

**GitHub** - [@viboverse](https://github.com/viboverse)

**Project Link** - [https://github.com/viboverse/linear-kanban](https://github.com/viboverse/linear-kanban)

<br />

---

<div align="center">

### ⭐ Star this repo if you find it helpful!

Built with ❤️ by **[LazyBee](https://github.com/viboverse)**

</div>
