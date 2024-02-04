AFRAME.registerComponent('opacity-toggle',{
    init: function() {
        let el = this.el;
        this.toggleState = function() {
            console.log('clicked');
            // el.setAttribute('position','0 2 -60'); 
            el.setAttribute('animation', 'property: scale; from:1 1 1; to: 0 0 0; dur:2000; loop:false');
            // el.components.sound.stopSound();
            // st2.components.sound.playSound();
        }
        this.el.addEventListener('click',this.toggleState);
    }, 
    remove: function() {
        this.el.removeEventListener('click',this.toggleState);

    }
})
