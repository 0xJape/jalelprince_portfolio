# Portfolio Website - Jalel Prince G. Gayo

<div align="center">

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![React](https://img.shields.io/badge/React-18-61DAFB?logo=react)
![Node](https://img.shields.io/badge/Node.js-Express-339933?logo=node.js)
![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-47A248?logo=mongodb)
![AI](https://img.shields.io/badge/AI-Gemini-8E75B2?logo=google)

A modern, full-stack portfolio website showcasing professional work, skills, and experience with an integrated AI-powered chatbot assistant.

[Live Demo](https://github.com/0xJape/jalelprince_portfolio) • [Report Bug](https://github.com/0xJape/jalelprince_portfolio/issues)

</div>

---

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [API Documentation](#api-documentation)
- [Environment Variables](#environment-variables)
- [Customization](#customization)
- [Deployment](#deployment)
- [License](#license)

---

## 🎯 Overview

A professional single-page portfolio application built with modern web technologies. Features a sleek dark-themed UI, smooth animations, and an intelligent AI chatbot powered by Google's Gemini API that can answer visitor questions about skills, experience, and availability.

**Key Highlights:**
- 🎨 Modern dark theme with glass-morphism effects
- 🤖 AI-powered chatbot for interactive visitor engagement
- 📱 Fully responsive design optimized for all devices
- ⚡ Fast performance with optimized animations
- 🔒 Secure MongoDB Atlas cloud database integration
- 🎭 Real technology logos from Icons8 CDN

---

## ✨ Features

### Core Features
- **Hero Section**: Eye-catching introduction with animated gradient backgrounds and availability status
- **About Section**: Comprehensive skills showcase organized by categories with real logos
- **Projects Gallery**: Filterable project showcase with technology tags and live links
- **Experience Timeline**: Tab-based navigation showing work history and education
- **Contact Section**: Professional contact form with multiple contact methods
- **AI Chatbot**: Intelligent assistant powered by Google Gemini 1.5-flash for visitor inquiries

### Technical Features
- Dynamic content management through RESTful API
- Real-time data fetching with Axios
- Smooth scroll animations using AOS library
- Responsive navigation with mobile menu
- SEO-optimized structure
- Database seeding for easy setup

---

## 🛠️ Tech Stack

### Frontend
| Technology | Purpose |
|-----------|---------|
| **React 18** | UI framework for building interactive components |
| **Tailwind CSS** | Utility-first CSS framework for rapid styling |
| **AOS** | Animate On Scroll library for smooth animations |
| **Axios** | HTTP client for API communication |
| **Icons8 CDN** | Real technology logos and icons |

### Backend
| Technology | Purpose |
|-----------|---------|
| **Node.js** | JavaScript runtime environment |
| **Express.js** | Web application framework |
| **MongoDB Atlas** | Cloud-hosted NoSQL database |
| **Mongoose** | MongoDB object modeling |
| **Google Gemini API** | AI-powered chatbot responses |

### Development Tools
- **Nodemon** - Auto-restart server on changes
- **Concurrently** - Run multiple commands simultaneously
- **CORS** - Cross-origin resource sharing middleware

---

## 📁 Project Structure

```
portfolio_website/
├── client/                          # React frontend application
│   ├── public/
│   │   └── index.html              # HTML template
│   ├── src/
│   │   ├── components/
│   │   │   ├── About.js            # Skills and bio section
│   │   │   ├── AdminPanel.js       # Admin interface (development)
│   │   │   ├── Chatbot.js          # AI chatbot component
│   │   │   ├── Contact.js          # Contact form section
│   │   │   ├── Experience.js       # Work & education timeline
│   │   │   ├── Footer.js           # Footer with social links
│   │   │   ├── Hero.js             # Landing section
│   │   │   ├── Navbar.js           # Navigation header
│   │   │   └── Projects.js         # Projects showcase
│   │   ├── services/
│   │   │   └── api.js              # API service configuration
│   │   ├── App.js                  # Main application component
│   │   ├── index.js                # React entry point
│   │   └── index.css               # Global styles
│   ├── tailwind.config.js          # Tailwind configuration
│   └── package.json                # Frontend dependencies
│
├── server/                          # Node.js backend application
│   ├── models/
│   │   ├── Education.js            # Education schema
│   │   ├── Experience.js           # Experience schema
│   │   ├── Profile.js              # Profile schema
│   │   └── Project.js              # Project schema
│   ├── routes/
│   │   ├── chatbot.js              # AI chatbot endpoint
│   │   ├── education.js            # Education CRUD routes
│   │   ├── experience.js           # Experience CRUD routes
│   │   ├── profile.js              # Profile routes
│   │   └── projects.js             # Projects CRUD routes
│   ├── seed.js                     # Database seeding script
│   ├── server.js                   # Express server setup
│   ├── .env.example                # Environment variables template
│   └── package.json                # Backend dependencies
│
├── .gitignore                       # Git ignore rules
├── API_EXAMPLES.md                  # API usage examples
├── README.md                        # Project documentation
└── package.json                     # Root scripts

```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed:
- **Node.js** (v14.0.0 or higher) - [Download](https://nodejs.org/)
- **npm** (comes with Node.js)
- **MongoDB Atlas Account** - [Sign Up](https://www.mongodb.com/cloud/atlas/register)
- **Google Gemini API Key** - [Get Key](https://ai.google.dev/)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/0xJape/jalelprince_portfolio.git
   cd jalelprince_portfolio
   ```

2. **Install all dependencies**
   
   Run this command from the root directory to install dependencies for both client and server:
   ```bash
   npm run install-all
   ```

3. **Configure environment variables**
   
   Navigate to the server folder and create a `.env` file:
   ```bash
   cd server
   cp .env.example .env
   ```
   
   Edit `.env` with your credentials:
   ```env
   PORT=5000
   MONGODB_URI=your_mongodb_atlas_connection_string
   NODE_ENV=development
   GEMINI_API_KEY=your_google_gemini_api_key
   ```

4. **Seed the database** (Optional - loads sample data)
   ```bash
   npm run seed
   ```

5. **Start the development servers**
   
   From the root directory:
   ```bash
   npm run dev
   ```
   
   This starts:
   - Backend API: `http://localhost:5000`
   - React Frontend: `http://localhost:3000`

### Alternative: Run Separately

**Backend only:**
```bash
npm run server
```

**Frontend only:**
```bash
npm run client
```

---

## 📡 API Documentation

### Base URL
```
http://localhost:5000/api
```

### Endpoints

#### Profile
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/profile` | Retrieve profile information |
| POST | `/profile` | Create or update profile |

#### Projects
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/projects` | Get all projects |
| GET | `/projects/:id` | Get specific project |
| POST | `/projects` | Create new project |
| PUT | `/projects/:id` | Update project |
| DELETE | `/projects/:id` | Delete project |

#### Experience
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/experience` | Get all experience entries |
| POST | `/experience` | Create experience entry |
| PUT | `/experience/:id` | Update experience |
| DELETE | `/experience/:id` | Delete experience |

#### Education
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/education` | Get all education entries |
| POST | `/education` | Create education entry |
| PUT | `/education/:id` | Update education |
| DELETE | `/education/:id` | Delete education |

#### Chatbot
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/chatbot` | Send message to AI chatbot |

**Request Body:**
```json
{
  "message": "What skills does Jalel have?"
}
```

**Response:**
```json
{
  "reply": "Jalel works with a comprehensive toolkit including..."
}
```

For detailed API examples, see [API_EXAMPLES.md](API_EXAMPLES.md)

---

## 🔐 Environment Variables

Create a `.env` file in the `server` directory:

```env
# Server Configuration
PORT=5000
NODE_ENV=development

# MongoDB Atlas Connection
# Format: mongodb+srv://<username>:<password>@<cluster>.mongodb.net/<database>
MONGODB_URI=your_mongodb_atlas_uri

# Google Gemini AI API
# Get your key from: https://ai.google.dev/
GEMINI_API_KEY=your_gemini_api_key
```

### Getting Your MongoDB URI:
1. Log into [MongoDB Atlas](https://cloud.mongodb.com/)
2. Click "Connect" on your cluster
3. Choose "Connect your application"
4. Copy the connection string
5. Replace `<password>` with your database user password

### Getting Your Gemini API Key:
1. Visit [Google AI Studio](https://ai.google.dev/)
2. Sign in with your Google account
3. Click "Get API Key"
4. Copy the generated key

---

## 🎨 Customization

### Color Scheme

Edit `client/tailwind.config.js`:
```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#2563EB',      // Blue accent
        secondary: '#F5F5F5',    // Light background
        text: '#1F2937',         // Dark text
        // Add your custom colors
      }
    }
  }
}
```

### Fonts

Modify font imports in `client/src/index.css`:
```css
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
```

### Animation Settings

Adjust AOS configuration in `client/src/App.js`:
```javascript
useEffect(() => {
  AOS.init({
    duration: 1000,    // Animation duration in ms
    once: true,        // Animate only once
    easing: 'ease-out' // Easing function
  });
}, []);
```

### Chatbot Personality

Customize chatbot responses by editing `server/routes/chatbot.js`:
- Modify `JALEL_CONTEXT` to change the AI's knowledge base
- Adjust `temperature` and `maxOutputTokens` in `generationConfig`

---

## 🌐 Deployment

### Frontend (Vercel/Netlify)

1. **Build the React app:**
   ```bash
   cd client
   npm run build
   ```

2. **Deploy the `build` folder** to your hosting platform

### Backend (Heroku/Railway/Render)

1. **Add production environment variables** to your hosting platform
2. **Update MongoDB Atlas IP whitelist** to allow connections from anywhere (0.0.0.0/0)
3. **Deploy from GitHub** or push directly

### Full-Stack (Railway/Render)

Both services support monorepo deployments. Configure build commands:
- **Root**: `npm run install-all`
- **Start**: `npm run dev` or separate commands for client/server

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## 👤 Author

**Jalel Prince G. Gayo**

- Email: [jalelgayo17@gmail.com](mailto:jalelgayo17@gmail.com)
- GitHub: [@0xJape](https://github.com/0xJape)
- Portfolio: [Live Site](#)

---

## 🙏 Acknowledgments

- Icons provided by [Icons8](https://icons8.com/)
- AI powered by [Google Gemini](https://ai.google.dev/)
- Animations by [AOS Library](https://michalsnik.github.io/aos/)
- UI framework by [Tailwind CSS](https://tailwindcss.com/)

---

<div align="center">

**⭐ Star this repository if you find it helpful!**

Made with ❤️ by [Jalel Prince G. Gayo](https://github.com/0xJape)

</div>
