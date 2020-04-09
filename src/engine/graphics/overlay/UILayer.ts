class UILayer {

    private overlay: HTMLDivElement;

    private html: string;

    constructor(){
        this.overlay = document.querySelector("#overlay") as HTMLDivElement;
        this.html = "";
        //this.setLayer();
    }

    public setLayer(): void {
        //empty the overlay div and adds the ui elements
        this.overlay.style.color = "white";
        this.html = "this is UI";
    }

    public update(): void {
        //updates with new values
    }

    public draw(): void {
        this.overlay.innerHTML = this.html;
    }
}