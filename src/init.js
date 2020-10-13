$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $('danceFloor').height() * Math.random(),
      $('danceFloor').width() * Math.random(),
      Math.random() * 1000
    );
    $('.danceFloor').append(dancer.$node);
  });
});

/*
function show_image(src, width, height, alt) {
  var img = document.createElement("img");
  img.src = src;
  img.width = width;
  img.height = height;
  img.alt = alt;

  // set the position
  img.style.position = 'absolute';
  img.style.top = document.body.clientHeight * Math.random() + 'px';
  img.style.left = document.body.clientWidth * Math.random() + 'px';

  document.body.appendChild(img);
}
document.getElementById('foo').addEventListener('click', () =>
  show_image("http://placekitten.com/200/300", 200, 300, 'foo')
);
*/

