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
    new Animal("Dilophosaurus", "Luka", "05/01/2015", "Young", "Herbivore", "Area 1", 1, "F", "tall grass to gallop through", "Foxes and Hawks", "http://sites.psu.edu/kateyorko/wp-content/uploads/sites/31945/2015/10/dilophosaurus-jurassic-park.jpg"),
    new Animal("Sauropoda", "Stripes", "12/18/2012", "Young", "Carnivore", "Area 2", 6, "F", "Raw meat", "Loud noises", "https://i.ytimg.com/vi/yfnidv4KnUM/maxresdefault.jpg"),
    new Animal("Troodon", "Joey", "12/23/2014", "Adult1", "Carnivore", "Area 3", 7, "M", "Playing catch", "Sharing meals", "http://vignette4.wikia.nocookie.net/dino/images/c/cc/Small_Hesperonychus.png/revision/latest?cb=20150720022456"),
    new Animal("Tyrannosaurus rex", "Husky", "12/06/2014", "Senior", "Omnivore", "Area 4", 2, "M", "Standing in mud", "Being poked", "https://s-media-cache-ak0.pinimg.com/originals/01/a6/cd/01a6cdb74a3d09c30a2f3f3d0d00b0f8.jpg"),
    new Animal("Velociraptor", "Stryker", "12/03/2011", "Senior", "Herbivore", "Area 5", 5, "M", "Standing with the herd", "Being tickled", "http://vignette2.wikia.nocookie.net/jurassicpark/images/1/12/Velociraptor-detail-header.png/revision/latest?cb=20150420213742")
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
