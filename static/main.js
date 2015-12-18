function searchBookG(field) {
//    alert(field)
//    alert($("#" + field).val())

    $.getJSON('https://www.googleapis.com/books/v1/volumes?q=' + encodeURIComponent($("#" + field).val()) + '&key=AIzaSyBU8JwCs2YKEj5r6uTxFNo1PwZZV4S_R9c', function (data) {
        var items = [];
        $.each(data.items, function (key, val) {
                var line = '<tr>';
                line += '<td>' + val.volumeInfo.title + '</td>';
                line += '<td>' + val.volumeInfo.authors + '</td>';
                line += '<td>' + val.volumeInfo.publisher + '</td>';
                if (val.volumeInfo.imageLinks) {
                    line += '<td><img src=' + val.volumeInfo.imageLinks.smallThumbnail + ' alt="img"/></td>';
                }

                line += '<td><form action="/add" method="post">';
                line += '<input type="hidden" name="title" value="' + val.volumeInfo.title + '" >';

                if (val.volumeInfo.description) {
                    line += '<input type="hidden" name="description" value="' + val.volumeInfo.description.replace(/\\/g, "\\\\") + '" >';
                } else {
                    line += '<input type="hidden" name="description" value="" >';
                }

                if (val.volumeInfo.authors) {
                    line += '<input type="hidden" name="authors" value="' + val.volumeInfo.authors + '" >';
                } else {
                    line += '<input type="hidden" name="authors" value="" >';
                }

                if (val.volumeInfo.publisher) {
                    line += '<input type="hidden" name="publisher" value="' + val.volumeInfo.publisher + '" >';
                } else {
                    line += '<input type="hidden" name="publisher" value="" >';
                }

                if (val.volumeInfo.publisherDate) {
                    line += '<input type="hidden" name="publisherDate" value="' + val.volumeInfo.publisherDate + '" >';
                } else {
                    line += '<input type="hidden" name="publisherDate" value="" >';
                }

                if (val.volumeInfo.industryIdentifiers) {
                    line += '<input type="hidden" name="ISBN" value="' + val.volumeInfo.industryIdentifiers.ISBN_13 + '" >';
                } else {
                    line += '<input type="hidden" name="ISBN" value="" >';
                }

                if (val.volumeInfo.imageLinks) {
                    line += '<input type="hidden" name="thumbnail" value="' + val.volumeInfo.imageLinks.thumbnail + '" >';
                } else {
                    line += '<input type="hidden" name="thumbnail" value="" >';
                }

                if (val.volumeInfo.accessInfo) {
                    line += '<input type="hidden" name="webReaderLink" value="' + val.accessInfo.webReaderLink + '" >';
                } else {
                    line += '<input type="hidden" name="webReaderLink" value="" >';
                }
                line += '<input type="submit" value="Add" class="btn btn-primary">';
                line += '</form></td>';

                items.push(line);
            }
        )
        ;
        $('#tabResults').html(items.join(''));
        console.log(data)
    });
}


function selectAll() {
    $('table input[type=checkbox]').prop('checked', true);
}
function selectNone() {
    $('table input[type=checkbox]').prop('checked', false);
}

function filterAll() {
    $('.table-books tr').show();
}
function filterAvailable() {
    $('.table-books tr:not(.error)').show();
    $('.table-books tr.error').hide();
}
function filterBorrowed() {
    $('.table-books tr.error').show();
    $('.table-books tr:not(.error)').hide();
}
function filterTitle() {
    var text = $('#prependedInput').val();
    if (text != "") {
        $(".table-books tr").hide();
        $(".table-books tr:contains(\"" + text + "\")").show();
    } else {
        $(".table-books tr").show();
    }
}


function showConfigQR() {
    $("#QRConfig").collapse('toggle');
}

