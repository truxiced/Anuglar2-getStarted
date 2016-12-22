/**
 * Created by egragus on 12/22/16.
 */
import {Component} from 'angular2/core';
import {ListComponent} from 'app/components/list/list.component';
import {CountriesService} from 'app/services/countries.service'

@Component({
    selector: 'courses',
    template: `
        <h1>Courses</h1>
            {{ title }}
        <br />
        <list
        [items] = items
        ></list>`,
    directives: [ListComponent],
    providers: [CountriesService]
})
export class CoursesComponent {

    title = "This is a title";

    items;

    constructor(countriesService: CountriesService){

        //Sets value to list.
        this.items = countriesService.getCountries();
    }
}