import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation:ViewEncapsulation.None,
})
export class AppComponent {
  title = 'myProject';

  public windowState = 'default';
    public opened: boolean = true;

    public openClose(isOpened: boolean) {
      this.opened = isOpened;
    }
}
