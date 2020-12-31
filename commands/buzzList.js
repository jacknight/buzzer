const { Command } = require("discord-akairo");

class BuzzerListCommand extends Command {
  constructor() {
    super("list", {
      aliases: ["list"],
      category: "buzzer",
      channel: "guild",
      prefix: "!buzz.",
      cooldown: 10000,
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

  exec(message) {
    const buzzerQueue = this.client.settings.get(
      message.guild.id,
      "buzzerQueue",
      []
    );

    if (buzzerQueue.length === 0) {
      return message.channel.send("Buzz list is empty.");
    }

    var num = 1;
    return message.channel.send(
      `Buzz list: ${buzzerQueue.reduce((str, buzz) => {
        const member = this.client.util.resolveMember(
          JSON.parse(buzz).id,
          message.guild.members.cache
        );
        return str + `${num++}. ${member.nickname || member.user.username}\n`;
      }, "\n")}`
    );
  }
}

module.exports = BuzzerListCommand;
