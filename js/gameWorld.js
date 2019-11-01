class GameWorld {
    
    constructor() {
        this.worldObject = null;
    }

    // Add an element in the game
    addWorldObject (x, y, type) {
        const newObject = new WorldObject(x, y, type);
        if (this.worldObject !== null) {
            let current = this.worldObject;
            while (current.next !== null) {
                current = current.next;
            }
            current.next = newObject;
        } else {
            this.worldObject = newObject;
        }
    }

    // get a element's type from position
    getWorldObjectType (x, y) {
        let current = this.worldObject;

        while (current !== null || (current.posX != x && current.posY != y)){
            current = current.next;
        }

        return current !== null ? current.getType() : null;
    }

    // draw the game elements
    draw () {
        this.worldObject.draw();
    }
}

class WorldObject {
    constructor (x, y, type) {
        this.posX = x;
        this.posY = y;
        this.type = type;
        this.next = null;
    }

    getType () {
        return this.type;
    }

    draw () {
        //draw your stuff

        if (this.next !== null) this.next.draw();
    }
}