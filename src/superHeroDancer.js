var MakeSuperHeroDancer = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<img class ="hulk" src="/Hulk-Smash-PNG.png">');
  this.step();
};

MakeSuperHeroDancer.prototype = Object.create(MakeDancer.prototype);
MakeSuperHeroDancer.prototype.constructor = MakeSuperHeroDancer;

MakeSuperHeroDancer.prototype.step = function() {
  //MakeDancer.prototype.step.call(this);

  this.$node.toggle();
  // setTimeout(function() {
  //   step.call(MakeDancer.prototype);
  //   //this.$node.toggle();
  // }, timeBetweenSteps);

};