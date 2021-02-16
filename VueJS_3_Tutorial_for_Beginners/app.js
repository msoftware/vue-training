const app = Vue.createApp({
    data() {
        return {
            title: 'This is a title based on data',
            body: 'This is a boring body.',
            showButtons: true
        }
    },
    methods: {
        click(e, body) {
            console.log(e)
            this.body = body
        },
        toggleButtons() {
            this.showButtons = !this.showButtons;
        }
    }
})

app.mount('#app')