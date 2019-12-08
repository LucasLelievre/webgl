class Player extends GameElement {
    
    constructor(x, y){
        super(x, y)
    	this.hp = 3;
    	this.dirX = 1;
    	this.dirY = 0;
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
    draw(deltaTime) {
        // Draw your stuff
    }

    strike() {
    	// Strike
    }
}