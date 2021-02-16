const app = Vue.createApp({
    data() {
        return {
            title: 'This is a title based on data',
            body: 'This is a boring body.'
        }
    },
    template: '<h2>{{ title }}</h2><p>{{ body }}</p><button @click="click($event, \'Hello\')">Click</button>',
    methods: {
        click(e, body) {
            console.log(e)
            this.body = body
        }
    }
})

app.mount('#app')