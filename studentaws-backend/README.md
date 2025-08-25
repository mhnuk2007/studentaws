# Student AWS Project

This project is a **Full Stack Student Management Application** deployed on **AWS EC2** with a **PostgreSQL RDS** database.

## 🚀 Tech Stack
- **Frontend:** React (Vite) + Axios
- **Backend:** Spring Boot (Java 17)
- **Database:** PostgreSQL (AWS RDS)
- **Server:** Nginx (Reverse Proxy)
- **Hosting:** AWS EC2 (Ubuntu 24.04)

## ✅ Features
- Add new students
- View all students
- Backend API built with Spring Boot
- PostgreSQL database hosted on AWS RDS
- Frontend served using Nginx reverse proxy

## 🌐 Live Demo
[http://184.72.211.180/](http://184.72.211.180/)

## 📂 Project Structure
```
studentaws/
 ├── backend/      # Spring Boot app
 ├── frontend/     # React Vite app
```

## ⚙️ Deployment Steps
1. **Setup EC2 Instance** (Ubuntu)
2. **Install Java, Node.js, Nginx**
3. **Deploy Backend:**
    - Build JAR: `mvn clean package`
    - Copy JAR: `scp target/studentapp.jar ubuntu@<ec2-ip>:/home/ubuntu/`
    - Run: `nohup java -jar studentapp.jar &`
4. **Deploy Frontend:**
    - Build: `npm run build`
    - Copy `dist/` to EC2
    - Configure **Nginx** as reverse proxy
5. **Configure PostgreSQL RDS**
6. **Set Environment Variables** for DB connection
7. **Access the App:** [http://<ec2-ip>/](http://<ec2-ip>/)

## 🔐 Security Notes
- Use **security groups** to allow ports: 80 (HTTP), 22 (SSH), 8080 (backend)
- Hide database credentials using environment variables or AWS Secrets Manager

## 🛠 Future Improvements
- Dockerize frontend & backend
- Deploy using **AWS ECS or EKS**
- Enable HTTPS with **Let's Encrypt SSL**
- Implement **CI/CD with GitHub Actions**

---
👨‍💻 **Author:** Mohan Lal  
📌 **LinkedIn:** [https://www.linkedin.com/in/mohan-lal-b79790126/]  
📌 **GitHub:** [https://github.com/mhnuk2007]
