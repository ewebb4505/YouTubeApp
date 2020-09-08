
//this button listens for the search button on the user page for a youtube search
$("#yt-search-btn").on('click', function(event){
    event.preventDefault(); //prevents the page from reloading

   var searchParam = $("#yt-search-field").val(); //get the search bar value typed in
   var urlParams = new URLSearchParams(window.location.search); //gets the current url query string
   var username = urlParams.get('username'); //gets the username from user?username=...

   var newURL = `/user?username=${username}&search=${searchParam}` //creates the new URl for GET request
   $.ajax({
       type: 'GET',
       url: newURL,
       success: function(data){
           console.log("login worked")
           window.location.replace(newURL); //loads that new URL
       },
       error: function(data){
           debugger;
           console.log(data.responseJSON.message);

       }
   })
});
