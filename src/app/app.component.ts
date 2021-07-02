import { Component, Inject, LOCALE_ID } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-universal-i18n';
  currentLocale = '';

  constructor(
    @Inject(LOCALE_ID) public locale: string
  ) {
    this.currentLocale = locale;
  }
}
