# Citizen Feedback Prototype

A web-based platform to give people a real voice by submitting feedback, issues, or ideas, upvoting what matters, and seeing real-time trends. Built as a static site for deployment on GitHub Pages—no backend required.

## Features
- **Submit Feedback**: Add your thoughts via a simple input form.
- **Upvote**: Boost the visibility of submissions you support.
- **Real-Time Dashboard**: See recent feedback sorted by votes and trending categories.
- **Persistent Storage**: Data sticks around between refreshes using `localStorage`.

## Demo
Check it out live at: `https://<your-username>.github.io/citizen-feedback/` (replace with your actual URL after deployment).

## How It Works
1. **Submission**: Enter text (e.g., "Potholes are killing my car") and submit. It’s auto-categorized (e.g., "Infrastructure").
2. **Upvoting**: Click "Upvote" to increase an item’s score, re-sorting the list instantly.
3. **Trends**: Categories (Infrastructure, Health, Education, Other) show as percentages based on submissions.
