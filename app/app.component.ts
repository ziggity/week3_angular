import { Component } from '@angular/core';
import { Animal } from './animal.model'

@Component({
  selector: 'app-root',
  template: `
  <h1>Zootopia!</h1>
  `
})

export class AppComponent {
  animalList:Animal[]=[
    new Animal("Boar", "Husker", "05/17/2015", "Omnivore", "Area 71", 7, "Female", "Truffles", "Hunters"),
    new Animal("Great white shark", "Bitey", "11/12/2009", "Carnivore", "Area 11", 13, "Male", "Freshy meat", "Motor boat noises"),
    new Animal("Parrot", "Liza", "04/12/2015", "Herbivore", "Area 21", 12, "Female", "Cracker", "Other birds"),
    new Animal("Penguin", "Gerry", "12/23/2014", "Seafood", "Area 34", 3, "Male", "Playing catch with his rubber ducky", "Camera Flashes"),
    new Animal("Rabbit", "Luka", "03/02/2005", "Herbivore", "Area 51", 1, "Male", "Kale treat and pets on the head", "Lound noises and obnoxious kids"),
  ];
}
