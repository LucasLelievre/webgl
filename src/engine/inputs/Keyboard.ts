class Keyboard {

    public static up: string;
    public static down: string;
    public static left: string;
    public static right: string;
    public static use: string;
    public static reload: string;

    private keys: string[];
    private isQwerty: boolean;

    constructor() {
        this.keys = [];
        this.isQwerty = false;
        Keyboard.up = "Z";
        Keyboard.down = "S";
        Keyboard.left = "Q";
        Keyboard.right = "D";
        Keyboard.use = "E";
        Keyboard.reload = "R";

        
        this.setMode(true);
    }

    public keyDown(keyCode: string): void {
        if (this.keys.indexOf(keyCode.toLocaleUpperCase()) == -1) this.keys.push(keyCode.toLocaleUpperCase());
    }

    public keyUp(keyCode: string): void {
        this.keys.splice(this.keys.indexOf(keyCode.toLocaleUpperCase()), 1);
    }

    public getKeys(): string[] {
        return this.keys;
    }

    public setMode(mode: boolean){
        this.isQwerty = mode;
        mode ? Keyboard.up = "W" : Keyboard.up = "Z";
        mode ? Keyboard.left = "A" : Keyboard.left = "Q";
    }
}