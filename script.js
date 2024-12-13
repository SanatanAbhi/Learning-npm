// function makeHttpRequest(method, url, callback) {
//     const xhr = new XMLHttpRequest()
//     xhr.responseType = 'json';

//     const promise = new Promise((resolve, reject) => {
//         xhr.addEventListener('load', () => {
//             resolve(xhr.response)
//           })
//     })

    
  
//     xhr.open(method, url)
//     xhr.send()

//     return promise;
//   }

//   makeHttpRequest('GET', 'https://dummyjson.com/users').then((userData) => {
//     console.log(userData);
//   })
  
// //   makeHttpRequest('GET', 'https://dummyjson.com/users', (usersData) => {
// //     makeHttpRequest('GET', `https://dummyjson.com/posts/user/${usersData.users[0].id}`, (postsData) => {
// //       makeHttpRequest('GET', `https://dummyjson.com/comments/post/${postsData.posts[0].id}`, (commentsData) => {
// //         makeHttpRequest('GET', `https://dummyjson.com/users/${commentsData.comments[0].user.id}`, (userData) => {
// //           console.log(userData);
// //         });
// //       });
// //     });
// //   })

// makeHttpRequest('GET', 'https://dummyjson.com/users')
//   .then((usersData) => makeHttpRequest('GET', `https://dummyjson.com/posts/user/${usersData.users[0].id}`))
//   .then((postsData) => makeHttpRequest('GET', `https://dummyjson.com/comments/post/${postsData.posts[0].id}`))
//   .then((commentsData) => makeHttpRequest('GET', `https://dummyjson.com/users/${commentsData.comments[0].user.id}`))
//   .then((userData) => console.log(userData))
//   .catch((err) => console.log(err))


//*fetch

// fetch('https://dummyjson.com/products').then((res) => {
//   console.log(res);
//   return res.json();
// }).then((data) => {
//   console.log(data);
// })

// fetch('https://dummy.json.com/products.add', {
//   method: 'POST',
//   header: {'Content-Type': 'application/json'},
//   body: JSON.stringify({
//     title: 'PENCIL',
    
//   })
// })

// .then(res => res.json())
// .then(console.log)

// try {
//   console.log(a);
// } catch(err) {
//   console.dir(err.message);
// }



// function createUser(firstName, lastName, age) {
//   const user = {
//     firstName,
//     lastName,
//     age,
//     getBirthYear: createUser.commonMethods.getBirthYear
//   }

//   return user;
// }

// createUser.commonMethods = {
//   getBirthYear() {
//     console.log(this);
//   }
// };

function CreateUser(firstName, lastName, age) {
  this.firstName = firstName,
  this.lastName = lastName,
  this.age = age
}

CreateUser.prototype.getBithYear = function() {
  return new Date().getFullYear() - this.age;
}

CreateUser.prototype.getFullName = function() {
  return this.firstName + ' ' + this.lastName;
}




