
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
            if (notification.message.body == null || notification.message.body == "") {
                return;
            }
            notification.id = Date.now();
            notification.duration = notification.duration ?? 1000;
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
				case 'warning': return 'orange'
                case 'error': return 'red'
				default: return 'blue'
			}
		},
    }))
})
