

const axios = require('axios');

class TelegramController {
  constructor(token) {
    this.token = token;
    this.url = `https://api.telegram.org/bot${this.token}/getUpdates`;
  }

  async getUpdates() {
    try {
      const response = await axios.get(this.url);
      const updates = response.data;

      console.log('Updates:', updates);

      if (updates.result.length > 0) {
        const message = updates.result[0].message;
        console.log('Message object:', message);

        const chatId = message.chat.id;
        console.log('Chat ID:', chatId);
      } else {
        console.log('No messages found in updates.');
      }
    } catch (error) {
      console.error('Error fetching updates:', error.response ? error.response.data : error.message);
    }
  }
}

module.exports = TelegramController;
