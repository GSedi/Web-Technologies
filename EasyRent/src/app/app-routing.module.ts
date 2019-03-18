import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { GalleryComponent } from './rent/gallery/gallery.component';
// import { CarImageComponent } from './rent/car-image/car-image.component';

const routes: Routes = [
  // { path: '', redirectTo:'/gallery', pathMatch: 'full'},
  // { path: 'gallery', component: GalleryComponent},
  // { path: 'image/:id', component: CarImageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
