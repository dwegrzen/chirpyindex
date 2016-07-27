$(document).ready(function(){

// $.getJSON('http://localhost:3000/chirps',function(data){
// console.log(data)
// })

$.getJSON('http://localhost:3000/chirps',function(data){
  displayData(data)
})



  function displayData(arr) {
    $.each(arr, function(i, user){

      username = user.username
      time = user.chirptime
      pic = user.userpic
      body = user.body

      source = $("#chirp").html();
      template = Handlebars.compile(source);
      context = {userimage: pic, name: username, createdAt: time, body: body};
      console.log(context)
      html = template(context);
      $('#index').append(html)
    })
  }





// source = $("#chirp").html();
// template = Handlebars.compile(source);

// context = {userimage: pic, name: user, createdAt: time, body: body};
// html = template(context);

})
