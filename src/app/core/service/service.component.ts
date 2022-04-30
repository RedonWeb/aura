import { Component, OnInit } from '@angular/core';

export interface Service{
  img: string;
  service: string;
  serviceDescription: string;
}

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {

  Services: Service[] = [
    {img: '/assets/img/s3.jpg', service: 'Fine Dining', serviceDescription: 'Enhance your dining experience with the best food, best service, and perfect ambiance'},
    {img: '/assets/img/s2.jpg', service: 'Rooftop Bar', serviceDescription: 'Uniquely designed bar to have a beach experience while sitting on the rooftop and enjoying your drinks with the warmth of music filling in your ears'},
    {img: '/assets/img/s3.jpg', service: 'Banquet Hall', serviceDescription: 'We plan for you! Just that perfect experience is waiting for you with a spacious hall and exquisite food'},
    {img: '/assets/img/s2.jpg', service: 'Catering Service', serviceDescription: 'We cater to your needs! Book now for a smooth experience'},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
