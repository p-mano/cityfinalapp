import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import   BookingService  from "../booking.service";
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  constructor(private location: Location,private router: Router,private BookingService:BookingService) {}
  goback() {
    this.location.back();
  }
 bookings=[];
  ngOnInit() {
    var bookings={
        customer_id:'',
        tickets:'',
        movie_id:'',
        movie_name:'',
        movie_time:'',
        theatre:'',
        screen:'',
        city:'',
        movie_date:'',
        date:'',
        amount:'',
        ticket_price:''
    }
    this.BookingService.getRemoteBookings().subscribe((result) => { this.bookings = result; });
    }
    
  }

