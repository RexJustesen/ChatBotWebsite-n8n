document.getElementById('send-button').addEventListener('click', async function() {
    const input = document.getElementById('chat-input');
    const messages = document.getElementById('chat-messages');

    if (input.value.trim() !== '') {
        // Display the user's message
        const userMessage = document.createElement('div');
        userMessage.textContent = input.value;
        userMessage.className = 'chat-message user';
        messages.appendChild(userMessage);

        // Send the message to the webhook
        try {
            const response = await fetch('put your n8n webhook url here', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ message: input.value })
            });

            if (response.ok) {
                const data = await response.json();

                // Call handleNewMessage with the backend response
                handleNewMessage(data.reply || 'No response from bot', data.showBookingButton || false);
            } else {
                console.error('Error from webhook:', response.statusText);
            }
        } catch (error) {
            console.error('Error sending message to webhook:', error);
        }

        // Clear the input field
        input.value = '';
        messages.scrollTop = messages.scrollHeight;
    }
});

const chatIcon = document.getElementById('chat-icon');
const chatWidget = document.getElementById('chat-widget');
const closeChatButton = document.getElementById('close-chat');
const notificationBadge = document.getElementById('notification-badge');
let unreadMessages = 0;

// Toggle chat widget visibility
chatIcon.addEventListener('click', () => {
    chatWidget.classList.toggle('hidden');
    if (!chatWidget.classList.contains('hidden')) {
        chatWidget.style.display = 'flex'; // Ensure the widget is displayed
        unreadMessages = 0;
        notificationBadge.style.visibility = 'hidden';
    } else {
        chatWidget.style.display = 'none'; // Hide the widget when hidden
    }
});

// Close chat widget
closeChatButton.addEventListener('click', () => {
    chatWidget.classList.add('hidden');
    chatWidget.style.display = 'none'; // Ensure the widget is hidden
});

// Update notification badge on new message
async function handleNewMessage(message, showBookingButton = false) {
    const messages = document.getElementById('chat-messages');

    // Display the bot's response
    const botMessage = document.createElement('div');
    botMessage.className = 'chat-message bot';

    const botText = document.createElement('p');
    botText.textContent = message;
    botMessage.appendChild(botText);

    // Add "Book an Assessment" button if required
    if (showBookingButton) {
        const bookingButton = document.createElement('button');
        bookingButton.textContent = 'Book an Assessment';
        bookingButton.className = 'btn btn-primary mt-2';
        bookingButton.addEventListener('click', openModal); // Function to open the modal
        botMessage.appendChild(bookingButton);
    }

    messages.appendChild(botMessage);

    // Update notification badge if the chat widget is hidden
    if (chatWidget.classList.contains('hidden')) {
        unreadMessages++;
        notificationBadge.textContent = unreadMessages;
        notificationBadge.style.visibility = 'visible';
    }

    // Always scroll to the bottom of the messages
    messages.scrollTop = messages.scrollHeight;
}

// Example: Simulate receiving a new message
setTimeout(() => {
    const initialMessage = "Hello! How can I assist you today?";
    handleNewMessage(initialMessage); // Ensure the initial message is styled correctly
}, 5000);

document.getElementById('chat-input').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault(); // Prevent default form submission behavior
        document.getElementById('send-button').click(); // Trigger the send button click event

        // Clear the input field
        document.getElementById('chat-input').value = '';
    }
});

// Modal functionality
const bookingModal = document.getElementById('booking-modal');
const closeModal = document.getElementById('close-modal');

// Open modal
function openModal() {
    bookingModal.style.display = 'block';
}

// Close modal
closeModal.addEventListener('click', () => {
    bookingModal.style.display = 'none';
});

// Close modal when clicking outside of it
window.addEventListener('click', (event) => {
    if (event.target === bookingModal) {
        bookingModal.style.display = 'none';
    }
});

