# Portfolio API Examples

## Base URL
http://localhost:5000/api

## 1. UPDATE YOUR PROFILE

**Method:** POST
**URL:** http://localhost:5000/api/profile

**Body (JSON):**
```json
{
  "name": "Jalel Prince Gayo",
  "role": "Full Stack Developer",
  "tagline": "Building innovative web solutions with passion",
  "bio": "I'm a passionate full-stack developer specializing in React, Node.js, and MongoDB. I love turning ideas into reality through code.",
  "email": "jalelprince@example.com",
  "linkedin": "https://linkedin.com/in/yourprofile",
  "github": "https://github.com/yourprofile",
  "resumeUrl": "https://your-resume-link.com/resume.pdf",
  "skills": ["React", "Node.js", "MongoDB", "JavaScript", "Express", "Tailwind CSS"]
}
```

---

## 2. ADD A NEW PROJECT WITH IMAGE/VIDEO

**Method:** POST
**URL:** http://localhost:5000/api/projects

**Body (JSON) - Example with YouTube video:**
```json
{
  "title": "My Portfolio Website",
  "description": "A modern portfolio website built with React and Node.js featuring smooth animations and responsive design",
  "technologies": ["React", "Node.js", "MongoDB", "Tailwind CSS"],
  "year": "2026",
  "imageUrl": "https://i.imgur.com/your-image-id.jpg",
  "githubUrl": "https://github.com/yourprofile/portfolio",
  "liveUrl": "https://your-portfolio.com",
  "videoUrl": "https://www.youtube.com/embed/your-video-id",
  "order": 1
}
```

**Body (JSON) - Example with direct image:**
```json
{
  "title": "E-Learning Platform",
  "description": "Interactive learning platform with video courses, quizzes, and progress tracking",
  "technologies": ["React", "Express", "PostgreSQL", "AWS"],
  "year": "2026",
  "imageUrl": "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
  "githubUrl": "https://github.com/yourprofile/elearning",
  "liveUrl": "https://elearning-demo.com",
  "order": 2
}
```

---

## 3. UPDATE AN EXISTING PROJECT

**Method:** PUT
**URL:** http://localhost:5000/api/projects/{project_id}

Replace `{project_id}` with the actual MongoDB ID from your database.

**Body (JSON):**
```json
{
  "title": "Updated Project Title",
  "description": "Updated description",
  "technologies": ["React", "TypeScript", "Next.js"],
  "imageUrl": "https://new-image-url.com/image.jpg"
}
```

---

## 4. DELETE A PROJECT

**Method:** DELETE
**URL:** http://localhost:5000/api/projects/{project_id}

---

## 5. GET ALL PROJECTS (View current data)

**Method:** GET
**URL:** http://localhost:5000/api/projects

---

## 🖼️ Where to Host Images & Videos

### For Images:
1. **Imgur** (Free & Easy): https://imgur.com
   - Upload image → Right click → Copy image address
   - Example: `https://i.imgur.com/abc123.jpg`

2. **Unsplash** (Free Stock Photos): https://unsplash.com
   - Search for image → Right click → Copy image address
   - Example: `https://images.unsplash.com/photo-...`

3. **Cloudinary** (Professional): https://cloudinary.com
   - Free tier available

### For Videos:
1. **YouTube**:
   - Upload to YouTube
   - Use embed URL: `https://www.youtube.com/embed/VIDEO_ID`

2. **Vimeo**:
   - Upload to Vimeo
   - Use embed URL: `https://player.vimeo.com/video/VIDEO_ID`

---

## 📊 Quick Start: Add Your First Project

1. Start the server: `npm run dev` (from root folder)
2. Install Thunder Client extension (see above)
3. Create a new request in Thunder Client:
   - Method: POST
   - URL: http://localhost:5000/api/projects
   - Body: Select JSON and paste the example above
   - Click Send

---

## 🔍 View Your MongoDB Data

You can also view/edit data directly at:
- MongoDB Atlas Dashboard: https://cloud.mongodb.com
- Find your cluster "Heart1" → Browse Collections
