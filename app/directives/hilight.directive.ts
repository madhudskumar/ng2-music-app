import {Directive, Input, ElementRef} from "@angular/core";

@Directive({
    selector:'hilight',
    host:{
        '(mouseenter)':'onMouseEnter()',
        '(mouseleave)':'onMouseLeave()'
    }
})
export class HilightDirective{
    private _activeColor = "red";
    private _originalColor;

    constructor(
        private el:ElementRef
    ){
        this._originalColor =   el.nativeElement.style.backgroundColor;
    }

    @Input() hoverColor:string;
    @Input() set activeColor(color:string){
        this._activeColor = color || this._activeColor;
    }

    onMouseEnter(){
        this.setBackgroundColor(this._activeColor);
    }

    onMouseLeave(){
        this.setBackgroundColor(this._originalColor);
    }

    setBackgroundColor = (color:string) => this.el.nativeElement.style.backgroundColor = color;
}