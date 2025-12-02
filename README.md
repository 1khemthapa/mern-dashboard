
# Sales Dashboard

It is a small web application to visualize the product performance by a company.


## Installation

1.Clone the repository

```bash
  git clone https://github.com/1khemthapa/mern-dashboard.git
  cd mern-dashboard
```

2.Install Backend dependencties

```bash
cd backend
npm Install
```
Create a .env file:
```ini
MONGO_URL=your_mongodb_url
JWT_SECRET_KEY=your_secret_key
PORT=4000
```
Start backend:
```bash
npm run server
```

3.Install Frontend dependencties

Open another terminal
```bash
cd frontend
npm install
```
Start frontend:
```bash
npm run dev
```
    
## Features

### Excel Upload
- Users can upload .xlsx files.
- Excel data is automatically parsed and stored in the database

### Data Visualization
Display real-time charts based ont he stored data:
- Bar Chart- Product vs Quantity Sold
- Pie Chart- Category-wise Revenue Distribution
- Built using Chart.js
Charts automatically update whenever data changes.

### CRUD Operations
Backend Api routes implemented in Express:
- POST /api/porducts - Add a new product
- GET /api/porducts - Fetch all porducts
- PUT /api/porducts/:id - Update a product
- DELETE /api/porducts/:id - Remove a product
All CRUD operations trigger immediate chart updates on the frontend.

### Frontend (React)
A clean and simple dashboard UI that includes:
- Excel file upload button
- Table displaying all product records
- Bar chart + Pie chart visualization
- Add / Edit / Delete controls for CRUD
- Automatic refreshing of charts and table on every data change

### Backend (Node.js + Express)
- REST API built with Express.js
- Route modules for:
      - Excel upload and parsing
      - CRUD operations
- MongoDB used as the database
