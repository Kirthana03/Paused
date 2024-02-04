AFRAME.registerComponent('last-toggle',{
    init: function() {
        let el = this.el;
        var st2 = document.querySelector("#rig");
        pos = st2.getAttribute('position'); 
        posX = pos['x']; 
        posY = pos['y']; 
        posZ = pos['z'] - 25;
        this.togglelast = function() {
            console.log('clicked');
            el.setAttribute('position','0 2 -60'); 
            el.setAttribute('opacity','0');
            st2.setAttribute('animation', `property: position; to: ${posX} ${posY} ${posZ}; dir:alternate; dur:4000; loop:false`);
        }
        this.el.addEventListener('click',this.togglelast);
    }, 
    remove: function() {
        this.el.removeEventListener('click',this.togglelast);

    }
})
