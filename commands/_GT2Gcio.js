/*CMD
  command: /GT2Gcio
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
    {title: "Litecoin", command: "/GT2Gltc"},
    {title: "Bitcoin", command: "/GT2Gbtc" },
    {title: "Отменить заказ", command: "/cancel" }
];

Bot.sendInlineKeyboard(buttons, "Ваш заказ № 572: \n Город: CHISINAU. \n товар: Bubble Haze, 2gr. \n Цена: 27 USD \n Выберите удобный метод платы:");
