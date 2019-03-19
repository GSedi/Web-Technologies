import { Component, OnInit, OnChanges, Input} from '@angular/core';
import { DataService } from '../../data.service';
import { ImageService } from '../image.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'] 
})

export class GalleryComponent implements OnInit {
  visibleImages: any[] = [];

  @Input() filterBy?: string = 'all'

  cars: Object;

  constructor(
    private imageService: ImageService,
    private data: DataService
    ) { 
    this.visibleImages=this.imageService.getImages();
  }

  ngOnInit() {
    this.data.getCars().then(data => {
      this.cars = data;
    })
  }

  ngOnChanges(){
    this.visibleImages = this.imageService.getImages();
  }
}
