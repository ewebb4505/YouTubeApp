


$('#login-submit-btn').on('click', function(event) {
    event.preventDefault();
    const hostname = $("#inputHostName").val();
    const playlistName = $("#inputPlayListName").val();

    $.ajax({
        type: 'POST',
        url: '/login',
        data: {
            hostname: hostname,
            playlistName: playlistName,
            playlistPassword: $("#inputPassword").val(),
        },
        success: function(data){
            console.log("login worked")
            window.location.replace(`/host?hostname=${hostname}&playlistname=${playlistName}`);
        },
        error: function(data){
            debugger;
            console.log(data.responseJSON.message);
            $("#please-sign-in-tag").append(data.responseJSON.html);
        }
    })
})

$('#user-login-submit-btn').on('click', function(event) {
    event.preventDefault();
    debugger;
    const guestname = $("#inputGuestName").val();
    const playlist = $("#inputPlaylist").val();
    const playlistPassword = $("#inputPlaylistPassword").val();

    $.ajax({
        type: 'POST',
        url: '/login/guest',
        data: {
            guestname: guestname,
            playlistname: playlist,
            playlistpassword: playlistPassword,
        },
        success: function(data){
            window.location.replace(`/user?username=${guestname}&playlistname=${playlist}`);
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
