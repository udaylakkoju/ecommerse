import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'smytten-app';
  status = true;
  activeTab() {
    this.status = !this.status;
  }
}
