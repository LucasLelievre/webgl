class UILayer {

    private overlay: HTMLDivElement;

    private html: string;

    private uiElements: Array<UIElement>;

    constructor() {
        this.html = "";
        this.overlay = document.querySelector("#overlay") as HTMLDivElement;
        this.overlay.style.color = "white";

        this.uiElements = new Array<UIElement>();
    }

    public addElement(element: UIElement): void {
        this.uiElements.push(element);
    }

    public update(): void {
        //updates with new values
    }

    public draw(): void {
        this.html = "";
        this.uiElements.forEach(element => {
            this.html += element.getHtml1Code() + Object.values(element.getGameValue())[0] + element.getHtml2Code();
        });
        this.overlay.innerHTML = this.html;
    }
}