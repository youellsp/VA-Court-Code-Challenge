import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from "@angular/forms";
import { Name } from "../../model/name.model";
import { NameService } from "../../service/name.service";
const NAME_REGEX = /^[a-zA-Z ]+,[ ]*[a-zA-Z]+[a-zA-Z ]*([;][a-zA-Z ]+)?$/;

@Component({
  selector: 'app-challenge-two',
  templateUrl: './challenge-two.component.html',
  styleUrls: ['./challenge-two.component.css', './challenge-two-custom-theme.scss']
})
export class ChallengeTwoComponent implements OnInit {
  newNameInput: Name = new Name();
  startId: number = 2200;

  constructor(private nameService: NameService) { }

  ngOnInit() {

  }

  get names(){
    return this.nameService.getAllNames();
  }

  get duplicates(){
    return this.nameService.getAllDuplicates();
  }

  deleteName(id){
    return this.nameService.deleteNameById(id);
  }

  addName(name){
    this.nameService.addName(this.newNameInput);
    this.newNameInput = new Name();
    this.nameFormControl.markAsPristine();
    this.nameFormControl.markAsUntouched();
  }

  name = "";
  nameFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern(NAME_REGEX)]);

}
