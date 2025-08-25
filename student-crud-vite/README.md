# Student CRUD — React + Vite (frontend) for Spring Boot API

## Quick start
```bash
npm install
npm run dev
```

If your API is not on `http://localhost:8080`, open the app and update the **API Base URL** card. It is saved to `localStorage` and used for all calls.

## Endpoints expected
- `GET /students`
- `POST /students`
- `GET /students/{id}`
- `PUT /students/{id}`
- `DELETE /students/{id}`

## Build for production
```bash
npm run build
npm run preview
```

## Deploy
- **Static hosting** (S3/CloudFront): deploy the `dist/` folder after `npm run build`.
- Ensure CORS is allowed on your Spring Boot API if API and frontend are on different domains.
