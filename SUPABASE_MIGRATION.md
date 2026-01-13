# Supabase Migration Guide

## Overview
This guide will help you migrate from MongoDB to Supabase for improved performance and faster data loading.

## Prerequisites
1. Create a Supabase account at https://supabase.com
2. Create a new project in Supabase

## Step 1: Set Up Supabase Database

### Create Tables
Run the following SQL commands in your Supabase SQL Editor:

```sql
-- Create profiles table
CREATE TABLE profiles (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  role TEXT NOT NULL,
  tagline TEXT,
  bio TEXT,
  email TEXT NOT NULL,
  linkedin TEXT,
  github TEXT,
  resume_url TEXT,
  profile_image_url TEXT,
  skills TEXT[],
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW())
);

-- Create projects table
CREATE TABLE projects (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  technologies TEXT[],
  year TEXT NOT NULL,
  image_url TEXT,
  github_url TEXT,
  live_url TEXT,
  video_url TEXT,
  "order" INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW())
);

-- Create experiences table
CREATE TABLE experiences (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  role TEXT NOT NULL,
  company TEXT NOT NULL,
  start_date TEXT NOT NULL,
  end_date TEXT,
  current BOOLEAN DEFAULT false,
  description TEXT,
  "order" INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW())
);

-- Create education table
CREATE TABLE education (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  degree TEXT NOT NULL,
  institution TEXT NOT NULL,
  start_date TEXT NOT NULL,
  end_date TEXT,
  current BOOLEAN DEFAULT false,
  description TEXT,
  "order" INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW())
);

-- Create indexes for better performance
CREATE INDEX idx_projects_order ON projects("order");
CREATE INDEX idx_experiences_order ON experiences("order");
CREATE INDEX idx_education_order ON education("order");

-- Enable Row Level Security (RLS)
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE experiences ENABLE ROW LEVEL SECURITY;
ALTER TABLE education ENABLE ROW LEVEL SECURITY;

-- Create policies for public read access
CREATE POLICY "Enable read access for all users" ON profiles FOR SELECT USING (true);
CREATE POLICY "Enable read access for all users" ON projects FOR SELECT USING (true);
CREATE POLICY "Enable read access for all users" ON experiences FOR SELECT USING (true);
CREATE POLICY "Enable read access for all users" ON education FOR SELECT USING (true);

-- Create policies for authenticated write access (for admin panel)
CREATE POLICY "Enable insert for authenticated users" ON profiles FOR INSERT WITH CHECK (auth.role() = 'authenticated');
CREATE POLICY "Enable update for authenticated users" ON profiles FOR UPDATE USING (auth.role() = 'authenticated');

CREATE POLICY "Enable insert for authenticated users" ON projects FOR INSERT WITH CHECK (auth.role() = 'authenticated');
CREATE POLICY "Enable update for authenticated users" ON projects FOR UPDATE USING (auth.role() = 'authenticated');
CREATE POLICY "Enable delete for authenticated users" ON projects FOR DELETE USING (auth.role() = 'authenticated');

CREATE POLICY "Enable insert for authenticated users" ON experiences FOR INSERT WITH CHECK (auth.role() = 'authenticated');
CREATE POLICY "Enable update for authenticated users" ON experiences FOR UPDATE USING (auth.role() = 'authenticated');
CREATE POLICY "Enable delete for authenticated users" ON experiences FOR DELETE USING (auth.role() = 'authenticated');

CREATE POLICY "Enable insert for authenticated users" ON education FOR INSERT WITH CHECK (auth.role() = 'authenticated');
CREATE POLICY "Enable update for authenticated users" ON education FOR UPDATE USING (auth.role() = 'authenticated');
CREATE POLICY "Enable delete for authenticated users" ON education FOR DELETE USING (auth.role() = 'authenticated');
```

## Step 2: Configure Environment Variables

### Client Environment (.env in client folder)
```env
REACT_APP_SUPABASE_URL=your-project-url.supabase.co
REACT_APP_SUPABASE_ANON_KEY=your-anon-public-key
```

### Server Environment (.env in server folder)
```env
SUPABASE_URL=your-project-url.supabase.co
SUPABASE_SERVICE_KEY=your-service-role-key
PORT=5000
```

### Vercel Environment Variables (if deploying to Vercel)
Add these to your Vercel project settings:
- `REACT_APP_SUPABASE_URL`
- `REACT_APP_SUPABASE_ANON_KEY`

## Step 3: Install Dependencies

Run these commands in your project root:

```bash
# Install client dependencies
cd client
npm install

# Install server dependencies
cd ../server
npm install
```

## Step 4: Migrate Existing Data (Optional)

If you have existing data in MongoDB, you'll need to export it and import it into Supabase:

1. Export your MongoDB data
2. Transform the data to match the new schema (UUID instead of ObjectId, snake_case instead of camelCase)
3. Import into Supabase using the SQL editor or the Supabase client

### Example data transformation:
```javascript
// MongoDB document
{
  _id: "507f1f77bcf86cd799439011",
  startDate: "2020-01",
  createdAt: "2024-01-01T00:00:00Z"
}

// Supabase row (let UUID auto-generate)
{
  start_date: "2020-01",
  created_at: "2024-01-01T00:00:00Z"
}
```

## Step 5: Update API Keys in Supabase

1. Go to your Supabase project dashboard
2. Navigate to Settings > API
3. Copy your:
   - Project URL
   - `anon` `public` key (for client-side)
   - `service_role` key (for server-side - keep this secret!)

## Benefits of Supabase

✅ **Faster Performance**: Direct client-side queries reduce latency
✅ **Better Scalability**: Built on PostgreSQL with connection pooling
✅ **Real-time Updates**: Native support for real-time subscriptions
✅ **Edge Functions**: Deploy serverless functions closer to users
✅ **Built-in Auth**: Easy authentication and authorization
✅ **Automatic APIs**: RESTful and GraphQL APIs auto-generated
✅ **Free Tier**: Generous free tier for small projects

## Field Name Mapping

Note: Supabase uses snake_case by convention. The field mappings are:

| MongoDB (camelCase) | Supabase (snake_case) |
|---------------------|----------------------|
| startDate | start_date |
| endDate | end_date |
| imageUrl | image_url |
| githubUrl | github_url |
| liveUrl | live_url |
| videoUrl | video_url |
| profileImageUrl | profile_image_url |
| resumeUrl | resume_url |
| createdAt | created_at |
| updatedAt | updated_at |

## Testing

After setup:

1. Start your development server:
```bash
cd server
npm run dev
```

2. Start your client:
```bash
cd client
npm start
```

3. Test the API endpoints:
- GET http://localhost:5000/api/profile
- GET http://localhost:5000/api/projects
- GET http://localhost:5000/api/experience
- GET http://localhost:5000/api/education

## Deployment Notes

- The client now queries Supabase directly, eliminating the need for a slow backend API
- You can still keep the Express server for admin operations and the chatbot
- Consider using Vercel Edge Functions for the chatbot for even better performance

## Troubleshooting

### Error: Missing environment variables
- Check that all `.env` files are properly configured
- Verify that environment variables are loaded in your hosting platform

### Error: PGRST116 (Not found)
- This means no rows were found in the query
- Check that your tables have data

### Slow queries
- Ensure indexes are created on frequently queried columns
- Check Supabase dashboard for query performance insights

## Support

For issues with Supabase, check:
- Supabase Documentation: https://supabase.com/docs
- Supabase Discord: https://discord.supabase.com
