const { Command } = require("discord-akairo");

class BuzzerNickCommand extends Command {
  constructor() {
    super("nick", {
      aliases: ["nick", "nickname", "name"],
      category: "buzzer",
      channel: "guild",
      prefix: "!buzz.",
      args: [{ id: "nick", type: "phrase" }],
      cooldown: 60000,
      ratelimit: 1,
    });
  }

  userPermissions(message) {
    if (
      !message.member.roles.cache.some(
        (role) =>
          role.name.toLowerCase() ===
          this.client.settings
            .get(message.guild.id, "buzzerRole", "Buzzer")
            .toLowerCase()
      )
    ) {
      return "Only for the one who controls the buzzer.";
    }
    return null;
  }

  async exec(message, { nick }) {
    try {
      if (
        await message.guild.members.cache
          .get(this.client.user.id)
          .setNickname(nick)
      ) {
        return message.channel.send(`Hey, check out my new name!`);
      }
    } catch {
      return message.channel.send(`No.`);
    }
  }
}

module.exports = BuzzerNickCommand;
