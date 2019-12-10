class GameWorld {

    init(){
        // Here are the elements that will be seen in the game

        this.addGameElement(new Wall(0, 0)); // a wall at (0,0)


        //this.setWorldSize();

        console.log("The game world has been initialized.");
    }

    /**
     * Create a game world
     */
    constructor() {
        //TODO create a list for the elements
        //this.width = 0;
        //this.height = 0;
    }

    /**
     * Add an element in the game
     * @param {int} x position X
     * @param {int} y position y
     * @param {int} type type of the element
     */
    addGameElement (gameElement) {
        this.setWorldSize(gameElement.getSize().x, gameElement.getSize().y);
        //gameElements.add(gameElement);
    }

    /**
     * Get a element's type from position
     * @param {int} x position x of the element
     * @param {int} y position y of the element
     * @returns the element's type
     */
    getGameElementType (x, y) {
        //return the elements at the pos
    }

    /**
     * remove an element from the game
     * @param {int} x position x
     * @param {int} y position y
     */
    removeGameElement (x, y) {
        // TODO reduce the size if needed
        // TODO remove the elements
    }

    /**
     * Set world size based on the positions of the elements
     */
    setWorldSize(){
        //if (x > this.width) this.width = x;
        //if (y > this.height) this.height = y;
        // TODO set the world size
    }

    /**
     * Draw all the game's elements
     */
    draw () {
        // TODO call all elements' draw function
        //element.draw(this.width, this.height)
    }
}