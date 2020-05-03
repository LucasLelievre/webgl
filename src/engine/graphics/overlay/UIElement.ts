class UIElement {

    private htmlCode: string;
    private gameValue: object;

    constructor(html: string, value: object){
        this.htmlCode = html;
        this.gameValue = value;
    }

    public getGameValue(){
        return this.gameValue;
    }

    public getHtmlCode(){
        return this.htmlCode;
    }
}