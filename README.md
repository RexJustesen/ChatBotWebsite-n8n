# ChatBot Website with Booking Form

This project is a chatbot website for testing n8n workflows. The chatbot assists users with inquiries and allows them to book an assessment through a modal form.

## Features

- **Chatbot**: A responsive chatbot that provides conversational responses to user queries.
- **Notification System**: Displays a notification badge for unread messages when the chat widget is closed.
- **Booking Form**: A modal form for booking assessments, dynamically triggered by the chatbot.
- **Responsive Design**: Fully responsive layout using modern CSS.

## Technologies Used

- **HTML5**: For the structure of the website.
- **CSS3**: For styling, including responsive design.
- **JavaScript**: For interactivity and chatbot functionality.

## How It Works

1. **Chatbot Interaction**:
   - Users can type messages into the chat input field and press Enter or click the Send button.
   - The chatbot responds based on backend logic and may include a "Book an Assessment" button if necessary.

2. **Notification System**:
   - When the chat widget is closed, a notification badge displays the number of unread messages.

3. **Booking Form**:
   - The chatbot can dynamically provide a "Book an Assessment" button.
   - Clicking the button opens a modal form where users can fill in their details and submit a booking request.

## Setup Instructions

1. Clone the repository to your local machine.
2. Open the `index.html` file in a web browser to view the website.
3. Ensure the backend webhook URL is correctly configured in `script.js`.

## File Structure

- `index.html`: The main HTML file for the website.
- `styles.css`: Contains all the styles for the website.
- `script.js`: Handles chatbot interactivity, modal functionality, and backend communication.
- `chat-icon.png`: The icon for the floating chat widget.

## Backend Integration

- The chatbot communicates with a backend webhook to fetch responses.
- The backend should return a JSON response with the following structure:
  ```json
  {
    "reply": "Your chatbot response here",
    "showBookingButton": true
  }
  ```
- The `showBookingButton` field determines whether the "Book an Assessment" button is displayed.

## Future Enhancements

- Add validation to the booking form.
- Store booking form submissions in a database.
- Enhance chatbot responses with AI-driven logic.
