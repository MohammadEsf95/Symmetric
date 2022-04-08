import {Pipe, PipeTransform} from "@angular/core";

@Pipe({name: 'scoreClassPipe'})
export class ScoreClassPipe implements PipeTransform {
  transform(n: any): string {
    if (n >= 125.0) {
      return 'world-class';
    } else if (n >= 112.5) {
      return 'elite';
    } else if (n >= 100.0) {
      return 'exceptional';
    } else if (n >= 87.5) {
      return 'advanced';
    } else if (n >= 75.0) {
      return 'proficient';
    } else if (n >= 60.0) {
      return 'intermediate';
    } else if (n >= 45.0) {
      return 'novice';
    } else if (n >= 30.0) {
      return 'untrained';
    } else {
      return 'subpar';
    }
  }
}
