new Vue({
    el: '#app',
    data: {
        title: 'Hello VUE!',
        htmlExample: '<img src="http://placecage.com/200/200">',
        counter: 0
    },
    methods: {
        changeText: function(ev){
            this.title = ev.target.value;
        },
        getValue: function() {
            this.title = 'function result';
            return this.title;
        },
        increaseCounter: function(step, $event) {
            this.counter += step;
            //alert(event.target.tagName)
        },
        keyUpListener: function() {
            alert( 'You`ve hitted ENTER or SPACE button')
        }
    }
})

//computed - do a fucntions without a recalculating a DOM