$(function () {
  $.ajax({
    url: 'https://gateway.marvel.com/v1/public/characters',
    data: {
      ts: 1,
      apikey: 'f1527e7aae95ea7dc033527c850532d1',
      hash: 'c16e39a420473b8df344d530de9898e9'
    }
  })
    .done(function (esponse, textStatus) {})
    .fail(function () {
      console.log('error')
    })
})
