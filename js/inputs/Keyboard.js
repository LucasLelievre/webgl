class Keyboard {

    constructor(){
        this.keys = [];
    }

    keyDown(keyCode){
        if (this.keys.findIndex(key => key == keyCode) == -1)
            this.keys.push(keyCode);
    }

    keyUp(keyCode){
        this.keys.splice(this.keys.findIndex(key => key == keyCode), 1);
    }

    isKeyPressed(keyCode) {
        console.log(this.keys.findIndex(key => key == keyCode));
        if (this.keys.findIndex(key => key == keyCode) != -1) return true;
        return false;
    }
}