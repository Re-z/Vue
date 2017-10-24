new Vue({
    el: '.vue-game',
    data: {
        yourHealth: 100,
        monsterHealth: 100,
        visible: false,

},
    methods: {
        showBtns: function(ev){
            this.visible = true;
            ev.target.style.display = 'none'
        },
        atack: function() {
            var randNum = Math.floor(Math.random() * 10) + 1;
            this.monsterHealth -= randNum;
            alert(randNum)
        }

    }
});