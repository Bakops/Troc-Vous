import { Component } from '@angular/core';
import { CardAppComponent } from '../../layout/card-app/card-app.component';
import { FooterComponent } from '../../layout/footer/footer.component';
import { HeaderComponent } from '../../layout/header/header.component';
import { HeroHeaderComponent } from '../../layout/hero-header/hero-header.component';
import { SliderComponent } from '../../layout/slider/slider.component';
@Component({
  selector: 'app-accueil',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    HeroHeaderComponent,
    SliderComponent,
    CardAppComponent,
  ],
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.css',
})
export class AccueilComponent {}
