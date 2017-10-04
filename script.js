new Vue({
    el: '#app',
    data: {
        title: 'Hello VUE!'
    },
    methods: {
        changeText: function(ev){
            this.title = ev.target.value;
        }
    }
})