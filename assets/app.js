new Vue({
    el: '.vue-game',
    data: {
        playerHealth: 100,
        monsterHealth: 100,
        visibleStart: true,
        damageLog: [1,5],
        damageLog2: [2,6]
},
    methods: {
        showBtns: function(ev){
            this.visibleStart = !this.visibleStart;
	        this.playerHealth = 100;
	        this.monsterHealth = 100;
        },
        atack: function() {
            var randNum = Math.floor(Math.random() * 10) + 1;
            this.monsterHealth -= randNum;
            var randNum2 = Math.floor(Math.random() * 10) + 1;
            this.playerHealth -= randNum2;
	        if (this.playerHealth < 1) {
		        alert("Game over. You losed")
		        this.visibleBtns = !this.visibleBtns;
		        this.visibleStart = !this.visibleStart;

	        }
	        else if (this.monsterHealth < 1) {
		        alert("Congratulations, you won!!!")
		        this.visibleBtns = !this.visibleBtns;
		        this.visibleStart = !this.visibleStart;

	        }
        },
        specialAtack: function () {
            this.monsterHealth -= 10;
            var randNum2 = Math.floor(Math.random() * 10) + 1;
            this.playerHealth -= randNum2;

            if (this.playerHealth < 1) {
                alert("Game over. You losed")
	            this.visibleBtns = !this.visibleBtns;
	            this.visibleStart = !this.visibleStart;

            }
            else if (this.monsterHealth < 1) {
                alert("Congratulations, you won!!!")
	            this.visibleBtns = !this.visibleBtns;
	            this.visibleStart = !this.visibleStart;

            }

        },
        heal: function() {
            var randNum2 = Math.floor(Math.random() * 10) + 1;
            this.playerHealth -= randNum2;
            if(this.playerHealth > 90){
	            this.playerHealth = 100;
            }
            if(this.playerHealth === 100 ) {
                alert( "Your health is full" )
            }
            else {
	            this.playerHealth += 10;
            }

        },
        giveUp: function() {
            this.visibleBtns = !this.visibleBtns;
            this.visibleStart = !this.visibleStart;
            this.playerHealth = 100;
            this.monsterHealth = 100;
            alert('What a shame! You gived up!')
        },
	    monsterHealth2: function () {
            return {
                width: this.monsterHealth + '%'
            }
        }



    }
});