import {Component, Input, Output, EventEmitter} from '@angular/core';
import  {Animal} from './animal.model';

@Component({
  selector: 'animal-edit',
  template: `
  <div *ngIf="cSelectAnimal">
      <div class="well container">
        <h3>Edit {{cSelectAnimal.name}} the {{cSelectAnimal.species}}</h3>
        <div class="row">
          <div class="col-md-6">
            <div class="form-group">
              <label>Species:</label>
              <input [(ngModel)]="cSelectAnimal.species" class="form-control">
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-group">
              <label>Name:</label>
              <input [(ngModel)]="cSelectAnimal.name" class="form-control">
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4">
            <div class="form-group">
              <label>Date of Birth:</label>
              <input [(ngModel)]="cSelectAnimal.dob" class="form-control" type="date">
            </div>
          </div>
          <div class="col-md-4">
            <div class="form-group">
              <label>Age option</label>
              <select ng-model="data.cSelectAnimal.ageOption" [(ngModel)]="cSelectAnimal.ageOption"  class="form-control">
                <option value="All" selected>All</option>
                <option value="Young">Young</option>
                <option value="Adult1" >Adult1</option>
                <option value="Senior" >Senior</option>
                <option value="Unknown">Unknown</option>
              </select>
            </div>
          </div>
          <div class="col-md-4">
            <div class="form-group">
              <label>Sex:</label>
              <select ng-model="data.cSelectAnimal.sex" [(ngModel)]="cSelectAnimal.sex"  class="form-control">
                <option value="M">Male</option>
                <option value="F" >Female</option>
                <option value="N/A" >N/A</option>
              </select>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4">
            <div class="form-group">
              <label>Location:</label>
              <select ng-model="data.cSelectAnimal.location" [(ngModel)]="cSelectAnimal.location"  class="form-control">
                <option value="Area 1">Area 1</option>
                <option value="Area 2" >Area 2</option>
                <option value="Area 3" >Area 3</option>
                <option value="Area 4" >Area 4</option>
                <option value="Area 5" >Area 5</option>
                <option value="Unknown" >Unknown</option>
              </select>
            </div>
          </div>
          <div class="col-md-4">
            <div class="form-group">
              <label>Diet:</label>
              <select ng-model="data.cSelectAnimal.diet" [(ngModel)]="cSelectAnimal.diet"  class="form-control">
                <option value="Carnivore">Carnivore</option>
                <option value="Herbivore" >Herbivore</option>
                <option value="Omnivore" >Omnivore</option>
                <option value="Unknown" >Unknown</option>
              </select>
            </div>
          </div>
          <div class="col-md-4">
            <div class="form-group">
              <label>Number of Caretakers:</label>
              <input [(ngModel)]="cSelectAnimal.caretakers" class="form-control" type="number">
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6">
            <div class="form-group">
              <label>Likes:</label>
              <input [(ngModel)]="cSelectAnimal.likes" class="form-control">
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-group">
              <label>Dislikes:</label>
              <input [(ngModel)]="cSelectAnimal.dislikes" class="form-control">
            </div>
          </div>
          <div class="col-md-4">
            <div class="form-group">
              <label>URL of image:</label>
                <input [(ngModel)]="cSelectAnimal.imageUrl" class = "form-control">
            </div>
          </div>
        </div>
        <button (click)="doneButtonClicked()" class="btn btn-default pull-right">Submit Changes</button>
        <button (click)="doneButtonClicked()" class="btn btn-default">Cancel</button>
      </div>
    </div>
  `

})

export class AnimalEditComponent{
  @Input() cSelectAnimal: Animal;
  @Output() doneButtonClickedSender = new EventEmitter();

  doneButtonClicked() {
    this.doneButtonClickedSender.emit();
  }
}
