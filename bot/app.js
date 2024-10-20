import {Telegraf, Markup} from "telegraf"

const token = '6219391838:AAHDP9UXZWBC_xZH72XUqe1gj998qLbwAV8';
const webAppUrl = 'https://lizard-clicker-pro-b1f29.web.app';

const bot = new Telegraf(token);

bot.command('start',(ctx)=>{
    ctx.reply(
        'Hello! Press to start the app',Markup.inlineKeyboard([
            Markup.button.webApp(
                'Open mini app',
                `${webAppUrl}?ref=${ctx.payload}`
            )
        ])
    )
});
bot.launch();