AFRAME.registerComponent('rotate-toggle', {
    init: function() {
        let el = this.el;
        let fly = document.querySelectorAll('.cluster');
        
        this.toggleRotate = function() {
            console.log('clicked');
            let pos = el.getAttribute('position');
            let posX = pos['x'] + Math.random() * 100; 
            let posY = pos['y'] + Math.random() * 100; 
            let posZ = pos['z'] + Math.random() * 100; 
            el.setAttribute('animation', `property: position; to: ${posX} ${posY} ${posZ}; dir:alternate; dur:4000; loop:false`);
        }
        this.el.addEventListener('click', this.toggleRotate);
    },
    remove: function() {
        this.el.removeEventListener('click', this.toggleRotate);
    }
});
