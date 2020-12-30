const { Command } = require("discord-akairo");

class HelloCommand extends Command {
  constructor() {
    super("hello", {
      cooldown: 3600000,
      ratelimit: 1,
      regex: /(hello|hey|hi|howdy|sup|good morning|good afternoon|good evening)/i,
    });
  }

  exec(message) {
    if (message.mentions.users.has(this.client.user.id)) {
      message.channel.send("Can't talk, I'm at work. Let's meet face-to-face.");
    }
  }
}

module.exports = HelloCommand;