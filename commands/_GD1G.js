/*CMD
  command: /GD1G
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var buttons = [
    {title: "Centru", command: "/GD1Gcen"},
    {title: "Botanica", command: "/GD1Gbot" },
    {title: "Riscani", command: "/GD1Grka" },
    {title: "Ciocana", command: "/GD1Gcio" },
    {title: "Buiucani", command: "/GD1Gbui" }
];

Bot.sendInlineKeyboard(buttons, "Избран продукт: Master KUSH 1г. \n Коротко о товаре: \n Цена: 13 USD \n Выберите подходящий район:")
