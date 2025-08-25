\# StudentAWS Project



A \*\*Full-Stack Student Management Application\*\* deployed on \*\*AWS\*\* using multiple approaches:

\- \*\*EC2 + RDS\*\*

\- \*\*Elastic Beanstalk (EBS) + RDS\*\*

\- \*\*(Coming Soon) ECS + RDS\*\*



---



\## ✅ Tech Stack

\- \*\*Frontend:\*\* React (Vite)

\- \*\*Backend:\*\* Spring Boot

\- \*\*Database:\*\* PostgreSQL (AWS RDS)

\- \*\*Deployment:\*\* EC2, EBS, (ECS Next)

\- \*\*OS:\*\* Ubuntu 24.04 on EC2 instances



---



\## 🌐 Live URL

Deployed on EC2:

`http://184.72.211.180/`



---



\## ⚙ Features

\- Add, view, update, and delete student records.

\- Frontend integrated with backend APIs.

\- PostgreSQL database hosted on \*\*AWS RDS\*\*.

\- Environment-specific configurations.



---



\## 🚀 Deployment Approaches



\### 1️⃣ EC2 + RDS

\- \*\*Frontend\*\*: Built React app and served using Nginx on EC2.

\- \*\*Backend\*\*: Spring Boot JAR deployed on EC2 instance.

\- \*\*Database\*\*: PostgreSQL RDS instance connected via security groups.



\*\*Steps:\*\*

1\. Launch EC2 instance (Ubuntu).

2\. Install Java, Node.js, and Nginx.

3\. Build backend: `mvn clean package` → `target/studentapp.jar`.

4\. Deploy JAR: `java -jar studentapp.jar`.

5\. Build frontend: `npm run build` → serve `dist/` with Nginx.

6\. Configure security groups for ports 80 (HTTP) and 8080 (Backend).



---



\### 2️⃣ Elastic Beanstalk (EBS) + RDS

\- Packaged backend as a WAR/JAR and deployed on AWS Elastic Beanstalk.

\- Configured environment variables for RDS connection.

\- Connected EBS environment to PostgreSQL RDS.



\*\*Steps:\*\*

1\. Create an Elastic Beanstalk environment (Java Platform).

2\. Upload Spring Boot JAR via AWS Management Console.

3\. Configure RDS endpoint in application properties.



---



\### 3️⃣ (Coming Soon) ECS + RDS

\- Dockerize both \*\*Frontend\*\* and \*\*Backend\*\*.

\- Push images to \*\*Amazon ECR\*\*.

\- Create ECS Fargate cluster with tasks for backend and frontend.

\- Connect services via Application Load Balancer.



---



\## 🔐 Security Considerations

\- Used \*\*AWS Security Groups\*\* for IP whitelisting.

\- Stored DB credentials in environment variables (not in code).

\- Enabled HTTPS for production via Nginx reverse proxy (future step).



---



\## 🛠 How to Run Locally

1\. Clone the repository:

   ```bash

   git clone <repo-url>

   cd studentaws

   ```

2\. Backend:

   ```bash

   cd backend

   mvn spring-boot:run

   ```

3\. Frontend:

   ```bash

   cd frontend

   npm install

   npm run dev

   ```



---



\## 📌 Future Enhancements

\- Deployment on ECS + RDS.

\- Add HTTPS and domain integration with Route 53 \& ACM.

\- CI/CD using GitHub Actions.



---



\## 🖼 Architecture Diagram (Planned)

\[Will include EC2, EBS, ECS deployment flow]



---



\### Author: \*\*Mohan Lal\*\*

GitHub: \[mhnuk2007](https://github.com/mhnuk2007)

