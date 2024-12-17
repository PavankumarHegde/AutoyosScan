<<<<<<< HEAD

# **AutoyosScan**

**AutoyosScan** is a web-based application designed for the efficient management and diagnosis of patient data using a portable screening device. It enables operators to capture patient demographic details and images, while doctors can view and analyze patient information, providing diagnoses and reports.

---

## **Features**

- **Operator Dashboard**:
  - Capture and manage patient demographic details.
  - Automatically capture patient images using a device camera.
  - View diagnosis reports uploaded by doctors.

- **Doctor Dashboard**:
  - View a list of patients awaiting diagnosis and those already diagnosed.
  - Review demographic details and patient images.
  - Provide diagnosis comments and generate PDF reports.
  
- **Backend**:
  - RESTful APIs for communication between the frontend and backend.
  - Secure handling of patient data with encryption.
  - Scalable database for storing patient information and diagnosis reports.

- **Frontend**:
  - Responsive and user-friendly interface designed for both mobile and desktop devices.
  - Integration with third-party libraries for image cropping and PDF generation.

---

## **Tech Stack**

- **Frontend**:
  - React.js
  - Axios for API requests
  - HTML5, CSS3, JavaScript

- **Backend**:
  - Node.js with Express.js
  - RESTful API design
  - Database: PostgreSQL / MongoDB (choose based on your preference)

- **Security**:
  - JSON Web Tokens (JWT) for user authentication
  - Encryption for sensitive data (patient details, diagnosis reports)

- **Other**:
  - Git for version control
  - Nodemon for backend development
  - dotenv for environment variables

---

## **Setup Instructions**

### **Backend Setup (Node.js with Express)**

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/AutoyosScan.git
   ```

2. Navigate to the backend directory:
   ```bash
   cd AutoyosScan/backend
   ```

3. Install the required dependencies:
   ```bash
   npm install
   ```

4. Create a `.env` file in the backend directory and add your environment variables, for example:
   ```bash
   PORT=5000
   DATABASE_URL=your_database_url
   JWT_SECRET=your_jwt_secret
   ```

5. Start the backend server:
   ```bash
   npm start
   ```

   Your backend should now be running on `http://localhost:5000`.

---

### **Frontend Setup (React)**

1. Navigate to the frontend directory:
   ```bash
   cd AutoyosScan/frontend
   ```

2. Install the required dependencies:
   ```bash
   npm install
   ```

3. Start the React development server:
   ```bash
   npm start
   ```

   Your frontend should now be running on `http://localhost:3000`.

---

## **Usage**

1. **Operators**:
   - Login and enter patient details using the **Operator Dashboard**.
   - Capture and manage images of patients for analysis.

2. **Doctors**:
   - Login to the **Doctor Dashboard** to view patients awaiting diagnosis.
   - Crop images and provide diagnostic comments.
   - Generate and upload diagnosis reports in PDF format.

---

## **Contributing**

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature/your-feature
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add your feature"
   ```
4. Push to the branch:
   ```bash
   git push origin feature/your-feature
   ```
5. Open a pull request.

---

## **License**

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## **Contact**

For any queries, feel free to contact the project owner:

- **Name**: Pavankumar Hegde
- **Email**: pavankumarkanni@gmail.com
- **Website**: [pavankumarhegde.com](http://pavankumarhegde.com)

---

### **Acknowledgements**

- Thanks to **React**, **Node.js**, and **Express** for providing the powerful frameworks to build this app.
- Special thanks to **Autoyos** for this interesting assessment!
=======

# **AutoyosScan**

**AutoyosScan** is a web-based application designed for the efficient management and diagnosis of patient data using a portable screening device. It enables operators to capture patient demographic details and images, while doctors can view and analyze patient information, providing diagnoses and reports.

---

## **Features**

- **Operator Dashboard**:
  - Capture and manage patient demographic details.
  - Automatically capture patient images using a device camera.
  - View diagnosis reports uploaded by doctors.

- **Doctor Dashboard**:
  - View a list of patients awaiting diagnosis and those already diagnosed.
  - Review demographic details and patient images.
  - Provide diagnosis comments and generate PDF reports.
  
- **Backend**:
  - RESTful APIs for communication between the frontend and backend.
  - Secure handling of patient data with encryption.
  - Scalable database for storing patient information and diagnosis reports.

- **Frontend**:
  - Responsive and user-friendly interface designed for both mobile and desktop devices.
  - Integration with third-party libraries for image cropping and PDF generation.

---

## **Tech Stack**

- **Frontend**:
  - React.js
  - Axios for API requests
  - HTML5, CSS3, JavaScript

- **Backend**:
  - Node.js with Express.js
  - RESTful API design
  - Database: PostgreSQL / MongoDB (choose based on your preference)

- **Security**:
  - JSON Web Tokens (JWT) for user authentication
  - Encryption for sensitive data (patient details, diagnosis reports)

- **Other**:
  - Git for version control
  - Nodemon for backend development
  - dotenv for environment variables

---

## **Setup Instructions**

### **Backend Setup (Node.js with Express)**

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/AutoyosScan.git
   ```

2. Navigate to the backend directory:
   ```bash
   cd AutoyosScan/backend
   ```

3. Install the required dependencies:
   ```bash
   npm install
   ```

4. Create a `.env` file in the backend directory and add your environment variables, for example:
   ```bash
   PORT=5000
   DATABASE_URL=your_database_url
   JWT_SECRET=your_jwt_secret
   ```

5. Start the backend server:
   ```bash
   npm start
   ```

   Your backend should now be running on `http://localhost:5000`.

---

### **Frontend Setup (React)**

1. Navigate to the frontend directory:
   ```bash
   cd AutoyosScan/frontend
   ```

2. Install the required dependencies:
   ```bash
   npm install
   ```

3. Start the React development server:
   ```bash
   npm start
   ```

   Your frontend should now be running on `http://localhost:3000`.

---

## **Usage**

1. **Operators**:
   - Login and enter patient details using the **Operator Dashboard**.
   - Capture and manage images of patients for analysis.

2. **Doctors**:
   - Login to the **Doctor Dashboard** to view patients awaiting diagnosis.
   - Crop images and provide diagnostic comments.
   - Generate and upload diagnosis reports in PDF format.

---

## **Contributing**

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature/your-feature
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add your feature"
   ```
4. Push to the branch:
   ```bash
   git push origin feature/your-feature
   ```
5. Open a pull request.

---

## **License**

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## **Contact**

For any queries, feel free to contact the project owner:

- **Name**: Pavankumar Hegde
- **Email**: pavankumarkanni@gmail.com
- **Website**: [pavankumarhegde.com](http://pavankumarhegde.com)

---

### **Acknowledgements**

- Thanks to **React**, **Node.js**, and **Express** for providing the powerful frameworks to build this app.
- Special thanks to **Autoyos** for this interesting assessment!
>>>>>>> 0479ef39bed8fa129df3ffd4f21aec5501dc4080
