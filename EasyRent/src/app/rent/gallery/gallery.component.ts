import { Component, OnInit, OnChanges, Input} from '@angular/core';
import { ImageService } from '../image.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})

export class GalleryComponent implements OnInit {
  visibleImages: any[] = [];

  @Input() filterBy?: string = 'all'

  constructor(private imageService: ImageService) { 
    this.visibleImages=this.imageService.getImages();
  }

  ngOnInit() {
  }

  ngOnChanges(){
    this.visibleImages = this.imageService.getImages();
  }
}
