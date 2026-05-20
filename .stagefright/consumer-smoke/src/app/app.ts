import {Component, TemplateRef, ViewChild} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {OverlayModule} from '@stagefright5/cdk/overlay';
import {ScrollingModule} from '@stagefright5/cdk/scrolling';
import {GoogleMapsModule} from '@stagefright5/google-maps';
import {MatButtonModule} from '@stagefright5/material/button';
import {MatCheckboxModule} from '@stagefright5/material/checkbox';
import {MatDatepickerModule} from '@stagefright5/material/datepicker';
import {MatDialog, MatDialogModule} from '@stagefright5/material/dialog';
import {MatFormFieldModule} from '@stagefright5/material/form-field';
import {MatInputModule} from '@stagefright5/material/input';
import {MatMomentDateModule} from '@stagefright5/material-moment-adapter';
import {MatLuxonDateModule} from '@stagefright5/material-luxon-adapter';
import {MatDateFnsModule} from '@stagefright5/material-date-fns-adapter';
import {MatTableModule} from '@stagefright5/material/table';
import {YouTubePlayerModule} from '@stagefright5/youtube-player';

@Component({
  selector: 'app-root',
  imports: [
    ReactiveFormsModule,
    OverlayModule,
    ScrollingModule,
    GoogleMapsModule,
    YouTubePlayerModule,
    MatButtonModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatMomentDateModule,
    MatLuxonDateModule,
    MatDateFnsModule,
    MatTableModule,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  @ViewChild('dialogTemplate') private _dialogTemplate!: TemplateRef<unknown>;

  readonly date = new FormControl(new Date());
  readonly columns = ['name', 'value'];
  readonly rows = [
    {name: 'button', value: 'material'},
    {name: 'overlay', value: 'cdk'},
  ];
  readonly center = {lat: 37.4219999, lng: -122.0840575};
  readonly items = Array.from({length: 20}, (_, index) => `row ${index + 1}`);

  constructor(private readonly _dialog: MatDialog) {}

  openDialog() {
    this._dialog.open(this._dialogTemplate);
  }
}
