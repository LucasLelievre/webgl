class WorldElement {

    /**
     * Create an element tht will be part of the game
     * @param {int} x position X
     * @param {int} y position Y
     * @param {int} type type of the element (0 = wall, 1 = player, 2 = ennemy, 3 = end...)
     */
    constructor (x, y, type) {
        this.posX = x;
        this.posY = y;
        this.type = type;
        this.next = null;
    }

    /**
     * Create and add a new element in the game world
     * @param {int} x position of the new element
     * @param {int} y position y of the new element
     * @param {int} type type of the new element
     */
    addWorldElement(x, y, type){
        this.next !== null ? this.next.addWorldElement(x, y, type) : this.next = new WorldElement(x, y, type);
    }

    /**
     * Get an element's type from his position
     * @param {int} x position x
     * @param {int} y position y
     * @returns The element's type
     */
    getWorldElementType (x, y) {
        return (this.posX == x && this.posY == Y) ? this.type : this.next.getWorldElementType(x, y);
    }

    /**
     * Remove an element from the game world
     * @param {int} x position x
     * @param {int} y position y
     */
    removeWorldElement(x, y){
        if (this.next !== null && this.next.posX == x && this.next.posY == y) {
            this.next.next !== null ? this.next = this.next.next : this.next = null;
        } else {
            this.next.removeWorldElement(x, y);
        }
    }

    /**
     * Draw the element and the next ones
     */
    draw () {
        //draw your stuff

        if (this.next !== null) this.next.draw();
    }
}