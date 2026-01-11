import React, { useState } from 'react';
import axios from 'axios';

const AdminPanel = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    technologies: '',
    year: new Date().getFullYear().toString(),
    imageUrl: '',
    videoUrl: '',
    githubUrl: '',
    liveUrl: '',
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const projectData = {
        ...formData,
        technologies: formData.technologies.split(',').map((t) => t.trim()),
      };

      await axios.post('http://localhost:5000/api/projects', projectData);
      setMessage('✅ Project added successfully!');
      setFormData({
        title: '',
        description: '',
        technologies: '',
        year: new Date().getFullYear().toString(),
        imageUrl: '',
        videoUrl: '',
        githubUrl: '',
        liveUrl: '',
      });

      setTimeout(() => {
        window.location.reload();
      }, 1500);
    } catch (error) {
      setMessage('❌ Error adding project: ' + error.message);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-heading font-bold text-text mb-6">
          Add New Project
        </h1>

        {message && (
          <div className={`p-4 rounded mb-6 ${message.includes('✅') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
            {message}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Project Title *
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="My Awesome Project"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Description *
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
              rows="3"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="Describe your project..."
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Technologies (comma-separated) *
            </label>
            <input
              type="text"
              name="technologies"
              value={formData.technologies}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="React, Node.js, MongoDB"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Year *
            </label>
            <input
              type="text"
              name="year"
              value={formData.year}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="2026"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Image URL (optional)
            </label>
            <input
              type="url"
              name="imageUrl"
              value={formData.imageUrl}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="https://i.imgur.com/your-image.jpg"
            />
            <p className="text-xs text-gray-500 mt-1">
              Upload to Imgur, Unsplash, or use any image URL
            </p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Video URL (optional)
            </label>
            <input
              type="url"
              name="videoUrl"
              value={formData.videoUrl}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="https://www.youtube.com/embed/VIDEO_ID"
            />
            <p className="text-xs text-gray-500 mt-1">
              Use YouTube embed URL (overrides image if both provided)
            </p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              GitHub URL (optional)
            </label>
            <input
              type="url"
              name="githubUrl"
              value={formData.githubUrl}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="https://github.com/username/repo"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Live Demo URL (optional)
            </label>
            <input
              type="url"
              name="liveUrl"
              value={formData.liveUrl}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="https://your-project.com"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-primary text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            Add Project
          </button>
        </form>

        <div className="mt-8 pt-8 border-t border-gray-200">
          <h2 className="text-xl font-heading font-semibold text-text mb-4">
            Quick Links
          </h2>
          <div className="flex gap-4">
            <a
              href="/"
              className="text-primary hover:text-blue-700 font-medium"
            >
              ← Back to Portfolio
            </a>
            <a
              href="https://imgur.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-blue-700 font-medium"
            >
              Upload to Imgur ↗
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
