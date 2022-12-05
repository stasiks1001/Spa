
// then catch
// function main() {
//     fetch('https://reqres.in/api/users', {
//         method: 'POST',
//         headers: {
//             'content-type': 'application/json'
//         },
//         body: JSON.stringify({ user: 'aghy', post: 'i have had a wonderful pizza today!', image: 'https://dghwglwgkgjwldkgjdwlkgjwlkj' })
//     }).then(response => response.json())
//         .then(data => console.log(data))
//         .catch(err => console.log(err));
// }
// main();

// async await
async function main() {
    try {
        const response = await fetch('https://reqres.in/api/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ user: 'aghy', post: 'i have had a wonderful pizza today!', image: 'https://dghwglwgkgjwldkgjdwlkgjwlkj' })
        })

        const data = await response.json();
        document.getElementById('maindiv').innerHTML +=
            `<div class="card">
            <h2>${data.user}</h2>
            <span>${data.post}</span>
        </div>`

    } catch (error) {
        document.getElementById('maindiv').innerHTML += `<div class="err-msg">error: ${error.message}</div>`
    }
}

main();


//// the difference between GET and POST
// , {
//     method: 'DELETE, PUT, PATCH, GET, POST',
//         headers: {
//         'content-type': 'application/json'
//     },
//     body: JSON.stringify({ user: 'aghy', post: 'i have had a wonderful pizza today!', image: 'https://dghwglwgkgjwldkgjdwlkgjwlkj' })
// }