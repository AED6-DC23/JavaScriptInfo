// Получение данных с помощью FETCH API
fetch ('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(error => console.log(error.message))

// Метод json возвращает Промис