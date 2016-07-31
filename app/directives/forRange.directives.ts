import {Directive, Input, EmbeddedViewRef, TemplateRef, ViewContainerRef} from "@angular/core";

@Directive({
    selector: '[forRange]'
})
export class ForRangeDirective{

    constructor(
        private _templateRef:TemplateRef,
        private _viewContainer:ViewContainerRef
    ){}

    @Input() set forRange(value:number){
        this.render(value);
    }

    render(range:number){
        for(let i = 0; i < range; i++){
            var view:EmbeddedViewRef = this._viewContainer.createEmbeddedView(this._templateRef, i);
            //view.setLocal("index", i);
            //view.context.$implicit
        }
    }
}