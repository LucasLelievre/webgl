class Enemy extends Entity {
	
	constructor(x, y){
        super(x, y)
        this.hp = 3;
        //TODO vec3
    	this.dir = vec2.fromValues(1, 0);
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
    draw(width, height) {
        // Draw your stuff
    }
}