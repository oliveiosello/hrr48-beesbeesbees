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

var ForagerBee = function() {
  Bee.call(this);
  this.age = 10;
  this.job = 'find pollen';
  this.canFly = true;
  this.treasureChest = [];
};

ForagerBee.prototype = Object.create(Bee.prototype);
ForagerBee.prototype.constructor = ForagerBee;

ForagerBee.prototype.forage = function(treasure) {
  this.treasureChest.push(treasure);
};

// call the ForagerBee superclass x
// set the prototype x
// set the constructor x
// an age property that is set to 40 x
// a job property that is set to gamble x
// a canFly property that is set to false x
// a color property that is set to grey x
// a forage method that returns "I am too old, let me play cards instead" x
// a food property that is inherited from grub x
// an eat method that is inherited from grub x
// a treasureChest property inherited from ForagerBee that is set to an empty array [] x
// an always winning gamble method that allows the bee to add a treasure to the treasureChest x

var RetiredForagerBee = function() {
  ForagerBee.call(this);
  this.age = 40;
  this.job = 'gamble';
  this.canFly = false;
  this.color = 'grey';

};

RetiredForagerBee.prototype = Object.create(ForagerBee.prototype);
RetiredForagerBee.prototype.constructor = RetiredForagerBee

RetiredForagerBee.prototype.forage = function() {
  return 'I am too old, let me play cards instead'
};

RetiredForagerBee.prototype.gamble = function(treasure) {
  this.treasureChest.push(treasure);
};

