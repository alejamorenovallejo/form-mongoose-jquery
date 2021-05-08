//JQUERY
$(document).ready(function(){
    $('#register').on('submit', (e) => {
        e.preventDefault();
        const URI = '/login';
        const formData = {
            userGithub: $('#user-github').val(),
            email : $('#passcode').val()
        }
        
        $.ajax({
            url: URI,
            method: 'POST',
            data: JSON.stringify(formData),
            contentType : "application/json",
			dataType : 'json',
            success: function(users) {
                let tbody = $('tbody');
                tbody.html('');
                users.forEach(user => {
                    $( "div" ).removeClass( "hidden" )
                    tbody.append(`
                    <tr>
                      <td class="text-center">${user.userGithub}</td>
                      <td class="text-center">${user.email}</td>
                    </tr>`)
                })
                $('#user-github').val("")
                $('#passcode').val("")
            },
            error: function (err) {
                console.log(err);
            }
        });
    });
});

