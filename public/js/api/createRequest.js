/**
 * Основная функция для совершения запросов
 * на сервер.
 * */
function createRequest(options = {}) {

    const xhr = new XMLHttpRequest;
    const formData = new FormData();
    xhr.responseType = 'json';
      
    if (options.method !== 'GET') {
        // for (let key in options.body) {
        //     formData.append(key, options.body[key]);
        // }
       
        if (options.url !== '/user/logout') {
            formData.append( 'email' , options.data.email );
            formData.append( 'password' , options.data.password );
        }       

    } else if (options.method === 'GET' && options.body) {
        options.url += ('?' + Object.entries(options.body).map(([key, value]) => `${key}=${value}`).join('&'));
    }

    try {
        xhr.open(options.method, options.url);
        if (options.method === 'GET') {
            xhr.send();
        } else {
            xhr.send(formData);
        }
    } catch (error) {
        options.callback(error);
    }

    xhr.addEventListener('load', () => {
        let response;
        let error;
        if (xhr.status !== 200) {
            error = xhr.statusText;
        } else {
            response = xhr.response;
        }
        options.callback(error, response);
    });

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

// try {

//     if (options.method === 'GET') {

//         xhr.open( 'GET', options.url + '?' + 'mail=' + options.data.mail + '&password=' + options.data.password );
//         xhr.send();

//     } else if (options.method === 'POST') {

//         formData.append( 'mail', options.data.mail );
//         formData.append( 'password', options.data.password );

//         xhr.open( 'POST', options.url );
//         xhr.send(formData);

//     }

//     xhr.addEventListener('load', (e) => {
//         if (xhr.readyState === 4 && xhr.status === 200) {
//             options.callback(null, xhr.response);
//         } else {
//             options.callback(xhr.statusText);
//         }
//     });


// } catch(err) { 
//     options.callback(err);
// }