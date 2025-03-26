export default function handler(req, res) {
    if (req.method === 'POST') {
        // Store feedback in a database (e.g., Vercel Postgres)
        res.status(200).json({ message: 'Feedback received' });
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}
