/**
 * Основная функция для совершения запросов
 * на сервер.
 * */
const createRequest = (options = {}) => {

    let xhr = new XMLHttpRequest;
    url: 'http://localhost:8000';
    data: { // произвольные данные, могут отсутствовать
        email: 'ivan@poselok.ru';
        password: 'odinodin';
    };
    method: 'GET'; // метод запроса

    createRequest({
        url: 'http://localhost:8000',
        data: {
          mail: 'ivan@biz.pro',
          password: 'odinodin'
        },
        method: 'GET',
      });
    
      createRequest({
        url: 'http://localhost:8000',
        data: {
          mail: 'ivan@biz.pro',
          password: 'odinodin'
        },
        method: 'POST',
      });

      xhr.responseType = 'json';
      
    try {

        xhr.addEventListener('load', () => {
            callback(null, xhr.response); 
        });

        xhr.addEventListener('error', (e) => {          
            callback(e); 
        });  

    } catch(err) { 
        callback(err);
    }

    callback: ( err, response ) => {
        console.log( err ); // null
        console.log( response ); // ответ
    }

};

        // if (xhr.readyState === 4 && xhr.status === 200) {
        //     response = xhr.response;
        //     console.log( 'Данные, если нет ошибки', response );
        // } else {
        //     console.log( 'Ошибка, если есть', err );
        // }

// xhr.open("GET", "https://netology-slow-rest.herokuapp.com/poll.php");
// xhr.send();
// let response = await fetch(url);

// if (response.ok) { // если HTTP-статус в диапазоне 200-299
//   // получаем тело ответа (см. про этот метод ниже)
//   let json = await response.json();
// } else {
//   alert("Ошибка HTTP: " + response.status);
// }


// url: 'http://localhost:8000';
// method: 'GET';
// data: { // произвольные данные, могут отсутствовать
//     email: 'ivan@poselok.ru';
//     password: 'odinodin';
//   };

// try {

//     if (xhr.readyState === 4 && xhr.status === 200) {

//     }

// } catch(err) { 
//     alert("Запрос не удался, какой-то бред, ничего не понимаю, что от меня нужно ????!");
// }
// // url: 'https://example.com';
// // method: 'GET';
// // xhr.open("GET", url);
// // xhr.send();