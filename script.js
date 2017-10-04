new Vue({
    el: '#app',
    data: {
        title: 'Hello VUE!'
    },
    methods: {
        changeText: function(ev){
            this.title = ev.target.value;
        },
        getValue: function() {
            if (true) {
                this.title = 'function result';
                return this.title;

            }
        }
    }
})