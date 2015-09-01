
$(function () {
    'use strict';
    // Load demo images from flickr:
    $.ajax({
        //url: 'https://api.flickr.com/services/rest/',
        url: './index.php',
        type: "POST",
        dataType: 'json',
        jsonp: 'jsoncallback'
        // success: function(data)
        // {
        //     $('#links').html(JSON.stringify(data));
        //     console.log(json);
        // }
    }).done(
        function (result) {
            var linksContainer = $('#links');
            var baseUrl;
            var cname;
            var email;
            var telephone;
            var nickname;
            var birthday;

            $.each(result, function (index, contact) {
                baseUrl = contact.image;
                cname = contact.cname;
                email = contact.email;
                telephone = contact.telephone;
                nickname = contact.nickname;
                birthday = contact.birthday;

                $linksContainer.append(
                    '<tr class="pending-user">
                        <td><img src="' + $baseUrl + '" alt="..." width="75" height="120" class="img-thumbnail"></td>
                        <td>' + $cname + '</td>
                        <td>' + $nickname + '</td>
                        <td>' + $email + '</td>
                        <td>' + $telephone + '</td>
                        <td>' + $birthday + '</td>
                        <td><span class="user-actions"><a href="editar.html" class="btn btn-success">Editar</a> <a href="#" class="btn btn-danger" data-toggle="modal" data-target="#myModal">Excluir</a></span></td>
                    </tr>');
                
            });
    }).fail ( function() {alert("Error")
    });

});