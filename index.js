var express = require('express');
// создание сервера
var app = express();

// говорим серверу, что статические файлы для фронтэнда искать тут
app.use(express.static(__dirname + '/front-end-code'));

// говорим серверу, что по любому урлу в браузере он должен делать одно и тоже. если перейдешь по localhost:3001/lalala, будет то же самое
app.get('*', function(req, res) {
    // говорим серверу, что при переходе на любой урл локалхоста вывести в консоль node строку и вернуть браузеру на фронтэнд этот index.html файл
    console.log('i am called');
    res.sendFile(__dirname + "/front-end-code/index.html");
});

// слушаем локалхост на порте 3001
app.listen(3001);