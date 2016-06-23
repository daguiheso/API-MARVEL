$(function () {
  var template = '<div class="card">' +
    '<img src=":img:" alt=":img alt:" class="card-img">' +
    '<p class="card-name">:name:</p>' +
    '</div>'

  $.ajax({
    url: 'https://gateway.marvel.com/v1/public/characters',
    data: {
      ts: 1,
      apikey: 'f1527e7aae95ea7dc033527c850532d1',
      hash: 'c16e39a420473b8df344d530de9898e9'
    }
  })
    .done(function (response, textStatus) {
      // debugger
      response.data.results.forEach(function (personaje) {
        var card = template
          .replace(':name:', personaje.name)
          .replace(':img:', personaje.thumbnail.path + '.' + personaje.thumbnail.extension)

        $('#app-body')
          .find('.cards')
          .append($(card))
      })
    })
    .fail(function () {
      console.log('error')
    })
})
