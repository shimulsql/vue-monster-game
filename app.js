new Vue({
    el: '#app',
    data: {
        playerHealth:       100,
        monsterHealth:      100,
        gameIsRunning:      false,
        playerHealthColor:  '#15935e',
        monsterHealthColor: '#15935e',
        specialAttackTimes: 3,
        logs:               []
    },
    methods: {
        startGame: function(){
            this.gameIsRunning      = true
            this.playerHealth       = 100
            this.monsterHealth      = 100
            this.playerHealthColor  = '#15935e'
            this.monsterHealthColor = '#15935e'
            this.specialAttackTimes = 3
            this.logs = []
        },
        attack: function(){
            //attack player to the monster and damage the health of the monster
            this.playerAttacks(3, 10)
            if(this.checkWin()){
                return 
            }
            //attack monster to the player and damage the health of the player
            this.monsterAttacks(3, 12)
            this.checkWin()
        },
        specialAttack: function(){
            //attack monster to the player and damage the health of the player
            if(this.specialAttackTimes > 0){
                this.playerAttacks(10, 15)
                if (this.checkWin()) {
                    return
                }

                this.monsterAttacks(3, 10)
                this.checkWin()
                this.specialAttackTimes--
            }
            
        },
        heal: function(){
            // healths are increased by 10 with monster attacks
            if(this.playerHealth < 90){
                this.playerHealth += 10
            }else{
                this.playerHealth = 100
            }
            // set log
            this.logs.unshift({
                isPlayer: true,
                text: 'Player heals 10'
            })
            this.monsterAttacks(3, 12)
            this.checkWin()
        },
        giveUp: function(){
            this.gameIsRunning = false
        },
        monsterAttacks: function(min, max){
            var damage = this.calculateDamage(min, max)
            // damage player health
            this.playerHealth -= damage
            // set log
            this.logs.unshift({
                isPlayer: false,
                text: 'Monster hits player for ' + damage
            })
            // change the health color
            this._playerHealthColor()
            // if player dead? end game else continue
            // this.checkWin()
        },
        playerAttacks: function(min, max){
            var damage = this.calculateDamage(min, max)
            // damage the monster health
            this.monsterHealth -= damage
            // set log
            this.logs.unshift({
                isPlayer: true,
                text: 'Player hits monster for ' + damage
            })
            // change the health color
            this._monsterHealthColor()
            // if monster dead? end game else continue
            // this.checkWin()
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
        },
        _playerHealthColor: function(){
            if (this.playerHealth < 90 && this.playerHealth >= 50) {
                this.playerHealthColor = '#24a46e';
            } else if (this.playerHealth < 50 && this.playerHealth >= 25) {
                this.playerHealthColor = '#38bd85';
            } else if (this.playerHealth < 25) {
                this.playerHealthColor = '#d94343';
            }
        },
        _monsterHealthColor: function(){
            if (this.monsterHealth < 90 && this.monsterHealth >= 50) {
                this.monsterHealthColor = '#24a46e';
            } else if (this.monsterHealth < 50 && this.monsterHealth >= 25) {
                this.monsterHealthColor = '#38bd85';
            } else if (this.monsterHealth < 25) {
                this.monsterHealthColor = '#d94343';
            }
        }
    }
});