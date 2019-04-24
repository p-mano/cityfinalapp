import { Component } from '@angular/core';
import {Location} from '@angular/common';
import {Router} from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  constructor(private router:Router,private location:Location){}

  ngOninit(){
  }
  goback(){
    this.location.back();
  }
}
