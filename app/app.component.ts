import {Component} from 'angular2/core';
import {CoursesComponent} from './components/courses/courses.component'

@Component({
    selector: 'my-app',
    template: '<h1>My First Angular 2 App test</h1> <courses></courses>',
    directives: [CoursesComponent]
})
export class AppComponent {}