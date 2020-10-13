var MakePopDancer = function(top, left, timeBetweenSteps) {
  this.timeBetweenSteps = timeBetweenSteps;
  MakeDancer.call(this, top, left, timeBetweenSteps);
  this.step();
};

MakePopDancer.prototype = Object.create(MakeDancer.prototype);
MakePopDancer.prototype.constructor = MakePopDancer;

MakePopDancer.prototype.step = function() {
  MakeDancer.prototype.step.call(this);

  this.$node.toggle();
  // setTimeout(function() {
  //   step.call(MakeDancer.prototype);
  //   //this.$node.toggle();
  // }, timeBetweenSteps);

};