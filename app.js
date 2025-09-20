document.addEventListener("alpine:init", () => {
    Alpine.data("dropdown", () => ({
        open: false,
        toggle(){
            this.open = !this.open
        }
    }))

    Alpine.store("user", {
        username: 'malidkha',
        posts: [
            {
                id: 1,
                title: 'title-1',
                body : 'post-1 body'
            },
            {   id: 2,
                title: 'title-2',
                body : 'post-2 body'
            }
        ]
    })

    Alpine.data("alpine_directive_binding", () => ({
        clicked: false,
        toggle(){
            this.clicked = !this.clicked
        },
        trigger: {
            // ['x-text']: "'Click Me From The Bind'",
            ['x-text']() {
                return 'Click Me From The Bind-2'
            },
            ['@click']() {
                this.toggle()
            },
        },
    }))
})
