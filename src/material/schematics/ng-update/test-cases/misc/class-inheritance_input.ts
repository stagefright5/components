import {HostBinding} from '@angular/core';
import {MatFormFieldControl} from '@stagefright5/material/form-field';

class WithoutLabelProp extends MatFormFieldControl<any> {
}

class WithLabelProp extends MatFormFieldControl<any> {
  @HostBinding('class.floating')
  get shouldLabelFloat() {return true;}
}
