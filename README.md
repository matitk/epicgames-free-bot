# Telegram Bot for Epic Games Free Games

This Telegram bot is designed to send weekly messages with the free games available on Epic Games. It is built with Node.js. It is deployed on Cloudflare Workers with a cron job that runs every Thursday at 13:10.

## Prerequisites

To use this bot, you will need:

- A Telegram account and a bot created through the [Telegram Bot Father](https://core.telegram.org/bots#6-botfather)
- A Cloudflare account and the Wrangler tool installed on your local machine
- A wrangler.toml file containing your bot's API key and chat ID, which can be obtained through the [Telegram API](https://core.telegram.org/api)

## Installation

1. Clone the repository to your local machine: `git clone https://github.com/matitk/epic-games-bot.git`
2. Install the dependencies: `cd epic-games-bot; npm install`
3. Edit `wrangler.toml.example` file in the root directory of the project, with your keys and reneame to `wrangler.toml`.

## Usage

To start the bot in development mode, run the following command: `npm run dev`
The bot will send a message to the specified chat with the list of free games every Thursday at 13:10.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.