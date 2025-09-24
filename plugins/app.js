

document.addEventListener("alpine:init", () => {
    Alpine.data("intersectComponent", () => ({
        //animation on scroll
        showAnimatedText: false,
        
        //lazy loading
        lazyLoadImage: false,
        lazyImageLink: null,
        lazyLoad() {
            this.lazyLoadImage = true;
            this.lazyImageLink = 'https://picsum.photos/500'
        },

        //infinite scrolling
        infiniteScrollingHtmlContent: null,

        infiniteContent: `  <div>
              <p>hey there!</p>
              <div>
                At libero esse sit qui. Totam laborum nihil nam ipsum facere
                quia inventore eos libero. Cumque dolorem repudiandae deleniti
                cum non sunt hic saepe aperiam. Et magnam nam corrupti totam
                nesciunt et ut. Nam quae quibusdam minima et aliquam illo
                distinctio perferendis veniam. Quo voluptas quibusdam voluptate
                sapiente hic aspernatur vero impedit autem. Aut illum in minima
                ea qui aut. Quaerat eaque sapiente dignissimos dignissimos quia
                consequatur minima quia. Consectetur qui dolor maiores eligendi
                sunt. Est tempore quia laboriosam aut est porro soluta
                consequuntur. Similique quas ipsum explicabo voluptatibus ex
                consequatur dolor itaque. Eum officia est ut. Cupiditate quam
                cumque ab sed corrupti non voluptas illo in. Debitis illo ea
                voluptate molestiae provident porro rem assumenda. Autem itaque
                ea sit dolor tempora aut veritatis possimus eos. Nemo atque
                atque sapiente excepturi dignissimos omnis.
              </div>

              <p>hello !</p>
              <div>
                Error at quasi illo et perspiciatis voluptatem. Officia voluptas
                porro aut rem eligendi. Dolores enim enim. Natus hic placeat
                voluptas ipsum sed cupiditate dolorum. Eum vitae et mollitia
                quis facere. Blanditiis omnis nisi ducimus consequatur
                consequatur quo est eos. Cumque placeat qui mollitia et. Cum
                enim impedit commodi est repellendus unde optio. Quas adipisci
                voluptatibus nostrum hic accusantium consequuntur occaecati et.
                Voluptatem sunt est. Et aut qui deserunt vel labore in autem.
                Repellat quasi nobis vitae illo nihil velit tempore. Distinctio
                dolor animi corporis aperiam praesentium expedita. Sequi sit
                voluptatibus exercitationem. Ea voluptate voluptas.
              </div>
            </div>`,
        
        addContent() {
            console.log("hey")
            this.infiniteScrollingHtmlContent += this.infiniteContent + this.infiniteContent + this.infiniteContent
        },
        
        init() {
            this.infiniteScrollingHtmlContent = this.infiniteContent
        }
        
    }))
    

    Alpine.store('persistentName', {
        name : Alpine.$persist('malidkha')
    })
})
