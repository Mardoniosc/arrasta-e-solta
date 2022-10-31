import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  file: {
    lastModified: number;
    lastModifiedDate: Object;
    name: string;
    size: number;
    type: string;
    webkitRelativePath: string;
  } | undefined;

  title = 'arrastar-e-soltar';

  icon = '../assets/down.png';

  onFilesAdded(event: any): void {
    if (event.target.files && event.target.files[0]) {
      this.file = event.target.files[0];
      console.log(this.file);
      console.log(event.target.files[0]);
      return;
    }
  }
}
