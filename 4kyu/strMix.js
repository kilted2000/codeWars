
// Create a class called Warrior which calculates and keeps track of their level and skills, and ranks them as the warrior they've proven to be.

// Business Rules:

// A warrior starts at level 1 and can progress all the way to 100.
// A warrior starts at rank "Pushover" and can progress all the way to "Greatest".
// The only acceptable range of rank values is "Pushover", "Novice", "Fighter", "Warrior", "Veteran", "Sage", "Elite", "Conqueror", "Champion", "Master", "Greatest".
// Warriors will compete in battles. Battles will always accept an enemy level to match against your own.
// With each battle successfully finished, your warrior's experience is updated based on the enemy's level.
// The experience earned from the battle is relative to what the warrior's current level is compared to the level of the enemy.
// A warrior's experience starts from 100. Each time the warrior's experience increases by another 100, the warrior's level rises to the next level.
// A warrior's experience is cumulative, and does not reset with each rise of level. The only exception is when the warrior reaches level 100, with which the experience stops at 10000
// At every 10 levels, your warrior will reach a new rank tier. (ex. levels 1-9 falls within "Pushover" tier, levels 80-89 fall within "Champion" tier, etc.)
// A warrior cannot progress beyond level 100 and rank "Greatest".
// Battle Progress Rules & Calculations:

// If an enemy level does not fall in the range of 1 to 100, the battle cannot happen and should return "Invalid level".
// Completing a battle against an enemy with the same level as your warrior will be worth 10 experience points.
// Completing a battle against an enemy who is one level lower than your warrior will be worth 5 experience points.
// Completing a battle against an enemy who is two levels lower or more than your warrior will give 0 experience points.
// Completing a battle against an enemy who is one level higher or more than your warrior will accelarate your experience gaining. The greater the difference between levels, the more experinece your warrior will gain. The formula is 20 * diff * diff where diff equals the difference in levels between the enemy and your warrior.
// However, if your warrior is at least one rank lower than your enemy, and at least 5 levels lower, your warrior cannot fight against an enemy that strong and must instead return "You've been defeated".
// Every successful battle will also return one of three responses: "Easy fight", "A good fight", "An intense fight". Return "Easy fight" if your warrior is 2 or more levels higher than your enemy's level. Return "A good fight" if your warrior is either 1 level higher or equal to your enemy's level. Return "An intense fight" if your warrior's level is lower than the enemy's level.
// Logic Examples:

// If a warrior level 1 fights an enemy level 1, they will receive 10 experience points.
// If a warrior level 1 fights an enemy level 3, they will receive 80 experience points.
// If a warrior level 5 fights an enemy level 4, they will receive 5 experience points.
// If a warrior level 3 fights an enemy level 9, they will receive 720 experience points, resulting in the warrior rising up by at least 7 levels.
// If a warrior level 8 fights an enemy level 13, they will receive 0 experience points and return "You've been defeated". (Remember, difference in rank & enemy level being 5 levels higher or more must be established for this.)
// If a warrior level 6 fights an enemy level 2, they will receive 0 experience points.
// Training Rules & Calculations:

// In addition to earning experience point from battles, warriors can also gain experience points from training.
// Training will accept an array of three elements (except in java where you'll get 3 separated arguments): the description, the experience points your warrior earns, and the minimum level requirement.
// If the warrior's level meets the minimum level requirement, the warrior will receive the experience points from it and store the description of the training. It should end up returning that description as well.
// If the warrior's level does not meet the minimum level requirement, the warrior doesn not receive the experience points and description and instead returns "Not strong enough", without any archiving of the result.
// Code Examples:

// var bruce_lee = new Warrior();
// bruce_lee.level();        // => 1
// bruce_lee.experience();   // => 100
// bruce_lee.rank();         // => "Pushover"
// bruce_lee.achievements(); // => []
// bruce_lee.training(["Defeated Chuck Norris", 9000, 1]); // => "Defeated Chuck Norris"
// bruce_lee.experience();   // => 9100
// bruce_lee.level();        // => 91
// bruce_lee.rank();         // => "Master"
// bruce_lee.battle(90);     // => "A good fight"
// bruce_lee.experience();   // => 9105
// bruce_lee.achievements(); // => ["Defeated Chuck Norris"]

// my solution

class Warrior {
    constructor() {
        this.level = 1;
        this.experience = 100;
        this.rank = 'Pushover';
        this.achievements = [];
    }

    level() {
        return this.level;
    }

    experience() {
        return this.experience;
    }

    rank() {
        return this.rank;
    }

    achievements() {
        return this.achievements;
    }

    training(arr) {
        if (this.level >= arr[2]) {
            this.experience += arr[1];
            this.achievements.push(arr[0]);
            return arr[0];
        } else {
            return 'Not strong enough';
        }
    }

    battle(enemyLevel) {
        if (enemyLevel < 1 || enemyLevel > 100) {
            return 'Invalid level';
        }

        let diff = enemyLevel - this.level;

        if (diff === 0) {
            this.experience += 10;
            return 'A good fight';
        } else if (diff === -1) {
            this.experience += 5;
            return 'A good fight';
        } else if (diff <= -2) {
            return 'Easy fight';
        } else if (diff >= 5 && this.rank === 'Pushover') {
            return 'You\'ve been defeated';
        } else if (diff >= 5 && this.rank === 'Novice') {
            return 'You\'ve been defeated';
        } else if (diff >= 5 && this.rank === 'Fighter') {
            return 'You\'ve been defeated';
        } else if (diff >= 5 && this.rank === 'Warrior') {
            return 'You\'ve been defeated';
        } else if (diff >= 5 && this.rank === 'Veteran') {
            return 'You\'ve been defeated';
        } else if (diff >= 5 && this.rank === 'Sage') {
            return 'You\'ve been defeated';
        } else if (diff >= 5 && this.rank === 'Elite') {
            return 'You\'ve been defeated';
        } else if (diff >= 5 && this.rank === 'Conqueror') {
            return 'You\'ve been defeated';
        } else if (diff >= 5 && this.rank === 'Champion') {
            return 'You\'ve been defeated';
        } else if (diff >= 5 &&

            this.rank === 'Master') {
            return 'You\'ve been defeated';
        }

        if (diff === 1) {
            this.experience += 5;
            return 'A good fight';
        } else if (diff >= 2) {
            this.experience += 20 * diff * diff;
            return 'An intense fight';
        }

        if (this.experience >= 10000) {
            this.experience = 10000;
        }


    }}





