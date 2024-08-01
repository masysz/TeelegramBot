const axios = require('axios');

const token = '7228274320:AAFYhCM29Dz3HkttD8UHx6P6rOusw6Z3cmc';
const url = `https://api.telegram.org/bot${token}/getUpdates`;

// Function to fetch updates and print chat ID
async function getUpdates() {
  try {
    // Make the GET request to fetch updates
    const response = await axios.get(url);
    const updates = response.data;

    // Log the updates received from the API
    console.log('Updates:', updates);

    // Check if there are any updates
    if (updates.result.length > 0) {
      const message = updates.result[0].message;
      console.log('Message object:', message);

      const chatId = message.chat.id;
      console.log('Chat ID:', chatId);
    } else {
      console.log('No messages found in updates.');
    }
  } catch (error) {
    // Log error details
    console.error('Error fetching updates:', error.response ? error.response.data : error.message);
  }
}

getUpdates();
