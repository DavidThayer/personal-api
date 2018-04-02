
// all jQuery in doc ready f'n
$(document).ready(function() {
  console.log('app.js loaded!');

  $( "#form" ).submit(function(event) {
      event.preventDefault();
      var formData = $(this).serialize();
      console.log(formData);
      $(this).trigger("reset");

      $.ajax({
        method: 'POST',
        url: '/api/jokes',
        data: formData,
        success: handlePostSuccess,
        error: handleError
      })
    })


    $.ajax({
      method: 'GET',
      url : '/api/jokes',
      success: handleSuccess,
      error: handleError
    });

    function handlePostSuccess(foundJokes) {
    renderAlbum(foundJokes);
    }

    function handleSuccess(jokes) {
      jokes.forEach(function(singleJoke) {
        renderAlbum(singleJoke); //side effect for forEach
      })
    }

    function handleError(err) {
      console.log('Throwing error: ', err);
    }



}; // end document.ready
