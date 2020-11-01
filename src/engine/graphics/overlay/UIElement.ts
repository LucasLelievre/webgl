class UIElement {

    private html1Code: string;
    private html2Code: string;
    private gameValue: object;

    constructor(html1: string, value: object, html2: string){
        this.html1Code = html1;
        this.html2Code = html2;
        this.gameValue = value;
    }

    public getGameValue(){
        return this.gameValue;
    }

    public getHtml1Code(){
        return this.html1Code;
    }

    public getHtml2Code(){
        return this.html2Code;
    }
}