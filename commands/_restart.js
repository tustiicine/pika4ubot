/*CMD
  command: /restart
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var buttons = [
    {title: "C начало!", command: "/start"},
{title: "Помощи", url: "https://t.me/piak4um"}
];

Bot.sendInlineKeyboard(buttons, "Выберите действие:");
