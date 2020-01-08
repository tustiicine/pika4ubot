/*CMD
  command: /r
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

bot.sendMessageToAllChats("всех ждет Master KUSH");
var buttons = [
{title: "Помощи!", url: "https://t.me/piak4um"},
{title: "В начало!", command: "/start"}
];

Bot.sendInlineKeyboard(buttons, "Связи с поддержкой:");
