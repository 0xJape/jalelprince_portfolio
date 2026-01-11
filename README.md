# Portfolio Website

A modern, professional single-page portfolio website built with React, Node.js, and MongoDB.

## Features

- **Modern Design**: Clean, professional design with smooth scroll animations
- **Responsive**: Mobile-first approach that works on all devices
- **Dynamic Content**: Content managed through MongoDB database
- **Sections**:
  - Hero/Introduction with name, role, and tagline
  - About section with bio and skills
  - Projects showcase with technologies and links
  - Experience & Education timeline
  - Contact section with social links
  - Professional footer

## Tech Stack

### Frontend
- React 18
- Tailwind CSS (custom color palette)
- AOS (Animate On Scroll) library
- Axios for API calls
- Poppins & Roboto fonts

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- CORS enabled

## Project Structure

```
portfolio_website/
├── client/                 # React frontend
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.js
│   │   │   ├── Hero.js
│   │   │   ├── About.js
│   │   │   ├── Projects.js
│   │   │   ├── Experience.js
│   │   │   ├── Contact.js
│   │   │   └── Footer.js
│   │   ├── services/
│   │   │   └── api.js
│   │   ├── App.js
│   │   ├── index.js
│   │   └── index.css
│   ├── tailwind.config.js
│   ├── postcss.config.js
│   └── package.json
├── server/                 # Node.js backend
│   ├── models/
│   │   ├── Project.js
│   │   ├── Experience.js
│   │   ├── Education.js
│   │   └── Profile.js
│   ├── routes/
│   │   ├── projects.js
│   │   ├── experience.js
│   │   ├── education.js
│   │   └── profile.js
│   ├── server.js
│   ├── .env.example
│   └── package.json
└── package.json            # Root package.json

```

## Installation

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or cloud instance)

### Setup Steps

1. **Clone or navigate to the project directory**

2. **Install all dependencies** (root, client, and server):
   ```bash
   npm run install-all
   ```

3. **Set up environment variables**:
   - Navigate to the `server` folder
   - Copy `.env.example` to `.env`:
     ```bash
     cd server
     cp .env.example .env
     ```
   - Edit `.env` and update MongoDB URI if needed:
     ```
     PORT=5000
     MONGODB_URI=mongodb://localhost:27017/portfolio
     NODE_ENV=development
     ```

4. **Start MongoDB** (if running locally):
   ```bash
   mongod
   ```

## Running the Application

### Development Mode (Run both client and server concurrently)

From the root directory:
```bash
npm run dev
```

This will start:
- Backend server on `http://localhost:5000`
- React app on `http://localhost:3000`

### Run Separately

**Backend only**:
```bash
npm run server
```

**Frontend only**:
```bash
npm run client
```

## API Endpoints

### Profile
- `GET /api/profile` - Get profile information
- `POST /api/profile` - Create/Update profile

### Projects
- `GET /api/projects` - Get all projects
- `GET /api/projects/:id` - Get single project
- `POST /api/projects` - Create new project
- `PUT /api/projects/:id` - Update project
- `DELETE /api/projects/:id` - Delete project

### Experience
- `GET /api/experience` - Get all experience entries
- `POST /api/experience` - Create experience entry
- `PUT /api/experience/:id` - Update experience entry
- `DELETE /api/experience/:id` - Delete experience entry

### Education
- `GET /api/education` - Get all education entries
- `POST /api/education` - Create education entry
- `PUT /api/education/:id` - Update education entry
- `DELETE /api/education/:id` - Delete education entry

## Adding Content

### Example: Add Profile Data

Send a POST request to `http://localhost:5000/api/profile`:

```json
{
  "name": "John Doe",
  "role": "Full Stack Developer",
  "tagline": "Building modern web applications",
  "bio": "Passionate developer with 5+ years of experience...",
  "email": "john@example.com",
  "linkedin": "https://linkedin.com/in/johndoe",
  "github": "https://github.com/johndoe",
  "resumeUrl": "https://example.com/resume.pdf",
  "skills": ["React", "Node.js", "MongoDB", "JavaScript", "TypeScript"]
}
```

### Example: Add a Project

Send a POST request to `http://localhost:5000/api/projects`:

```json
{
  "title": "E-commerce Platform",
  "description": "Full-stack e-commerce solution with payment integration",
  "technologies": ["React", "Node.js", "MongoDB", "Stripe"],
  "year": "2024",
  "githubUrl": "https://github.com/johndoe/ecommerce",
  "liveUrl": "https://example.com",
  "order": 1
}
```

## Customization

### Colors
Edit [client/tailwind.config.js](client/tailwind.config.js):
```javascript
colors: {
  primary: '#2563EB',    // Blue accent
  secondary: '#F5F5F5',  // Light gray
  text: '#1F2937',       // Dark gray/charcoal
}
```

### Fonts
Modify the Google Fonts import in [client/src/index.css](client/src/index.css)

### Animations
Configure AOS settings in [client/src/App.js](client/src/App.js):
```javascript
AOS.init({
  duration: 1000,
  once: true,
  easing: 'ease-out',
});
```

## Production Build

1. Build the React app:
   ```bash
   npm run build
   ```

2. The optimized build will be in `client/build/`

3. Serve the built files with the Express backend or any static hosting service

## Technologies Used

- **Frontend**: React, Tailwind CSS, AOS
- **Backend**: Node.js, Express
- **Database**: MongoDB, Mongoose
- **HTTP Client**: Axios
- **Dev Tools**: Nodemon, Concurrently

## Design Principles

- **Modern Formal**: Professional color palette and typography
- **Mobile-First**: Responsive design that scales beautifully
- **Smooth Animations**: Fade-up, fade-left/right, and slide-up effects
- **User Experience**: Smooth scrolling and hover effects
- **Performance**: Optimized for fast loading

## License

MIT

## Author

Your Name

---

**Note**: Make sure MongoDB is running before starting the server. Update the `.env` file with your specific configuration.
