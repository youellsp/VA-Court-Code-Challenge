import { Injectable } from '@angular/core';
import {Name} from "../model/name.model";

@Injectable()
export class NameService {
  names: Name[] = [];
  duplicates: Name[] = [];

  constructor() { }

  // Create/Post
  addName(name: Name): NameService {
    if (!name.id) {
      let uniqueId = Math.floor((Math.random()*1000000)+1);
      name.id = uniqueId;
      console.log(name.id)
    }

    let strippedName = name.nameInput.replace(/ /g,'');
    let commaIndex = strippedName.indexOf(',');
    let semiColonIndex = strippedName.indexOf(';');

    if(commaIndex > 0){
      name.lastName = strippedName.substr(0, commaIndex);

      if(semiColonIndex > 0){
        name.firstName = strippedName.substr(commaIndex + 1, (semiColonIndex-(commaIndex+1)));
        name.suffix = strippedName.substr(semiColonIndex + 1, strippedName.length);
      }else{
        name.firstName = strippedName.substr(commaIndex + 1, strippedName.length);
        name.suffix = "";
      }

    }

    this.names.push(name);
    return this;
  }

  // Read/Get
  getAllNames(): Name[] {
    return this.names;
  }

  // Delete
  deleteNameById(id: number): NameService {
    this.names = this.names
      .filter(name => name.id !== id);
    return this;

  }

  // Return an array of all duplicate names
  getAllDuplicates(): Name[] {

    let uniques: Name[] = [];
    this.duplicates = [];

    this.names.forEach(name =>{
      if(uniques.findIndex(function (element) {
          return element.lastName.toUpperCase() === name.lastName.toUpperCase() &&
            element.firstName.toUpperCase() === name.firstName.toUpperCase() &&
            element.suffix.toUpperCase() === name.suffix.toUpperCase()
        }) > -1){
        if(this.duplicates.findIndex(function (element) {
          return element.lastName.toUpperCase() === name.lastName.toUpperCase() &&
            element.firstName.toUpperCase() === name.firstName.toUpperCase() &&
            element.suffix.toUpperCase() === name.suffix.toUpperCase()
        }) == -1){
          this.duplicates.push(name);
        }
      }else{
        uniques.push(name);
      }
    });



    return this.duplicates;
  }


}
