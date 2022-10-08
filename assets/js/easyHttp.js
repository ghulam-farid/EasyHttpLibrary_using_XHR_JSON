function EasyHttp() {
   this.http = new XMLHttpRequest();
}

// HTTP get request
EasyHttp.prototype.get = function (url, returnResponse) {
   this.http.open('GET', url, true);

   this.http.onload = function (){
      if(this.status === 200){
         returnResponse(null, this.responseText);
      } else {
         returnResponse('Error: ' + this.status);
      }
   }
   this.http.send();
}

// HTTP post request
EasyHttp.prototype.post = function (url, data, returnResponse){
   this.http.open('POST', url, true);
   this.http.setRequestHeader('Content-type', 'application/json');

   this.http.onload = function () {
      returnResponse(null, this.responseText);
   }
   this.http.send(JSON.stringify(data));
}

// HTTP put request
EasyHttp.prototype.put = function (url, data, returnResponse) {
   this.http.open('PUT', url, true);
   this.http.setRequestHeader('Content-type', 'application/json');

   this.http.onload = function () {
      if(this.status === 200){
         returnResponse(null, "Post updated successfully!");
      }else{
         returnResponse('Error: ' + this.status);
      }
   }
   this.http.send(JSON.stringify(data));   
}

EasyHttp.prototype.delete = function (url, returnResponse) {
   this.http.open('DELETE', url, true);

   this.http.onload = function () {
      if (this.status === 200) {
         returnResponse(null, 'Post Deleted');
      } else {
         returnResponse('Error: ' + this.status);
      }
   }

   this.http.send();
};


// ======  syncronous version of get method ======= //
/* EasyHttp.prototype.get = function (url) {
   this.http.open('GET', url, true);

   this.http.onload = function (){
      if(this.status === 200){
         return this.responseText;
      } else {
         return 'Error: ' + this.status;
      }
   }

   this.http.send();
} */

/* setTimeout() or DOM or XHR request, they're not in V8 engine, they're in browser API */