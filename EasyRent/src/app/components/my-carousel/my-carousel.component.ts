import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-my-carousel',
  templateUrl: './my-carousel.component.html',
  styleUrls: ['./my-carousel.component.scss']
})
export class MyCarouselComponent implements OnInit {
  
  cars: Object;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getCars().then(data => {
      this.cars = data;
    })
  }

}
