import {Component} from '@angular/core';

@Component({
  standalone: false,
  selector: 'test-cmp',
  templateUrl: '/projects/material/test.html',
})
export class MyTestComp {}

@Component({
  standalone: false,
  selector: 'test-cmp2',
  templateUrl: '../some-tmpl.html',
})
export class MyTestComp2 {}

@Component({
  standalone: false,
  selector: 'test-cmp3',
  templateUrl: 'local.html',
})
export class MyTestComp3 {}
