declare var RazorpayCheckout:any;
import { Component, OnInit } from '@angular/core';
import   BookingService  from "../booking.service";
import { Router } from '@angular/router';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss'],
})
export class BookingComponent implements OnInit {

  constructor(private router: Router,private BookingService:BookingService,private location:Location,private route:ActivatedRoute ) { }
  movie:any;
  private sub:any;
  id:number;
  data={
    tickets:0
  }
  movies={
    customer_id:0,
    tickets:0,
    movie_id:0,
    movie_name:'',
    movie_time:'',
    theatre:'',
    screen:'',
    city:'',
    movie_date:'',
    date:'',
    amount:0,
    ticket_price:0
  };
  ngOnInit() {
    this.movie = {
      name:'',
      year:'',
      image_url:'',
      production_house:'',
      rating:'',
      type:'',
      language:'',
      date:''
    }
    this.sub = this.route.params.subscribe(params => {
    this.id = +params['id']; // (+) converts string 'id' to a number
       console.log("id is "+this.id);
       this.BookingService.getMovieById(this.id).subscribe((movie)=>{
         this.movie=movie;
         console.log(this.movie);
       })
    });
  }
  amount=this.data.tickets*50
  addBooking(movie, t){
    console.log(movie,t);
    this.movies={
      customer_id:3,
      tickets:t,
      movie_id:movie.id,
      movie_name:movie.name,
      movie_time:'12:50',
      theatre:'Cinepolis Meenakshi Mall',
      screen:'Screen 2',
      city:'Bangalore',
      movie_date:'2019-05-07',
      date:'2019-03-27',
      amount:this.amount,
      ticket_price:50
    }
    console.log('data sent====>',this.addBooking)
    this.router.navigate(['/payment']);
    this.BookingService.addRemoteBooking(this.movies).subscribe((e)=>{console.log(JSON.stringify(e));
      
    });
    
    // var options = {
    //   description: 'Credits towards consultation',
    //   image: 'http://www.techprocess.co.in/images/paynimo-thumb.png',
    //   currency: 'INR',
    //   key: 'rzp_test_ZIpia1muENjWvU',
    //   // order_id: 'order_7HtFNLS98dSj8x',
    //   amount: '500000',
    //   name: 'Payment',
    //   prefill: {
    //     email: 'akshatha@gmail.com',
    //     contact: '8879524924',
    //     name: 'Akshatha'
    //   },
    //   theme: {
    //     color: '#F37254'
    //   }
    // }
    
    // var successCallback = function(success) {
    //   alert('payment_id: ' + success.razorpay_payment_id)
    //   var orderId = success.razorpay_order_id
    //   var signature = success.razorpay_signature
    // }
    
    // var cancelCallback = function(error) {
    //   alert(error.description + ' (Error '+error.code+')')
    // }
    
    // RazorpayCheckout.on('payment.success', successCallback)
    // RazorpayCheckout.on('payment.cancel', cancelCallback)
    // RazorpayCheckout.open(options)
  }

  goback(){
    this.router.navigate(['/tabs/tab1']);
  }

}
