const fetch = require('node-fetch');

// Pokemon data fetch example
// fetch('https://pokeapi.co/api/v2/pokemon/glalie/')
//   .then(function(response) {
//      return response.json()
//    })
//   .then(function(data){
//     console.log(data.moves)
//   });

let user2Posts = [];

fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
  },
})
  .then(response => response.json())
  .catch((error) => {
    console.error('Error:', error);
  })
  .then(data => {
    for (let i = 0; i < data.length; i++) {
      if (data[i].userId === 2) {
        user2Posts.push(data[i])
      }
    }
    console.log(user2Posts);
  })
  .catch((error) => {
    console.error('Error:', error);
  })

// fetch('https://jsonplaceholder.typicode.com/posts?userId=2')
//   .then(response => response.json())
//   .then (data => {
//     data.forEach ( function(post) {
//       const newUrl = `https://jsonplaceholder.typicode.com/posts${post.id}`;
//       fetch(newUrl, {
//         method: 'PATCH',
//         body: JSON.stringify({
//           title:'Archived'
//         }),
//         headers: {'Content-Type': 'application/json'}
//       })
//     })
//   })
//   .then(response => response.json())
//   .then(data => {console.log(data)})
//   .catch((error) => {console.error('Error:', error)})

const url = "https://jsonplaceholder.typicode.com/posts?userId=2"
fetch(url)
.then(res => res.json())
.then(json => {
    json.forEach( function(post){
    const newURL = `https://jsonplaceholder.typicode.com/posts/${post.id}`;
    fetch(newURL, {
                    method: 'PATCH',
                    body: JSON.stringify({
                            title: 'Archived',
                      }),
                    headers: { 'Content-Type': 'application/json' },
                    })
    .then(res => res.json())
    .then(json => console.log(json));
  })
})