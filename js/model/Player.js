class Player extends GameElement {
    
    constructor(x, y){
        super(x, y)
    	this.hp = 3;
    	this.dirX = 1;
    	this.dirY = 0;
    }

    /**
     * Update the player
     */
    update(deltaTime){
        // Update the element
    }

    /**
     * Draw the player
     */
    draw(deltaTime) {
        // Draw your stuff
    }

    strike() {
    	// Strike
    }
}