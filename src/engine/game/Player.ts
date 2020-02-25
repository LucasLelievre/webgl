import { mat4 } from "../maths/gl-matrix"

class Player extends Entity {

    private hp: number;

    constructor(pos: vec3, dir: vec3) {
        super(pos, dir, Mesh.getPlayerMesh());
        this.hp = 3;
    }

    /**
     * Updates the entity since the last frame
     * @param {float} deltaTime time elapsed since the last frame
     */
    public update(deltaTime: number, keys: string[]) {
        // Update the entity
        //TODO movement based on keys
    }

    /**
     * Draws the entity
     * @param {float} deltaTime time elapsed since the last frame
     */
    public draw(modelViewMatrix: mat4) {
        // alright, lets draw some shit

        // Reset the model-view matrix
        mat4.identity(modelViewMatrix);

        // Translate
        //              out             in              translation
        mat4.translate(modelViewMatrix, modelViewMatrix, this.getPos());

        // Rotation
        //              out             int             angle (radian)          axis
        mat4.rotate(modelViewMatrix, modelViewMatrix, this.getDir()[0] * Math.PI, [1, 0, 0]);
        mat4.rotate(modelViewMatrix, modelViewMatrix, this.getDir()[1] * Math.PI, [0, 1, 0]);
        mat4.rotate(modelViewMatrix, modelViewMatrix, this.getDir()[2] * Math.PI, [0, 0, 1]);
    }

    public strike() {
        // Strike
    }
}