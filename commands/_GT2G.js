/*CMD
  command: /GT2G
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

Api.sendPhoto({
  photo: "https://www.forkosher.com/images/normal/121Q66abKNup84mPiA5XW999Om8wv.jpg"}) // it is picture!
var buttons = [
    {title: "Centru", command: "/GT2Gcen"},
    {title: "Botanica", command: "/GT2Gbot" },
    {title: "Riscani", command: "/GT2Grka" },
    {title: "Ciocana", command: "/GT2Gcio" },
    {title: "Buiucani", command: "/GT2Gbui" }
];

Bot.sendInlineKeyboard(buttons, "\n Избран продукт: Bubble Haze, 2gr. Коротко о товаре: \n Цена: 27 USD \n Выберите подходящий район:");
