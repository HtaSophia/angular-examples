import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardMultiSlotContentComponent } from './card-multi-slot-content/card-multi-slot-content.component';
import { CardSingleSlotContentComponent } from './card-single-slot-content/card-single-slot-content.component';
import { CardWithoutContentComponent } from './card-without-content/card-without-content.component';
import { NgContentExampleComponent } from './ng-content-example.component';



@NgModule({
    declarations: [
        CardMultiSlotContentComponent,
        CardSingleSlotContentComponent,
        CardWithoutContentComponent,
        NgContentExampleComponent
    ],
    imports: [CommonModule],
    exports: [NgContentExampleComponent]
})
export class NgContentExampleModule { }
