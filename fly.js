AFRAME.registerComponent("fly", {
    schema: {
        stepFactor: { type: "number", default: 0.5 },
        isFlying: { type: "boolean", default: true }
    },
    tick: function () {
        if (this.data.isFlying) {
            let newP = this.el.components.camera.camera.parent.position.add(this.el.components.camera.camera.getWorldDirection().multiplyScalar(this.data.stepFactor));
            this.el.setAttribute('position', newP)
        }
    }
});