import { Component } from '@angular/core';
declare let $
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'simtuitive';
  constructor() {
    $(window).on('popstate', function () {
      $(".modal").modal('hide');
    });
  }
}
