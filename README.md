# 🚀 ServiceHub – Local Service Booking Platform

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge\&logo=node.js\&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge\&logo=express\&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge\&logo=mongodb\&logoColor=white)
![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge\&logo=react\&logoColor=black)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge\&logo=tailwind-css\&logoColor=white)
![Cloudinary](https://img.shields.io/badge/Cloudinary-3448C5?style=for-the-badge\&logo=cloudinary\&logoColor=white)

> 🛠️ Internship Project | MERN Stack | Local Service Booking & Provider Management

---

## 📚 Overview

**ServiceHub** is a full-stack web platform that connects **customers** with **local service providers** (barbers, tutors, mechanics, etc.).
It simplifies **service discovery, booking, and provider management**, reducing missed calls and scheduling conflicts.

This is my **internship project submission** — the platform is currently **in-progress**, with **backend completed (core features)** and **frontend UI partially done (static for now)**.

---

## ✨ Features Implemented

* ✅ **OTP-based Authentication** (Email login, JWT stored in cookies)
* ✅ **Provider Profiles** (bio, profile image via Cloudinary, GeoJSON location)
* ✅ **Service Management** (create, update, delete, fetch services with images)
* ✅ **Security Middleware** (Helmet, Rate Limiting, Mongo Sanitize, XSS Clean)
* ✅ **Responsive Static UI** (React + Tailwind) – half completed

---

## 📁 Folder Structure

```bash
servicehub/
├── backend/
│   ├── controllers/       # Auth, Provider, Service logic
│   ├── models/            # User, Service, OTP schemas
│   ├── routes/            # API routes
│   ├── middlewares/       # Auth, Multer, Security
│   ├── config/            # Cloudinary, DB
│   └── server.js          # App entry point
├── frontend/              # React static UI (in progress)
│   ├── src/pages/         # Auth, Provider, Customer pages
│   ├── src/components/    # UI components
│   └── src/App.js
└── README.md
```

---

## 🚧 Pending / Next Steps

* 🔜 **Booking System** → Customers select service + timeslot
* 🔜 **Payments Integration** → Secure checkout with Stripe
* 🔜 **Search & Filters** → Find providers by service & location
* 🔜 **Ratings & Reviews** → Customers review providers
* 🔜 **Connect Frontend to Backend** (make UI dynamic)
* 🔜 **Deploy** → Backend on Railway, Frontend on Vercel

---

## 🧪 Technologies Used

| Tech             | Purpose                                 |
| ---------------- | --------------------------------------- |
| **Node.js**      | Backend runtime                         |
| **Express.js**   | REST API framework                      |
| **MongoDB**      | Database (Mongoose ODM)                 |
| **React.js**     | Frontend (UI, static progress)          |
| **Tailwind CSS** | Responsive styling                      |
| **JWT + OTP**    | Secure authentication flow              |
| **Cloudinary**   | File storage (profile & service images) |
| **Multer**       | File uploads                            |
| **Helmet**       | Security headers                        |
| **Rate Limit**   | Protect against abuse                   |

---

## 🚀 How to Run Backend

```bash
# 1. Clone the repo
git clone https://github.com/yourusername/servicehub.git
cd servicehub/backend

# 2. Install dependencies
npm install

# 3. Add environment variables (.env)
PORT=5000
MONGO_URI=your_mongo_uri
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=xxx
CLOUDINARY_API_KEY=xxx
CLOUDINARY_API_SECRET=xxx

# 4. Start development server
npm run dev
```

---

## 📸 Screenshots (Progress)

*(I will add UI screenshots here – Auth page, Provider profile form, Services page)*

---

## 🧑‍💻 Internship Note

This project is **in progress**:

* Backend (Auth, Provider, Services) → ✅ functional
* Frontend (UI) → ✅ half complete, static only
* Booking, payments, and integration → 🔜 next steps

---

## 🧑‍💻 Author

**Walija**
Web Developer Intern

🌐 [GitHub](https://github.com/Walija-sh) • 📧 [Email](mailto:walijash@example.com)

---

> *ServiceHub is a modern service-booking solution — this version demonstrates authentication, provider management, and service listings as part of internship progress.*

