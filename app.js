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
                title: 'title-1',
                body : 'post-1 body'
            },
            {
                title: 'title-2',
                body : 'post-2 body'
            }
        ]
    })
})
