import {Directive, ElementRef, HostListener, Input} from '@angular/core';
import {IconCategory} from '../utils/icons/icons';

@Directive({
  selector: '[ytcAppIconForHeader]',
})
export class YtcTooltipForIconDirective {
  @Input('ytcAppIconForHeader') iconCategory!: IconCategory;

  constructor(
    private el: ElementRef,
    private tooltipElement: HTMLElement) { }

  @HostListener('mouseenter') onMouseEnter(): void {
    this.displayLinkName(true);
  }

  @HostListener('mouseleave') onMouseLeave(): void {
    this.displayLinkName(false);
  }

  private displayLinkName(canShowLinkName: boolean): void {
    canShowLinkName === true ?
      this.tooltipElement.style.display = 'block' :
      this.tooltipElement.style.display = 'none';
  }
}
