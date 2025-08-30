import { Component } from '@angular/core';
import { FooterComponent } from '../../layout/footer/footer.component';
import { HeaderComponent } from '../../layout/header/header.component';

@Component({
  selector: 'app-mentions-legale',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './mentions-legale.component.html',
  styleUrl: './mentions-legale.component.css',
})
export class MentionsLegaleComponent {}
