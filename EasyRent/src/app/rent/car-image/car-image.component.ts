import { Component, OnInit } from '@angular/core';
import { ImageService } from '../image.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-car-image',
  templateUrl: './car-image.component.html',
  styleUrls: ['./car-image.component.scss']
})
export class CarImageComponent implements OnInit {
  image:any
  
  constructor(private imageService: ImageService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.image = this.imageService.getImage(
      +this.route.snapshot.params['id']
    )
  }
}
