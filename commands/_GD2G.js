/*CMD
  command: /GD2G
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var buttons = [
    {title: "Centru", command: "/GD2Gcen"},
    {title: "Botanica", command: "/GD2Gbot"},
    {title: "Riscani", command: "/GD2Grka"},
    {title: "Ciocana", command: "/GD2Gcio"}, 
    {title: "Buiucani", command: "/GD2Gbui"}
];

Bot.sendInlineKeyboard(buttons, "Избран продукт: Master KUSH 2g. Коротко о товаре: \n Цена: 26 USD \n Выберите подходящий район:");
