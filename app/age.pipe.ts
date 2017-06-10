import {Pipe, PipeTransform} from '@angular/core';
import {Animal} from './animal.model';

@Pipe({
  name: "age",
  pure: false
})

export class animalAgePipe implements PipeTransform {
  transform(input: Animal[], animalAge1){
    var output: Animal[] = [];
    if(animalAge1 === "All") {
     for (var i = 0; i < input.length; i++) {
         output.push(input[i]);
       }
    return output;
  } else if (animalAge1 === "Young") {
    for (var i = 0; i < input.length; i++) {
      if (input[i].ageOption === "Young") {
        output.push(input[i]);
      }
    }
    return output;
  }  else if (animalAge1 === "Adult1") {
    for (var i = 0; i < input.length; i++) {
      if (input[i].ageOption === "Adult1") {
        output.push(input[i]);
      }
    }
    return output;
  } else if (animalAge1 === "Senior") {
     for (var i = 0; i < input.length; i++) {
       if (input[i].ageOption === "Senior") {
         output.push(input[i]);
       }
     }
     return output;
   }  else if (animalAge1 === "Unknown") {
     for (var i = 0; i < input.length; i++) {
       if (input[i].ageOption === "Unknown") {
         output.push(input[i]);
       }
     }
     return output;
   }
 }
}
