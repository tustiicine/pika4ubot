/*CMD
  command: /contacts
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var buttons = [
{title: "Помощи!", url: "https://t.me/piak4uz"},
{title: "В начало!", command: "/start"}
];

Bot.sendInlineKeyboard(buttons, "Связи с поддержкой:");
