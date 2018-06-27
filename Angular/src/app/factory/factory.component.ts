import { Component, OnInit } from '@angular/core';
import { NgForm, FormBuilder, FormGroup, Validators } from '@angular/forms';

import * as io from "socket.io-client";

// const io = require('socket.io-client');

import { FactoryService } from '../shared/factory.service'
import { Factory } from '../shared/factory.model';

declare var M: any;

@Component({
  selector: 'app-factory',
  templateUrl: './factory.component.html',
  styleUrls: ['./factory.component.css'],
  providers: [FactoryService]
})
export class FactoryComponent implements OnInit {

  private socket;
  // private url = 'http://localhost:3000/';
  private url = 'https://factories-passport.herokuapp.com/';
  rForm: FormGroup;

  
  _id:string = null;
  name:string = '';
  lower:number = null;
  upper:number = null;
  children:number = null;




  constructor(private factoryService: FactoryService, private fb: FormBuilder) { 

    this.rForm = fb.group({
      'name': [null, Validators.required],
      'lower': [null, Validators.required],
      'upper': [null, Validators.required],
      'children': [null, Validators.compose([Validators.required, Validators.min(1), Validators.max(15)])],
      '_id' :[null]
    }, {validator: this.boundValidator});

  }




  ngOnInit() {
    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.modal');
      var instances = M.Modal.init(elems, {dismissible : false});
    });

    this.socket = io(this.url);
    this.socket.on('update', () =>{
      this.refreshFactoryList();
    });

    this.resetForm();
  }

  resetForm(rForm?){
    if(rForm){
      rForm.reset();
      console.log("form reset");
    }
    this.name = null;
    this.lower = null;
    this.upper = null;
    this.children = null;
    this._id = null;

  }


  onSubmit(form){
    if (form.value._id == null){      
      this.factoryService.postFactory(form.value).subscribe((res) => {
        this.socket = io(this.url);
        this.socket.close();
        this.resetForm(form);
        this.refreshFactoryList();
      });


    }
    else{
      this.factoryService.putFactory(form.value).subscribe((res) => {
        this.socket = io(this.url);
        this.socket.close();
        this.resetForm(form);
        this.refreshFactoryList();

      });

    }
  
  }
  
  refreshFactoryList(){
    this.factoryService.getFactoryList().subscribe((res) => {
      this.factoryService.factories = res as Factory[];
    });
  }
  
  onEdit(fac : Factory){
    this._id = fac._id
    this.name = fac.name;
    this.lower = fac.lower;
    this.upper = fac.upper;
    this.children = 0;
    
  }

  onCancel(rForm){
    this.refreshFactoryList();   
    this.resetForm(rForm);
  }
  
  onDelete(_id: string){
    if (confirm('Are you sure you want to delete this factory?') == true){
      this.factoryService.deleteFactory(_id).subscribe((res) => {
        this.socket = io(this.url);
        this.socket.close();
        this.refreshFactoryList();
      });
    }
  }

  boundValidator(group: FormGroup) {
    if (group.get(['upper']).value < group.get(['lower']).value){
      return {notValid: true};
    }
    else{ return null};
  }

}
