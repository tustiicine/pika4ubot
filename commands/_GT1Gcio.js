/*CMD
  command: /GT1Gcio
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

Bot.sendMessage( "За последние сутки Вы уже отменили 0 заказов. При отмене больше 20 заказов за 24 часа Вы будете автоматичеси забанены навсегда." );
Bot.sendMessage( "Заказ создан! Адрес забронирован!");

var buttons = [
    {title: "Litecoin", command: "/GT1Gltc"},
    {title: "Bitcoin", command: "/GT1Gbtc" },
    {title: "Отменить заказ", command: "/cancel" }
];

Bot.sendInlineKeyboard(buttons, "Ваш заказ № 572: \n Город: CHISINAU. \n товар: Bubble Haze, 1grг. \n Цена: 14 USD \n Выберите удобный метод платы:");
