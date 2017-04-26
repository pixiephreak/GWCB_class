// Over the course of this activity you are going to be using constructors to create simplistic characters for use within a very basic Roleplaying Game (RPG)
//
// Each character created using your constructor should have the following properties...
//
// Name: The character's name --> String
//
// Profession: What the character does for a living --> String
//
// Gender: The character's gender --> String
//
// Age: The character's age --> Integer
//
// Strength: Abstraction for how strong the character is --> Integer
//
// HitPoints (HP): Abstraction for how much health the character has --> Integer
//
// PrintStats: Function which prints all of a character's properties to the screen
//
// Once you have created your constructor, create two new characters and print their properties to the screen
//
// Fool around and get comfortable with your constructor before moving onto the next parts of the activity
// Now that you feel comfortable with your constructor, it is time to start making this character creation system a little more reactive by adding in some more methods...
//
// IsAlive: Function which prints whether or not this character is alive by looking into their hitpoints and determining whether they are above or below zero.
//
// Attack: Function which takes in a second character's hitpoints and subtracts this character's strength from it.
//
// LevelUp: Function which increases this character's Age by 1, their Strength by 5, and their HitPoints by 25.
//
// BONUS: After completing the previous sections and making sure they work, you now have everything you need to create a very basic RPG where two characters fight one another. Don't worry if you cannot finish this part of the activity as, by completing the above sections you are well on your way to mastering constructors!

var Character = function(name, profession, gender, age, strength, hitPoints, printStats){
  this.name = name;
  this.profession = profession;
  this.gender = gender;
  this.age = age;
  this.strength = strength;
  // this.hitPoints = hitPoints;
  this.printStats = printStats;
};



Character.prototype.isAlive = function(){
  if(this.strength <= 0){
    console.log('she ded.')
    return true;
  }
  console.log('going strong!')
  return false;
};

Character.prototype.LevelUp = function(){
  this.age++;
  this.strength += 5;
  this.hitPoints += 25;
}

Character.prototype.fight = function(defender, opponent, thisAttack){
  defender.attack(thisAttack);
  defender.isAlive();
}

//create enemies subclass
var Enemy = function(hitPoints, attack) {
    'use strict';
    Character.call(this, 100, function(attack, other){
      other.strength = other.strength - attack;
    });
};

//link Enemy class to character prototype chain
Enemy.prototype= Object.create(Character.prototype);
Enemy.prototype.constructor = Enemy;


var riri = new Character('riri', 'godess', 'womyn', 29, 100, 100);
var beybey = new Enemy('beybey', 'world dominatrix', 'womyn', 35, 100, 100, 100);

riri.fight(riri, beybey, beybey.hitPoints);
