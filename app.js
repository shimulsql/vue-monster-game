new Vue({
    el: '#app',
    data: {
        playerHealth: 100,
        monsterHealth: 100,
        gameIsRunning: false
    },
    methods: {
        startGame: function(){
            this.gameIsRunning = true
            this.playerHealth = 100
            this.monsterHealth = 100
        },
        attack: function(){
            //attack player to the monster and damage the health of the monster
            this.playerAttacks(3, 10)

            //attack monster to the player and damage the health of the player
            this.monsterAttacks(3, 12)
        },
        specialAttack: function(){
            //attack monster to the player and damage the health of the player
            this.playerAttacks(10, 15)
        },
        heal: function(){
            
        },
        giveUp: function(){

        },
        monsterAttacks: function(min, max){
            // damage player health
            this.playerHealth -= this.calculateDamage(min, max)
            // if player dead? end game else continue
            this.checkWin()
        },
        playerAttacks: function(min, max){
            // damage the monster health
            this.monsterHealth -= this.calculateDamage(min, max)
            // if monster dead? end game else continue
            this.checkWin()
        },
        calculateDamage: function(min, max){
            return Math.max(Math.floor((Math.random() * max) + 1), min)
        },
        checkWin: function(){
            if(this.monsterHealth <= 0) {
                if(confirm("You won ! ... start game?")){
                    this.startGame()
                }else{
                    this.gameIsRunning = false
                }
                return true
            } else if (this.playerHealth <= 0){
                if (confirm("You lost! ... start game?")) {
                    this.startGame()
                } else {
                    this.gameIsRunning = false
                }
                return true
            }
            return false
        }
    }
});