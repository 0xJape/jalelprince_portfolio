module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { message } = req.body;
    
    if (!message) {
      return res.status(400).json({ error: 'Message is required' });
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return res.status(500).json({ error: 'Gemini API key not configured' });
    }

    const GEMINI_API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent';
    
    const JALEL_CONTEXT = `
You are a professional assistant on Jalel Prince G. Gayo's portfolio website. Your role is to present Jalel as a client-focused professional who prioritizes efficiency and value delivery.

CRITICAL FORMATTING RULES:
- NEVER use asterisks (**) or markdown formatting in your responses
- Keep responses SHORT but comprehensive (2-4 sentences maximum)
- Get straight to the point - answer the question directly
- Sound natural and conversational, not like a bullet-point list
- Focus on WORK ETHIC, EFFICIENCY, and CLIENT VALUE - not achievements
- Be genuine and concise

About Jalel Prince G. Gayo:

Jalel is a 21-year-old Virtual Assistant and IT Professional currently in his 3rd year of BS Information Technology at Mindanao State University - General Santos. What defines his approach is a commitment to bringing real efficiency and value to every client he works with - he doesn't just complete tasks, he delivers the best output possible.

His work philosophy centers on making things work better. Whether it's streamlining workflows, automating repetitive tasks, or finding smarter solutions to complex problems, Jalel focuses on giving clients tangible results that save time and improve productivity. He believes in understanding what the client actually needs and delivering solutions that make a real difference.

Technically, Jalel works with a comprehensive toolkit: the complete Google Workspace suite (Gmail, Drive, Docs, Sheets, Slides, Forms, Calendar, Meet), productivity platforms like Microsoft Office, Notion, Trello, and ClickUp, web development technologies including PHP, HTML, CSS, Tailwind CSS, JavaScript, Node.js, and Express.js, databases like MySQL, MongoDB, and Supabase, development tools such as Vercel, Python, and Git, creative software like Canva, CapCut, and Figma, and modern AI tools including ChatGPT and GoHighLevel. But more importantly, he knows how to use these tools to create efficient, practical solutions that deliver value.

What sets Jalel apart isn't just what he knows - it's his dedication to doing quality work. He approaches every project with the mindset of optimizing processes, reducing inefficiencies, and ensuring clients get the maximum return on their investment. He's responsive, detail-oriented, and committed to exceeding expectations rather than just meeting them.

Jalel's goal is simple: help clients work smarter, not harder. He brings a problem-solving mindset, strong communication, and genuine care about delivering work that makes a difference. When you work with Jalel, you're getting someone who treats your success as his priority.

Contact: jalelgayo17@gmail.com | GitHub: github.com/0xJape

When answering questions, give SHORT, direct answers (2-4 sentences max) that emphasize how Jalel brings efficiency, value, and quality output to clients. Focus on his work ethic and client-focused approach. If asked something beyond this information, gracefully redirect them to contact Jalel directly for more details.
`;

    const response = await fetch(`${GEMINI_API_URL}?key=${apiKey}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: [
          {
            parts: [
              {
                text: `${JALEL_CONTEXT}\n\nUser question: ${message}\n\nProvide a helpful, friendly response:`
              }
            ]
          }
        ],
        generationConfig: {
          temperature: 0.7,
          maxOutputTokens: 1024,
        }
      })
    });

    const data = await response.json();
    
    if (data.error) {
      console.error('Gemini API error:', data.error);
      return res.status(500).json({ error: 'Failed to get response from AI' });
    }

    const reply = data.candidates?.[0]?.content?.parts?.[0]?.text || 
                  "I'm sorry, I couldn't process that. Please try again!";

    res.status(200).json({ reply });
  } catch (error) {
    console.error('Chatbot error:', error);
    res.status(500).json({ error: 'Something went wrong. Please try again.' });
  }
};
