new Vue({
    el: '.vue-game',
    data: {
        playerHealth: 100,
        monsterHealth: 100,
        visibleStart: true,
        turns: []
    },
    methods: {
        showBtns: function (ev) {
            this.visibleStart = !this.visibleStart;
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.turns = [];
        },
        atack: function () {
            var monsterDmg = this.generateRandom();
            this.playerHealth -= monsterDmg;
            this.turns.unshift({
                //isPlayer: false,
                text: 'Monster hits Player for' + ' ' + monsterDmg
            });


            var playerDmg = this.generateRandom();
            this.monsterHealth -= playerDmg;
            this.turns.unshift({
                //isPlayer: true,
                text: 'Player hits Monster for' + ' ' + playerDmg
            });
            if (this.playerHealth < 1) {
                this.endGame('Game over. You losed')
            }
            else if (this.monsterHealth < 1) {
                this.endGame('Congratulations, you won!!!')
            }
        },
        specialAtack: function () {
            var monsterDmg = this.generateRandom()
            this.playerHealth -= monsterDmg;
            this.turns.unshift({
                //isPlayer: false,
                text: 'Monster hits Player for' + ' ' + monsterDmg
            });

            this.monsterHealth -= 10;
            this.turns.unshift({
                //isPlayer: true,
                text: 'Player hits Monster with special attack for 10'
            });

            if (this.playerHealth < 1) {
                this.endGame('Game over. You losed')
            }
            else if (this.monsterHealth < 1) {
                this.endGame('Congratulations, you won!!!')
            }
        },
        heal: function () {
            var monsterDmg = this.generateRandom()
            this.playerHealth -= monsterDmg;
            this.turns.unshift({
                //isPlayer: false,
                text: 'Monster hits Player for' + ' ' + monsterDmg
            })

            if (this.playerHealth <= 90) {
                this.playerHealth += 10;
                this.turns.unshift({
                    isPlayer: true,
                    text: 'Players gains 10 points of life'
                })
            }

            else {
                this.playerHealth = 100;
                this.turns.unshift({
                    isPlayer: true,
                    text: 'Player heals to 100'

                })
            }

        },
        giveUp: function () {
            this.endGame('What a shame! You gived up!')
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.turns = [];
        },
        generateRandom: function () {
            return Math.floor(Math.random() * 10) + 1;
        },
        endGame: function (text) {
            alert(text);
            this.visibleStart = !this.visibleStart;
        }
    }
});