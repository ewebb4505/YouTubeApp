


$('#login-submit-btn').on('click', function(event) {
    event.preventDefault();
    $.ajax({
        type: 'POST',
        url: '/login',
        data: {
            email: $("#inputEmail").val(),
            password: $("#inputPassword").val(),
        },
        success: function(data){
            console.log("login worked")
            window.location.replace("/?user=Evan");
        },
        error: function(data){
            debugger;
            console.log(data.responseJSON.message);
            $("#please-sign-in-tag").append(data.responseJSON.html);
        }
    })
})

$("#goto-login").on('click', function(){
    $.ajax({
        type: 'GET',
        url: '/login',
        success: function(){ window.location.replace("/login") },
        done: function(){
            console.log("Made it to the Login Page from button");
        }
    })
})