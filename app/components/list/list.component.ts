/**
 * Created by egragus on 12/22/16.
 */
import {Component, Input} from 'angular2/core';


@Component({
    selector: 'list',
    template: `
        <ul>
            <li *ngFor="#item of items">
                {{ item }}
            </li>
        </ul>`
        ,

})
export class ListComponent {

    @Input('items') items = [];


}