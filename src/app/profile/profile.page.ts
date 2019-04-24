import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-profile',
  templateUrl: 'profile.page.html',
  styleUrls: ['profile.page.scss'],
})
export class ProfilePage implements OnInit {

  constructor(private router:Router,private location:Location) { }

  ngOnInit() {
  }
  onLogout(){
    this.router.navigate(['/login'])
  }
  goback(){
    this.location.back();
  }
}
