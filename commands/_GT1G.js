/*CMD
  command: /GT1G
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var buttons = [
    {title: "Centru", command: "/GT1Gcen"},
    {title: "Botanica", command: "/GT1Gbot" },
    {title: "Riscani", command: "/GT1Grka" },
    {title: "Ciocana", command: "/GT1Gcio" },
    {title: "Buiucani", command: "/GT1Gbui" }
];

Bot.sendInlineKeyboard(buttons, "Избран продукт: Budha Haze 1g. Коротко о товаре: \n Цена: 14 USD \n Выберите подходящий район:");
