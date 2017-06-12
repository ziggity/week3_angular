import {Component, Input, Output, EventEmitter} from '@angular/core';
import  {Animal} from './animal.model';

@Component({
  selector: 'animal-list',
  template: `
  <nav id="navbar" class="navbar navbar-default">
    <div class="container-fluid">
    <br>
    <br>
      <a class="navbar-brand logo" href="/"><h3>Welcome to Jurassic Park 5.0!!</h3></a>
      <!-- Brand and toggle get grouped for better mobile display -->
      <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
          <span class="sr-only">Nav</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
      </div>
      <!-- Collect the nav links, forms, and Unknown content for toggling -->
      <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul class="nav navbar-nav">
          <li>
            <form class="navbar-form navbar-left">
              <div class="form-group">
                <select (change)="onChangeAge($event.target.value)" class="form-control">
                    <option value="All" selected="All">Search By Age</option>
                    <option value="All">All</option>
                    <option value="Young">Young</option>
                    <option value="Adult1" >Adult</option>
                    <option value="Senior" >Senior</option>
                    <option value="Unknown">Unknown</option>
                </select>
              </div>
            </form>
          </li>
          <li (click)="addNewButtonHasBeenClicked(true)" class="btn"><a>Click to Add a New Dinosaur</a></li>

        </ul>
        <ul class="nav navbar-nav navbar-right">
          <li><a href="https://epicodus.com">Epicodus</a></li>
        </ul>
      </div><!-- /.navbar-collapse -->
    </div><!-- /.container-fluid -->
  </nav>

  <div class="container">
    <div class="row">
      <div class="col-md-2">
      </div>
      <div class="col-md-2">
        <h3>Dinosaur Species</h3>
      </div>
      <div class="col-md-2">
        <h3>Dinosaur Name</h3>
      </div>
      <div class="col-md-2">
        <h3>Dinosaur Location</h3>
      </div>
      <div class="col-md-2">
        <h3>Dinosaur Details</h3>
      </div>
      <div class="col-md-2">
        <h3>Likes/Dislikes</h3>
      </div>
    </div>
    <div *ngIf="filterByAgeOption">
      <div class="row well" *ngFor="let currentAnimal of childAnimalList |age:filterByAgeOption">
        <div class="col-md-2">
          <h4>{{currentAnimal.species}}</h4>
        </div>
        <div class="col-md-2">
          <h4>{{currentAnimal.name}}</h4>
        </div>
        <div class="col-md-2">
          <h4>{{currentAnimal.location}}</h4>
        </div>
        <div class="col-md-2">
          <p><b>DOB:</b> {{currentAnimal.dob}} ({{currentAnimal.ageOption}})<p>
          <p><b>Sex:</b> {{currentAnimal.sex}}<p>
          <p><b>Diet:</b> {{currentAnimal.diet}}<p>
          <p><b>Caretakers:</b> {{currentAnimal.caretakers}}<p>
        </div>
        <div class="col-md-2">
          <p><b>Likes:</b> {{currentAnimal.likes}}<p>
        </div>
        <div class="col-md-2">
          <p><b>Dislikes: </b> {{currentAnimal.dislikes}}<p>
        </div>
          <button name="button" class="btn btn-default pull-right editButton" (click)="editButtonHasBeenClicked(currentAnimal)">Edit</button>
      </div>
    </div>
  </div>
  `
})
export class AnimalListComponent{
@Input()childAnimalList: Animal[];
@Output()clickSender = new EventEmitter();
@Output()addClickSender = new EventEmitter();
editButtonHasBeenClicked(animalToEdit: Animal) {
  this.clickSender.emit(animalToEdit);
}
addNewButtonHasBeenClicked(addString: boolean){
  this.addClickSender.emit(addString);
}
filterByAgeOption = null;
onChangeAge(optionFormMenu) {
  this.filterByAgeOption = optionFormMenu;
}
}
