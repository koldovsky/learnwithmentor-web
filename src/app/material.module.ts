import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material';
import { MatDialogModule } from '@angular/material';
import { MatTabsModule } from '@angular/material/tabs';
import { MatMenuModule } from '@angular/material';
import { MatDividerModule } from '@angular/material/divider';
import { MatTooltipModule } from '@angular/material/tooltip';


@NgModule({
    imports: [
        MatCardModule,
        MatGridListModule,
        MatListModule,
        MatToolbarModule,
        MatDialogModule,
        MatTabsModule,
        MatDividerModule,
        MatMenuModule,
        MatTooltipModule
    ],
    exports: [
        MatCardModule,
        MatGridListModule,
        MatListModule,
        MatToolbarModule,
        MatDialogModule,
        MatTabsModule,
        MatDividerModule,
        MatMenuModule,
        MatTooltipModule
    ]
})
export class MaterialModule {

}
