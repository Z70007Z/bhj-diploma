/**
 * Основная функция для совершения запросов
 * на сервер.
 * */
function createRequest(options = {}) {

    const xhr = new XMLHttpRequest;
    formData = new FormData;
    xhr.responseType = 'json';
      
    try {

        if (options.method === 'GET') {

            xhr.open( 'GET', options.url + '?' + 'mail=' + options.data.mail + '&password=' + options.data.password );
            xhr.send();

        } else if (options.method === 'POST') {

            formData.append( 'mail', options.data.mail );
            formData.append( 'password', options.data.password );

            xhr.open( 'POST', options.url );
            xhr.send(formData);

        }

        xhr.addEventListener('load', (e) => {
            if (xhr.readyState === 4 && xhr.status === 200) {
                options.callback('null', xhr.response);
            } else {
                options.callback(xhr.statusText);
            }
        });


    } catch(err) { 
        options.callback(err);
    }

};

// createRequest({
//     url: 'http://localhost:8000',
//     data: {
//       mail: 'ivan@biz.pro',
//       password: 'odinodin'
//     },
//     method: 'GET',
//   });

//   createRequest({
//     url: 'http://localhost:8000',
//     data: {
//       mail: 'ivan@biz.pro',
//       password: 'odinodin'
//     },
//     method: 'POST',
//   });