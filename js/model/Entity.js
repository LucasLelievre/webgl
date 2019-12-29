class Entity {

    /**
     * Create an element tht will be part of the game
     * @param {int} x position X
     * @param {int} y position Y
     * @param {int} Z position Z
     */
    constructor(x, y, z, mesh) {
        this.pos = vec3.fromValues(x, y, z);
        this.mesh = mesh;
    }

    getPos(){
        return this.pos;
    }

    getMesh() {
        return this.mesh;
    }

    /**
     * Updates the element since the last frame
     * @param {float} deltaTime time elapsed since the last frame
     */
    update(deltaTime){
        // Update the element
    }

    /**
     * Draws the element
     * @param {float} deltaTime time elapsed since the last frame
     */
    draw(modelViewMatrix) {
        // Draw your stuff
        
        
    }
}