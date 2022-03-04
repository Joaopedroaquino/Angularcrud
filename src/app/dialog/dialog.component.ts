import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent implements OnInit {
  permissionsList = ['Usuario', 'Administrador', 'Dev'];
  userForm!: FormGroup;

  constructor(private formBuilder: FormBuilder ) {}
  

  ngOnInit(): void {
     this.userForm = this.formBuilder.group({
    userName : ['',Validators.required],
    permission : ['', Validators.required],
    permissionsList :['',Validators.required],
    date: [ '',Validators.required]


  })
}
 
}
