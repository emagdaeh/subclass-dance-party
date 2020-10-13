var MakePopDancer = function(top, left, timeBetweenSteps) {
  this.timeBetweenSteps = timeBetweenSteps;
  MakeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<img class ="popDancer" src="mJ.png">');
  this.step();
};

MakePopDancer.prototype = Object.create(MakeDancer.prototype);
MakePopDancer.prototype.constructor = MakePopDancer;

MakePopDancer.prototype.step = function() {
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