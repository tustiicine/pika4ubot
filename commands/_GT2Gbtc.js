/*CMD
  command: /GT2Gbtc
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var buttons = [
    {title: "СТАТУС", command: "/status"}
];

Bot.sendInlineKeyboard(buttons, "\n Ваш заказ № 572:\n Город: CHISINAU.\n Товар: Budha Haze, 2г .\n Цена: 27 USD.\n Чтобы отследить заказ на сайте, оставить отзыв или написать запрос в службу поддержки, воспользуйтесь своим /pin и номером заказа 572.\n Выбран метод оплаты Bitcoin.\n Для получения товара, оплатите на кошелек 37LMAgB6kCkoFWSWFqxzKFT82BkmKfwunw сумму 0.00322455 Btc.\n После оплаты нажмит кнопку СТАТУС или введи команду /status");