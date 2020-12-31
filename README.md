# Buzzerd

[Add Buzzerd to your Discord server](https://discord.com/api/oauth2/authorize?client_id=793784998930677820&permissions=67128384&redirect_uri=https%3A%2F%2Fbuzzerd.herokuapp.com&scope=bot&redirect_uri=https%3A%2F%2Fbuzzerd.herokuapp.com)

**Buzzerd** is a game show-style buzzer **discord bot**. Users with a certain role (defaulted to `@Buzzer`) are able to control the buzzer's functionality. That functionality includes:
- Enable/disable the buzzer.
- Clear the buzzed-in list.
- Randomize the buzzed-in list.
- Change the mode from normal to **chaos** mode.
  - Chaos mode simply randomizes the buzzed-in list every time someone new buzzes in. Buzzing in first won't mean much!
- Change the server channel that the bot listens to for buzz-ins.

Users buzz in with `!heep`.

Visit the [Buzzerd Mainframe](https://buzzerd.herokuapp.com) to control the buzzer and view the list of people who have currently buzzed in. Anyone who visits this control panel without permission will only be able to view it, while the controls are reserved for users with the `@Buzzer` role.

**NOTE:** The buzzer will be disabled until someone with the `@Buzzer` role enables it. This buzzer role can be changed (`!buzz.role @NewBuzzerRole`) by anyone with the default `@Buzzer` role or with the power to manage roles on the server.

This bot is especially useful for discord servers which host their own _Jeopardy!_ style game show on voice/video chat. Enjoy the fun, and when things get stale, switch to chaos mode!
