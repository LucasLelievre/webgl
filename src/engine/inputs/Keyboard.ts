class Keyboard {

    private keys: string[];

    constructor() {
        this.keys = [];
    }

    public keyDown(keyCode: string): void {
        if (this.keys.indexOf(keyCode) == -1) this.keys.push(keyCode);
    }

    public keyUp(keyCode: string): void {
        this.keys.splice(this.keys.indexOf(keyCode), 1);
    }

    public getKeys(): string[] {
        return this.keys;
    }
}