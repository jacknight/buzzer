<p align="center"><img src="https://github.com/jacknight/buzzer/raw/main/assets/bolt-small.png" />
  <br />
  <h1 align="center">
    <strong>Buzzerd</strong>
  </h1>
</p>


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

# Run Locally

You may want to run the bot locally yourself, especially since my bot has reached the maximum number of servers and Discord is slow to verify it. You will need:

1. A MongoDB database
2. A discord bot's token, client ID, and client secret (create a bot on https://discord.com/developers)

Then, to build and run the bot:

1. Clone this repository
2. Create a `.env` file with the following environmental variables:
  - `PORT=<choose a port number, 3000 by default>`
  - `MONGO_USER=<your mongo database user>`
  - `MONGO_PW=<your mongo database password>`
  - `MONGO_DB=<your mongo database name>`
  - `AUTH_TOKEN=<your discord bot auth token>`
  - `DISCORD_BOT_CLIENT_ID=<your discord bot client id>`
  - `DISCORD_BOT_CLIENT_SECRET=<your discord bot client secret>`
  - `DISCORD_LOGIN_LINK=https://discord.com/api/oauth2/authorize?client_id=<your discord bot client id>&response_type=code&scope=identify%20guilds`
    - Make sure to fill in the bot client ID
  - `DISCORD_BOT_LINK=https://discord.com/api/oauth2/authorize?client_id=<your discord bot client id>&permissions=67128384&scope=bot`
    - Make sure to fill in the bot client ID 
  - `DISCORD_LOGOUT_LINK=http://localhost:<your chosen port number>`
    - Make sure to fill in the port number, either with the one chosen above or with 3000 if you didn't choose one. 
 3. npm install
 4. npm start
 5. Reach the web frontend at `http://localhost:<your chosen port number>`.

[logo]: https://github.com/jacknight/buzzer/raw/main/assets/bolt-small.png "Buzzerd Lightning Bolt Logo"
