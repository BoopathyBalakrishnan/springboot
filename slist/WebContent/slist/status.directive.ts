import { Directive, ElementRef, Input, Renderer } from '@angular/core';
@Directive({
    selector: '[color-change]'
})
export class ColorChange {
    constructor(private el: ElementRef, private renderer: Renderer) {
        this.changecolor("lightgreen");
    }
    @Input('color-change') status: string;

    private changecolor(color: string) {
        if (this.status == "present") {
            this.renderer.setElementStyle(this.el.nativeElement, 'backgroundColor', color);
        } else {


        }
    }
}