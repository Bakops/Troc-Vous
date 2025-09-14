import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-card-app',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-app.component.html',
  styleUrl: './card-app.component.css',
})
export class CardAppComponent {
  isVisible: boolean = true;

  closeCard() {
    this.isVisible = false;
  }

  acceptCookies() {
    console.log('Cookies acceptés !');
    this.closeCard();
  }

  refuseCookies() {
    console.log('Cookies refusés !');
    this.closeCard();
  }
}
