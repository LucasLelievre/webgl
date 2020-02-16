class Camera {
    constructor(pos, dir){
        this.dir = dir;
        this.pos = pos;
    }

    update(keys){
        //dir
        /*if (keys.includes(101)) this.dir[0] -= 2;
        if (keys.includes(98)) this.dir[0] += 2;
        if (keys.includes(97)) this.dir[1] -= 2;
        if (keys.includes(99)) this.dir[1] += 2;
        //pos
        if (keys.includes(111)) this.pos[2] += 0.1;
        if (keys.includes(104)) this.pos[2] -= 0.1;
        if (keys.includes(103)) this.pos[0] += 0.1;
        if (keys.includes(105)) this.pos[0] -= 0.1;*/

        /*if (keys.includes(37)) this.dir[1] -= 2;
        if (keys.includes(39)) this.dir[1] += 2;
        if (keys.includes(38)) this.dir[0] -= 2;
        if (keys.includes(40)) this.dir[0] += 2;
        
        if (keys.includes(81)) this.pos[0] += 0.1;
        if (keys.includes(68)) this.pos[0] -= 0.1;
        if (keys.includes(90)) this.pos[2] += 0.1;
        if (keys.includes(83)) this.pos[2] -= 0.1;

        if (keys.includes(32)) this.pos[1] -= 0.1;
        if (keys.includes(17)) this.pos[1] += 0.1;*/
    }
}