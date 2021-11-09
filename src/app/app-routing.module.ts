import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutDlcComponent } from './component/about-dlc/about-dlc.component';
import { FooterComponent } from './component/footer/footer.component';
import { GalleryComponent } from './component/gallery/gallery.component';
import { HeaderComponent } from './component/header/header.component';
import { HomeComponent } from './component/home/home.component';
import { OurWorldsComponent } from './component/our-worlds/our-worlds.component';
import { PressComponent } from './component/press/press.component';



const routes: Routes = [
  { path: 'header', component: HeaderComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about-dlc', component: AboutDlcComponent },
  { path: 'our-worlds', component: OurWorldsComponent },
  {path: 'gallery', component: GalleryComponent},
  {path: 'press' , component: PressComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
