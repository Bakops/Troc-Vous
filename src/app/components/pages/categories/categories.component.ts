import { Component } from '@angular/core';
import { FooterComponent } from '../../layout/footer/footer.component';
import { HeaderComponent } from '../../layout/header/header.component';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css',
})
export class CategoriesComponent {}
