/*CMD
  command: /Chisinau
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var buttons = [
   // {title: "Master KUSH 1г, 13USD", command: "/GD1G"},
 //   {title: "Master KUSH 2г, 26USD", command: "/GD2G" },
  {title: "Budha Haze 1г, 14USD ", command: "/GT1G" },
  {title: "Budha Haze 2г, 27USD ", command: "/GT2G" }
];

Bot.sendInlineKeyboard(buttons,"Вы выбрали город CHISINAU. Какой товар интересует?");
