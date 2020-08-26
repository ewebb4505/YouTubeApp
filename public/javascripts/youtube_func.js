$("#yt-search-btn").on('click', function(event){
    event.preventDefault();

   var searchParam = $("#yt-search-field").val();
   var urlParams = new URLSearchParams(window.location.search);
   var username = urlParams.get('username');

   var newURL = `/user?username=${username}&search=${searchParam}`
   $.ajax({
       type: 'GET',
       url: newURL,
       success: function(data){
           console.log("login worked")
           window.location.replace(newURL);
       },
       error: function(data){
           debugger;
           console.log(data.responseJSON.message);

       }
   })
});