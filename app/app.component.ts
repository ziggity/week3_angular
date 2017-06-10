import { Component } from '@angular/core';
import { Animal } from './animal.model'

@Component({
  selector: 'app-root',
  template: `
  <animal-list [childAnimalList]="animalList" (clickSender)="editAnimal($event)" (addClickSender)="addNewAnimal($event)"></animal-list>
  <animal-edit [cSelectAnimal]="selectedAnimal" (doneButtonClickedSender)="submitEdit()"></animal-edit>

  <animal-new (newAnimalSender)="addAnimal($event)" (doneAddingSender)="doneAdd()"[addNewAnimal]="parentAddNew"></animal-new>
  `
})

export class AppComponent {
  animalList:Animal[]=[
    new Animal("Rabbit", "Luka", "05/01/2015", "Young", "Herbivore", "Area 1", 1, "F", "tall grass to gallop through", "Foxes and Hawks"),
    new Animal("Tiger", "Stripes", "12/18/2012", "Young", "Carnivore", "Area 2", 6, "F", "Raw meat", "Loud noises"),
    new Animal("Bear", "Joey", "12/23/2014", "Adult1", "Carnivore", "Area 3", 7, "M", "Playing catch", "Sharing meals"),
    new Animal("Boar", "Husky", "12/06/2014", "Senior", "Omnivore", "Area 4", 2, "M", "Standing in mud", "Being poked"),
    new Animal("Elephant", "Dumbo", "12/03/2011", "Senior", "Herbivore", "Area 5", 5, "M", "Standing with the herd", "Being tickled")
  ];
  selectedAnimal = null;
  parentAddNew = false;
  doneAdd(){
    this.parentAddNew = false;
  }
  submitEdit() {
    this.selectedAnimal = null;
  }
  editAnimal(clickedAnimal: Animal){
    this.selectedAnimal = clickedAnimal;
  }
  addNewAnimal(add: boolean){
    this.parentAddNew= add;
  }
  addAnimal(newAnimalChild: Animal){
    this.animalList.push(newAnimalChild);
  }
}
