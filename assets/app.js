new Vue({
    el: '.vue-game',
    data: {
        yourHealth: 100,
        monsterHealth: 100,
        visibleBtns: false,
        visibleStart: true,
        damageLog: [1,5],
        damageLog2: [2,6]
},
    methods: {
        showBtns: function(ev){
            this.visibleBtns = !this.visibleBtns;
            this.visibleStart = !this.visibleStart;
        },
        atack: function() {
            var randNum = Math.floor(Math.random() * 10) + 1;
            this.monsterHealth -= randNum;
            var randNum2 = Math.floor(Math.random() * 10) + 1;
            this.yourHealth -= randNum2;
	        if (this.yourHealth < 1) {
		        alert("Game over. You losed")
		        this.visibleBtns = !this.visibleBtns;
		        this.visibleStart = !this.visibleStart;
		        this.yourHealth = 100;
		        this.monsterHealth = 100;
	        }
	        else if (this.monsterHealth < 1) {
		        alert("Congratulations, you won!!!")
		        this.visibleBtns = !this.visibleBtns;
		        this.visibleStart = !this.visibleStart;
		        this.yourHealth = 100;
		        this.monsterHealth = 100;
	        }
        },
        specialAtack: function () {
            this.monsterHealth -= 10;
            var randNum2 = Math.floor(Math.random() * 10) + 1;
            this.yourHealth -= randNum2;

            if (this.yourHealth < 1) {
                alert("Game over. You losed")
	            this.visibleBtns = !this.visibleBtns;
	            this.visibleStart = !this.visibleStart;
	            this.yourHealth = 100;
	            this.monsterHealth = 100;
            }
            else if (this.monsterHealth < 1) {
                alert("Congratulations, you won!!!")
	            this.visibleBtns = !this.visibleBtns;
	            this.visibleStart = !this.visibleStart;
	            this.yourHealth = 100;
	            this.monsterHealth = 100;
            }

        },
        heal: function() {
            var randNum2 = Math.floor(Math.random() * 10) + 1;
            this.yourHealth -= randNum2;
            if(this.yourHealth > 90){
	            this.yourHealth = 100;
            }
            if(this.yourHealth === 100 ) {
                alert( "Your health is full" )
            }
            else {
	            this.yourHealth += 10;
            }

        },
        giveUp: function() {
            this.visibleBtns = !this.visibleBtns;
            this.visibleStart = !this.visibleStart;
            this.yourHealth = 100;
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