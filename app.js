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
})
