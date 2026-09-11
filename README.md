# TeamFlow

TeamFlow is a production-grade full-stack SaaS application for team collaboration and project management.

## Project Structure

```text
TeamFlow/
├── client/          # React + TypeScript + Vite + Tailwind CSS frontend
├── server/          # Node.js + Express + TypeScript backend
├── .gitignore       # Root Git ignore configuration
└── README.md        # Project documentation
```

## Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- npm (v9+ recommended)

---

### Environment Setup

Neither real `.env` files nor secret values are stored in Git. Before running each application, create local `.env` files based on the provided `.env.example` templates:

1. **Backend Environment**:
   Copy `server/.env.example` to `server/.env`:
   ```bash
   cp server/.env.example server/.env
   ```

2. **Frontend Environment**:
   Copy `client/.env.example` to `client/.env`:
   ```bash
   cp client/.env.example client/.env
   ```

---

### Backend (`server/`)

#### 1. Install dependencies
```bash
cd server
npm install
```

#### 2. Run in development mode
```bash
npm run dev
```
The server starts on port `5000` by default.
Verify health endpoint at `http://localhost:5000/api/health`.

#### 3. Build for production
```bash
npm run build
npm start
```

---

### Frontend (`client/`)

#### 1. Install dependencies
```bash
cd client
npm install
```

#### 2. Run in development mode
```bash
npm run dev
```
The Vite development server starts on `http://localhost:5173` by default.

#### 3. Build for production
```bash
npm run build
```
