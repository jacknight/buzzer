const { Command } = require("discord-akairo");

class BuzzerRoleCommand extends Command {
  constructor() {
    super("role", {
      aliases: ["role"],
      category: "buzzer",
      channel: "guild",
      prefix: "!buzz.",
      args: [{ id: "role", type: "role" }],
      cooldown: 120000,
      ratelimit: 1,
    });
  }

  async userPermissions(message) {
    const buzzerRole = await this.client.settings
      .get(message.guild.id, "buzzerRole", "buzzer")
      .toLowerCase();
    if (
      !message.member.hasPermission("MANAGE_ROLES") &&
      !message.member.roles.cache.some((role) => {
        return role.name.toLowerCase() === buzzerRole;
      })
    ) {
      return message.channel.send(
        `You don't have permission. Must have role \`${buzzerRole}\` or otherwise have permission to manage roles.`
      );
    }
    return null;
  }

  exec(message, { role }) {
    if (!role) {
      return message.channel.send(`That role does not exist.`);
    }
    this.client.settings.set(message.guild.id, "buzzerRole", role.name);
    return message.channel.send(
      `Only users with the role \`${role.name}\` can configure the buzzer.`
    );
  }
}

module.exports = BuzzerRoleCommand;
