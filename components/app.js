
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
    
    
    Alpine.data("notificationComponent", () => (    {
        types : ['Success', 'Info', 'Warning', 'Error'],
        openTypeDropdown : false,
        selectedType : 'Success',
        message: "hello there!"
    }))


    Alpine.data("notificationHandler", () => (    {
        notifications: [],
        visible: [],
        add(notification) {
            // if (notification.message.body == null || notification.message.body == "") {
            //     return;
            // }
            notification.id = Date.now();
            notification.duration = notification.duration ?? 800000000;
            this.notifications.push(notification);
            this.fire(notification);
        },
        //FIFO
        fire(notification) {
            this.visible.push(notification);
            setTimeout(() => {
                this.remove(notification.id);
            }, notification.duration);
        },
        remove(id) {
            const notification = this.visible.find((notification) => notification.id == id);
            const index = this.visible.indexOf(notification);
            this.visible.splice(index, 1);
            this.notifications.splice(index, 1);
        },
		getBgColor(type, shade) {
			return `bg-${this.getThemeColor(type)}-${shade}`
		},
		getThemeColor(type) {
			switch (type.toLowerCase()) {
				case 'success': return 'green'
				case 'warning': return 'yellow'
                case 'error': return 'red'
				default: return 'blue'
			}
        },
        getNotificationTypeIcon(type) {
            switch (type.toLowerCase()) {
				case 'success': return `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>`

				case 'warning': return `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
                </svg>`

                case 'error': return `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
                </svg>`
                
				default: return `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
                <path stroke-linecap="round" stroke-linejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
                </svg>`
            }
        },

        // init() {
        //     this.add({ type: "success", message: { title: "success", body: "hello there ÞTenetur et illum iste et est. Reprehenderit corporis impedit maiores. Ducimus qui maxime ut impedit iure ea. Qui rerum sed eius repudiandae est possimus. Similique porro repudiandae." }})
        // }
    }))
})
