// var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
//   //var blinkyDancer = makeDancer(top, left, timeBetweenSteps);

//   // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
//   // so we must keep a copy of the old version of this function

//   var oldStep = blinkyDancer.step;

//   // blinkyDancer.step = function() {
//   //   // call the old version of step at the beginning of any call to this new version of step
//   //   oldStep();
//   //   // toggle() is a jQuery method to show/hide the <span> tag.
//   //   // See http://api.jquery.com/category/effects/ for this and
//   //   // other effects you can use on a jQuery-wrapped html tag.
//   //   blinkyDancer.$node.toggle();
//   // };

//   //return blinkyDancer;
// };

var MakeBlinkyDancer = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<img class ="blinkyDancer" src="/discoDancer.png">');
  this.step();
};

MakeBlinkyDancer.prototype = Object.create(MakeDancer.prototype);
MakeBlinkyDancer.prototype.constructor = MakeBlinkyDancer;

MakeBlinkyDancer.prototype.step = function() {
  MakeDancer.prototype.step.call(this);

  this.$node.toggle();

};

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