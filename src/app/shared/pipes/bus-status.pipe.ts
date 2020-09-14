import { SecurityContext } from '@angular/core';
import { Sanitizer } from '@angular/core';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'busStatus'
})
export class BusStatusPipe implements PipeTransform {

  constructor(
    private sanitizer: Sanitizer
  ) {}

  transform(value: string): any {

    return value ? this.sanitize(this.getStatus(value)) : '';
  }

  getStatus(value) {
    let statusHtml = '<span class="ontime">On Time<span>';
    const earlyDeviation = 300;
    const lateDeviation = -200;

    if (value > earlyDeviation || value < lateDeviation) {
      statusHtml = value > earlyDeviation ? '<span class="late">Late<span>' : '<span class="early">Early<span>';
    }
    return statusHtml;
  }

  sanitize(str) {
    return this.sanitizer.sanitize(SecurityContext.HTML, str);
  }

}
