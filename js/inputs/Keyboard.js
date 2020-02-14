class Keyboard {

    constructor(){
        this.keys = [];
    }

    keyDown(keyCode){
        //console.log(keyCode);
        
        if (!this.keys.includes(keyCode))
            this.keys.push(keyCode);
    }

    keyUp(keyCode){
        this.keys.splice(this.keys.findIndex(key => key == keyCode), 1);
    }

    isKeyPressed(keyCode) {
        if (this.keys.includes(keyCode)) return true;
        return false;
    }
}