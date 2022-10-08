const http = new EasyHttp();

// Get Users
http.get('https://jsonplaceholder.typicode.com/posts', function (err, users) {
   if (err) {
      console.log(err);
   } else {
      console.log(users);
   }
});

/* const postData = {
   title: 'Custom Post',
   body: 'This is a custom post'
}

// Create Post
http.post('https://jsonplaceholder.typicode.com/posts', postData, function (err, user) {
   if (err) {
      console.log(err);
   } else {
      console.log(user);
   }
}); */

/* const postData = {
   title: 'Custom Post',
   body: 'This is a custom post'
}

// Update Post
http.put('https://jsonplaceholder.typicode.com/posts/1', postData, function (err, message) {
   if (err) {
      console.log(err);    
   } else {
      console.log(message);
   }
}); */


//Delte Post
/* http.delete('https://jsonplaceholder.typicode.com/posts/1', function (err, message) {
   if (err) {
      console.log(err);
   } else {
      console.log(message);
   }
}); */




//syncronous version
/* as call is synchoronous the onload method (which is async) will be return after the execution of the below lines */
/* const returnResponse = http.get('https://jsonplaceholder.typicode.com/posts');
console.log(returnResponse); */