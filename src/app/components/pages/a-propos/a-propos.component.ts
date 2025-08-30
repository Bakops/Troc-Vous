import { Component } from '@angular/core';
import { FooterComponent } from '../../layout/footer/footer.component';
import { HeaderComponent } from '../../layout/header/header.component';

@Component({
  selector: 'app-a-propos',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './a-propos.component.html',
  styleUrl: './a-propos.component.css',
})
export class AProposComponent {}
