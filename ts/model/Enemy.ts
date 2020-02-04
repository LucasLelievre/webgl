class Enemy extends Entity {

    private hp:number;

    constructor(x: number, y: number) {
        //TODO enemy mesh
        super(x, y, 0, Mesh.getPlayerMesh());

        this.hp = 3;
    }

    /**
     * Updates the element since the last frame
     * @param {float} deltaTime time elapsed since the last frame
     */
    public update(deltaTime: number){
        // Update the element
    }

    /**
     * Draws the element
     * @param {float} deltaTime time elapsed since the last frame
     */
    public draw(modelViewMatrix) {
        // Draw your stuff
        //TODO reset translate rotate scalate
    }
}