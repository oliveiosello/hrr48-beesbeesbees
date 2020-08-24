var Grub = function() {
  this.age = 0;
  this.color = 'pink';
  this.food = 'jelly';
};

Grub.prototype.eat = function() {

};

var Bee = function() {
  Grub.call(this);
  this.age = 5;
  this.color = 'yellow';
  this.job = 'keep on growing';
};

Bee.prototype = Object.create(Grub.prototype);
Bee.prototype.constructor = Bee;

// call the Bee superclass x
// set the prototype x
// set the constructor x
// an age property that is set to 10 x
// a job property that is set to make honey x
// a color property inherited from bee that is set to yellow x
// a food property that is inherited from grub x
// an eat method that is inherited from grub x
// a honeyPot property that is set to 0
// a makeHoney method that adds 1 to that honeyBee\'s honeyPot
// a giveHoney method that subtracts 1 from that honeyBee\'s honeyPot

var HoneyMakerBee = function() {
  Bee.call(this);
  this.age = 10;
  this.job = 'make honey';
  this.honeyPot = 0;

};

HoneyMakerBee.prototype = Object.create(Bee.prototype);
HoneyMakerBee.prototype.constructor = HoneyMakerBee;

HoneyMakerBee.prototype.makeHoney = function() {
  this.honeyPot++;
};
HoneyMakerBee.prototype.giveHoney = function() {
  this.honeyPot--;
};
