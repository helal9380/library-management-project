<!-- @format -->

# Library Management System

## Project Overview

A clean and functional library management system built with **React**, **Redux Toolkit Query (RTK Query)**, and **TypeScript**. This project focuses on essential book management and borrowing features without authentication or payment systems.

It demonstrates solid state management, modular UI design, and proper interaction with a RESTful API.

---

## Features

### 1. Public Routes

No login required! All users can view, add, edit, delete, and borrow books without authentication.

---

### 2. Book Management

#### Book List Table

- Display all books with key details:
  - **Title**, **Author**, **Genre**, **ISBN**, **Copies**, **Availability**, and **Actions**
- Features:
  - **Edit Book** – Opens a pre-filled form to update book info.
  - If `copies` is set to 0, book becomes **Unavailable**.
  - **Delete Book** – Opens a confirmation dialog before deletion.
  - **Borrow Book** – Opens a form to borrow the book.
  - **Add New Book**
  - Form to enter:
    - Title, Author, Genre, ISBN, Description, Copies
    - (Available status is optional, defaults to `true`)
  - On submit, adds book and updates UI.

---

### 3. Borrow Book

- Access via the **Borrow** button on book list
- Fields:
  - **Quantity** (cannot exceed available copies)
  - **Due Date**
- Logic:
  - If borrowed quantity reaches 0, book is marked unavailable.
- On success:
  - Book is updated via API
  - User is redirected to **Borrow Summary**

---

### 4. Borrow Summary

- Aggregated view of borrowed books from the backend
- Columns:
  - **Book Title**, **ISBN**, **Total Quantity Borrowed**

---

## UI/UX Design

- **Minimalist & Clean UI**: Built using Tailwind CSS or plain CSS.
- **Responsive**: Fully mobile-first, works across all devices.
- **User Experience**:
  - Smooth navigation
  - Well-labeled buttons and inputs
  - Real-time updates

---

## Tech Stack

- **Frontend**: React, TypeScript, Tailwind CSS
- **State Management**: Redux Toolkit Query
- **Routing**: React Router
- **API**: RESTful API integration
- **Tooling**: Vite or Create React App (based on setup)

---

## Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/helal9380/library-management-project.git
cd library-management-project
```

# Thank..
