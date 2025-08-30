import { Component } from '@angular/core';
import { FooterComponent } from '../../layout/footer/footer.component';
import { HeaderComponent } from '../../layout/header/header.component';

@Component({
  selector: 'app-comment-ca-marche',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './comment-ca-marche.component.html',
  styleUrl: './comment-ca-marche.component.css',
})
export class CommentCaMarcheComponent {}
