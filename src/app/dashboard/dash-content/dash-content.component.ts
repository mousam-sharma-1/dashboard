import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { FormGroup, FormBuilder, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-dash-content',
  templateUrl: './dash-content.component.html',
  styleUrls: ['./dash-content.component.css']
})
export class DashContentComponent implements OnInit {
  myMatForm:FormGroup;
  MainArr=[]

  constructor(private _formBuilder: FormBuilder,private data: DataService) { }

  
  onSubmit(myform : NgForm) {
    console.log("form value :: ",this.myMatForm.value);
    // let oj = { name : this.myMatForm.value.name,number : this.myMatForm.value.number};
    // this.MainArr.push(this.myMatForm.value)
    console.log(this.MainArr)
    // this.newMessage()
  // this.myMatForm.reset();
  }

  delete(i:any){
    console.log(i)
    this.MainArr.splice(i,1);
  }

  update(i:any){
console.log("UP DATA : ",this.MainArr[i].name,this.MainArr[i].email)
this.myMatForm.setValue({name:this.MainArr[i].name,email:this.MainArr[i].email})
  }

  ngOnInit(): void {
    this.myMatForm= this._formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
    this.data.currentMessage.subscribe(message => this.MainArr = message)
  }

}
