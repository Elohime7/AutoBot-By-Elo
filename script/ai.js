const axios = require('axios');
module.exports.config = {
  name: 'ai',
  version: '1.0.0',
  role: 0,
  hasPrefix: false,
  aliases: ['gpt', 'elo'],
  description: "An AI command powered by elo",
  usage: "Ai [promot]",
  credits: 'elohime',
  cooldown: 3,
};
module.exports.run = async function({
  api,
  event,
  args
}) {
  const input = args.join(' ');
  if (!input) {
    api.sendMessage(`Please provide a question\n\nI'AM GOHIME'S BOT 😼`, event.threadID, event.messageID);
    return;
  }
  api.sendMessage(`😪"${input}\n\nI'AM GOHIME'S BOT😼"`, event.threadID, event.messageID);
  try {
    const {
      data
    } = await axios.get(`https://openaikey-x20f.onrender.com/api?prompt=${encodeURIComponent(input)}\n\I'M GOHIME'S BOT😼`);
    const response = data.response;
    api.sendMessage(response, event.threadID, event.messageID);
  } catch (error) {
    api.sendMessage('An error occurred while processing your request.', event.threadID, event.messageID);
  }
};
