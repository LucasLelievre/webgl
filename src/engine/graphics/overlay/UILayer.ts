class UILayer {

    private div: HTMLDivElement;

    constructor(){
        this.div = document.querySelector("#overlayer") as HTMLDivElement;
    }

    public setLayer(): void {
        this.div.innerHTML = "wesh";
        //empty the overlay div and adds the ui elements
    }

    public draw(): void {
        //updates with new values
    }
}