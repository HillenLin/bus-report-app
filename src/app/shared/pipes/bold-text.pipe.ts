import { SecurityContext } from '@angular/core';
import { Pipe, PipeTransform, Sanitizer } from '@angular/core';

@Pipe({
  name: 'boldText'
})
export class BoldTextPipe implements PipeTransform {

  constructor(
    private sanitizer: Sanitizer
  ) {}

  transform(value: string): any {
    return (value.toUpperCase() === 'UNKNOWN') ? value.toUpperCase() : this.sanitize(this.replace(value));
  }

  replace(str) {
    return '<b>' + str.substr(0, 3) + '</b>' + str.substr(3, str.length);
  }

  sanitize(str) {
    return this.sanitizer.sanitize(SecurityContext.HTML, str);
  }
}
