import {Component, Input, Output, EventEmitter} from '@angular/core';
import  {Animal} from './animal.model';

@Component({
  selector: 'animal-new',
  template: `
    <button  class="btn btn-danger" (click)="newButtonClicked()">Add New Dinosaur</button>
    <div *ngIf="addNewAnimal">
      <div class="well">
        <h3>Add New Dinosaur</h3>
        <div class="row">
          <div class="col-md-6">
            <div class="form-group">
              <input #newSpecies placeholder="Species" class="form-control">
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-group">
              <input #newName placeholder="Name" class="form-control">
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4">
            <div class="form-group">
              <label>Date of Birth:</label>
                <input #newDOB type ="date" class="form-control">
            </div>
          </div>
          <div class="col-md-4">
            <div class="form-group">
              <label>Age option</label>
              <select #newAgeoption  class="form-control">
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
              <select #newSex  class="form-control">
                <option value="M">Male</option>
                <option value="F" >Female</option>
                <option value="N/A">N/A</option>
              </select>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4">
            <div class="form-group">
              <label>Location:</label>
              <select #newLocation  class="form-control">
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
              <select #newDiet  class="form-control">
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
              <input #newCaregivers class="form-control" type="number">
            </div>
          </div>
          <div class="col-md-4">
            <div class="form-group">
              <label>URL of image:</label>
                <input #newImageUrl class="form-control">
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6">
            <div class="form-group">
              <input placeholder="Likes" #newLikes class="form-control">
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-group">
              <input placeholder="Dislikes" #newDislikes class="form-control">
            </div>
          </div>
        </div>
        <button class="btn btn-danger" (click)="submitForm(newSpecies.value, newName.value, newDOB.value, newAgeoption.value, newDiet.value, newLocation.value, newCaregivers.value, newImageUrl.value, newSex.value, newLikes.value, newDislikes.value);addNewAnimal=false; doneAdd();">Add</button>
        <button (click)="addNewAnimal=false; doneAdd();" class="btn btn-warning">Cancel</button>
      </div>
    </div>
  `
})
export class AnimalNewComponent{
  @Input() addNewAnimal: boolean;
  @Output() newAnimalSender = new EventEmitter();
  @Output() doneAddingSender = new EventEmitter();

  doneAdd() {
    this.doneAddingSender.emit();
  }
    submitForm(species: string, name: string, dob: string, ageOption: string, diet: string, location: string, caregivers: string, sex: string, likes: string, dislikes: string){
      var newAnimalToAdd: Animal = new Animal (species, name, dob, ageOption, diet, location, parseInt(caregivers), sex, likes, dislikes);
      this.newAnimalSender.emit(newAnimalToAdd);
    }
    newButtonClicked() {
      this.addNewAnimal = true;
    }
}
