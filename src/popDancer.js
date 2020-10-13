var MakePopDancer = function(top, left, timeBetweenSteps) {
  this.timeBetweenSteps = timeBetweenSteps;
  MakeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<img class ="popDancer" src="mJ.png">');
  this.slide();
};

MakePopDancer.prototype = Object.create(MakeDancer.prototype);
MakePopDancer.prototype.constructor = MakePopDancer;

/*
MakePopDancer.prototype.step = function() {
  MakeDancer.prototype.step.call(this);
  this.$node.toggle();

};
*/
MakePopDancer.prototype.slide = function() {
  node = $('.popDancer'),
  width = this.$node.get(0).width,
  screenWidth = $(window).width(),
  duration = 5000;

  // function animatePopDancer() {
  //   node.css("left", -width).animate.call({
  //     "right": screenWidth
  //   }, duration, animatePopDancer);
  // }

  animatePopDancer();
};

// $(function() {
//     var img = $("#plane"),
//         width = img.get(0).width,
//         screenWidth = $(window).width(),
//         duration = 5000;

//     function animatePlane() {
//         img.css("left", -width).animate({
//             "left": screenWidth
//         }, duration, animatePlane);
//     }

//     animatePlane();
// });

// body { overflow: hidden }
// #plane { position: absolute; left: -1000px; width: 50% // <- not relevant for the animation }



// <!-- source: https://pixabay.com/de/flugzeuge-propeller-aircraft-alt-3674305/ -->
