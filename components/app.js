
document.addEventListener("alpine:init", () => {
    Alpine.data("tabsComponent", () => ({
        tabs: {
            'Home': 'Commodi vel tempora. Ex sit delectus nihil voluptas ratione provident dolor optio iusto. Vel omnis quia qui aut assumenda. Cum cumque veritatis repellendus nam maxime minima a dolores.',
            'Users': 'Nemo est et et harum iste natus nesciunt neque.',
            'Settings': 'Vitae aut hic est atque qui commodi voluptatum. Dolore nesciunt consectetur dolorem nesciunt. Ducimus quis quam et neque in.'
        },
        activeTab: 'Home'
    }))

     Alpine.data("accordionComponent", () => ({
        accordions: {
            'topic #1': 'Commodi vel tempora. Ex sit delectus nihil voluptas ratione provident dolor optio iusto. Vel omnis quia qui aut assumenda. Cum cumque veritatis repellendus nam maxime minima a dolores.',
            'topic #2': 'Nemo est et et harum iste natus nesciunt neque.',
            'topic #3': 'Vitae aut hic est atque qui commodi voluptatum. Dolore nesciunt consectetur dolorem nesciunt. Ducimus quis quam et neque in.'
        },
        activeAccordion: null
    }))

})
