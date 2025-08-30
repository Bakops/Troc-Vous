import { Component } from '@angular/core';
import { FooterComponent } from '../../layout/footer/footer.component';
import { HeaderComponent } from '../../layout/header/header.component';

@Component({
  selector: 'app-politique',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './politique.component.html',
  styleUrl: './politique.component.css',
})
export class PolitiqueComponent {}
