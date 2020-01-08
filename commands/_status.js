/*CMD
  command: /status
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var buttons = [
    {title: "СТАТУС", command: "/status"},
    {title: "Помощи!", url: "https://t.me/piak4um"},
    {title: "В начало!", command: "/start"}
];

Bot.sendInlineKeyboard(buttons, "Оплата ожидается. Если вы оплатили свой заказ и с момента оплаты прошло не более 10 минут, не стоит волноваться. При оплате с помощью Bitcoin возможны задержки до нескольких часов, в зависимости от комиссии и загруженности сети.");
