🚀 ServiceHub – Local Service Booking Platform

A web-based platform designed to connect customers with local service providers (like barbers, tutors, mechanics, etc.).
This project is my internship submission, currently in-progress.

📌 Project Overview

Customers can search for local providers, book appointments, and pay online.

Providers can set availability, manage bookings, and track payments.

Goal: streamline appointment scheduling, avoid missed calls/messages, and improve customer experience.

✅ Work Completed So Far
🔹 Frontend (UI – Static for now)

Built core pages in React:

Auth pages (Login / Register with OTP UI)

Provider dashboard UI (Profile setup, services)

Customer browse UI (basic layout, not yet dynamic)

Applied responsive styling (clean and modern theme).

🔹 Backend (Node.js + Express + MongoDB)

Auth system (OTP-based, no password)

Register with email

Login with OTP

Verify OTP → issue JWT stored in cookie

Provider Profile

Bio, profile image (Cloudinary upload), GeoJSON location

Update and fetch provider profiles

Services

Providers can create, update, delete services

Service includes title, description, price, and image (Cloudinary upload)

Public routes to view services and provider’s services

🔹 Security / Middleware

Helmet, CORS, Cookie Parser, Express Rate Limiting

Mongo sanitize + XSS clean

Multer for file uploads, integrated with Cloudinary

🚧 Pending / Next Steps

🔜 Booking system → select service, choose time slot, confirm appointment

🔜 Payments → Stripe integration for secure checkout

🔜 Search & filters → search providers by service type, location “near me”

🔜 Ratings & reviews → customers rate providers and leave feedback

🔜 Complete dynamic frontend → connect UI with backend APIs

🔜 Deployment → Backend on Railway, Frontend on Vercel

🛠️ Tech Stack

Frontend: React, Tailwind CSS (UI static for now)

Backend: Node.js, Express.js

Database: MongoDB (Mongoose ODM)

Auth: JWT + OTP-based login (email OTP)

File Uploads: Multer + Cloudinary

Security: Helmet, CORS, Express-rate-limit, XSS-clean, Mongo-sanitize

🚀 How to Run (Backend)

Clone repo & install dependencies:

npm install


Add .env file with:

PORT=5000
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_secret_key
CLOUDINARY_CLOUD_NAME=xxxx
CLOUDINARY_API_KEY=xxxx
CLOUDINARY_API_SECRET=xxxx


Start server:

npm run dev

📸 Screenshots (UI Progress)

(Add screenshots of your static frontend here to showcase progress)

👨‍💻 Internship Note

This project is still work in progress.

Backend core features (auth, provider, services) are functional.

Frontend UI is half-complete and currently static.

Bookings, payments, and full integration will be the next milestones.