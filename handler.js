'use strict';

const request = require('request');

module.exports.webhook = (event, context, callback) => {
  const token = '945758915:AAETnzc-y0CXPz9A8sDuUpJ4--fz73TnUAw';
  const BASE_URL = 'https://api.telegram.org/bot945758915:AAETnzc-y0CXPz9A8sDuUpJ4--fz73TnUAw/sendMessage';

  const body = JSON.parse(event.body);
  //const message = body.result[0].message; to use with postman
  const message = body.message;
  const chatId = message.chat.id;
  
  request.post(BASE_URL).form({ text: 'you said: '+message.text, chat_id: chatId });

  const response = {
    statusCode: 200,
    body: JSON.stringify({
      input: event
    }),
  };

   return callback(null, response);

};

