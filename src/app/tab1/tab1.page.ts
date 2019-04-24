import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import MovieService from '../movie.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  constructor(private router: Router, private location: Location, private movieService: MovieService) {
    this.slideData = [
    { image: "../../assets/b1.jpg" },
    { image: "../../assets/b2.png" },
    { image: "../../assets/b3.jpg" }];
  }
  goback() {
    this.location.back();
  }
  slideData: any = [];
  movie_date = '';
  movies = this.movieService.getMovies();


  ngOnInit() {
    this.movieService.getRemoteMovies().subscribe((result) => { this.movies = result; });
  }
  onselect(movie) {
    this.router.navigate(['/booking' + movie.id])
  }
  doLogin() {
    // if(this.data.username == this.data.password){
    this.router.navigate(['/payment']);
  }

  navigateToBooking(id) {
    this.router.navigate(['booking/' + id]);
  }
  deleteAll() {
    localStorage.clear();
    this.movies = [];
  }
  navigateToLogin() {
    this.router.navigate(['/login']);
  }

  deleteMovie(movie) {
    this.movieService.deleteRemoteMovie(movie).subscribe((e) => {
      this.movieService.getRemoteMovies().subscribe((result) => { this.movies = result; });
    });
    // this.list = this.customerService.getCustomers();
  }
  slidesDidLoad(myslides) {
    myslides.startAutoplay();
    }
    slidesDidLoad1(mslides) {
    mslides.startAutoplay();
    }
}
