/*CMD
  command: /start
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var buttons = [

    {title: "Chisinau", command: "/Chisinau" }
];

Bot.sendInlineKeyboard(buttons,"\n Добро пожаловать в магазин Пикачу."+" \n Список активных ботов автопродаж /bots"+"\n Дополнительная информация /contacts"+" \n так же магазин доступен через браузер https://pika4u.top ");
