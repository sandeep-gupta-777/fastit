import {Directive, ElementRef, HostListener, OnInit} from '@angular/core';

declare let $:any; /*TODO: whats the difference between declare and let*/
@Directive({
  selector: '[appTooltip]'
})
export class TooltipDirective implements OnInit{

  $element;
  constructor(private elementRef:ElementRef) { }

  ngOnInit(){
    this.$element = $(this.elementRef.nativeElement);
    this.$element.tooltip();
  }

  @HostListener('mouseover') hovered(){
    this.$element.tooltip('hide')
      .attr('data-original-title', "Click to copy")
      .tooltip('show');
  }
  @HostListener('click') clicked(){
    this.$element.tooltip('hide')
      .attr('data-original-title', "Link copied!")
      .tooltip('show');
  }
}
