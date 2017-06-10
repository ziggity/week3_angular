import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { FormsModule } from '@angular/forms';
import {AnimalListComponent} from './animal-list.component';
import {AnimalEditComponent} from './animal-edit.component';
import {AnimalNewComponent} from './animal-new.component';
import { animalAgePipe } from './age.pipe';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [ AppComponent, AnimalNewComponent, AnimalEditComponent, AnimalListComponent, animalAgePipe ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
