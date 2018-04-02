
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
    renderJoke(foundJokes);
    }

    function handleSuccess(jokes) {
      jokes.forEach(function(singleJoke) {
        renderJoke(singleJoke); //side effect for forEach
      })
    }

    function handleError(err) {
      console.log('Throwing error: ', err);
    }

    // this function takes a single album and renders it to the page
    function renderJoke(jokes) {

      });

      console.log('rendering jokes:', jokes);
      $('#jokes').append(`
                <!-- one joke -->
                <div class="row joke" data-album-id="album._id">

                  <div class="col-md-10 col-md-offset-1">
                    <div class="panel panel-default">
                      <div class="panel-body">

                      <!-- begin joke internal row -->
                        <div class='row'>
                          <div class="col-md-3 col-xs-12 thumbnail">
                            <img src="../images/800x800.png" alt="joke image">
                          </div>

                          <div class="col-md-9 col-xs-12">
                            <ul class="list-group">
                              <li class="list-group-item">
                                <h4 class='inline-header'>Prank Name:</h4>
                                <span class='album-name'>${ joke.name }</span>
                              </li>

                              <li class="list-group-item">
                                <h4 class='inline-header'>Description:</h4>
                                <span class='artist-name'>${ joke.description }</span>
                              </li>

                              <li class="list-group-item">
                                <h4 class='inline-header'>Company:</h4>
                                <span class='album-releaseDate'>${ joke.company }</span>
                              </li>
                              <li class="list-group-item">
                                <h4 class='inline-header'>Link:</h4>
                                <span class='album-releaseDate'>${ joke.link }</span>
                              </li>
                            </ul>
                          </div>

                        </div>
                        <!-- end of album internal row -->

                      </div>

                    </div>

                  </div>

                </div>
                <!-- end one album -->`);

    }



}; // end document.ready
