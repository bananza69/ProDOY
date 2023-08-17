import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { MainHeaderComponent } from './main-header/main-header.component';
import { FooterComponent } from './footer/footer.component';
import { MainBlockComponent } from './main-block/main-block.component';
import {MenubarModule} from "primeng/menubar";


@NgModule({
  declarations: [
    MainComponent,
    MainHeaderComponent,
    FooterComponent,
    MainBlockComponent
  ],
    imports: [
        CommonModule,
        MainRoutingModule,
        MenubarModule
    ]
})
export class MainModule { }
