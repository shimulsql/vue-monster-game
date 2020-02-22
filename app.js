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
            // damage the monster health
            this.monsterHealth -= this.calculateDamage(3, 10)
             // if monster dead? end game else continue
             this.checkWin()


            // damage player health
            this.playerHealth -= this.calculateDamage(3, 12)
            // if player dead? end game else continue
            this.checkWin()
        },
        specialAttack: function(){

        },
        heal: function(){

        },
        giveUp: function(){

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