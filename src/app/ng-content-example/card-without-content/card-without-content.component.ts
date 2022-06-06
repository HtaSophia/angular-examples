import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-card-without-content',
    templateUrl: './card-without-content.component.html',
    styleUrls: ['./card-without-content.component.scss']
})
export class CardWithoutContentComponent {
    @Input()
    public title: string = '';

    @Input()
    public imageUrl: string = '';

    @Input()
    public description: string = '';
}
