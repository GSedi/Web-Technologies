import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { NavbarComponent } from './navbar/navbar.component';

// import { AlertModule } from 'ngx-bootstrap';

// import { ImageService } from './rent/image.service';
// import { ImageFilterPipe } from './rent/filter.pipe';

// import { GalleryComponent } from './rent/gallery/gallery.component';
// import { CarImageComponent } from './rent/car-image/car-image.component';

@NgModule({
  declarations: [
    AppComponent,
    // NavbarComponent,
    // GalleryComponent,
    // CarImageComponent
    // ImageFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // FormsModule, 
    // AlertModule.forRoot()

  ],
  providers: [
    //ImageService,
    //ImageFilterPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
