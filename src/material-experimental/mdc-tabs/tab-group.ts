/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChildren,
  ElementRef,
  Inject,
  Input,
  Optional,
  QueryList,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import {
  _MatTabGroupBase,
  MAT_TAB_GROUP,
  MAT_TABS_CONFIG,
  MatTabsConfig,
} from '@stagefright5/material/tabs';
import {ANIMATION_MODULE_TYPE} from '@angular/platform-browser/animations';
import {MatTab} from './tab';
import {MatTabHeader} from './tab-header';
import {BooleanInput, coerceBooleanProperty} from '@stagefright5/cdk/coercion';

/**
 * Material design tab-group component. Supports basic tab pairs (label + content) and includes
 * animated ink-bar, keyboard navigation, and screen reader.
 * See: https://material.io/design/components/tabs.html
 */
@Component({
  standalone: false,
  selector: 'mat-tab-group',
  exportAs: 'matTabGroup',
  templateUrl: 'tab-group.html',
  styleUrls: ['tab-group.scss'],
  encapsulation: ViewEncapsulation.None,
  // tslint:disable-next-line:validate-decorators
  changeDetection: ChangeDetectionStrategy.Default,
  inputs: ['color', 'disableRipple'],
  providers: [
    {
      provide: MAT_TAB_GROUP,
      useExisting: MatTabGroup,
    },
  ],
  host: {
    'class': 'mat-mdc-tab-group',
    '[class.mat-mdc-tab-group-dynamic-height]': 'dynamicHeight',
    '[class.mat-mdc-tab-group-inverted-header]': 'headerPosition === "below"',
  },
})
export class MatTabGroup extends _MatTabGroupBase {
  @ContentChildren(MatTab, {descendants: true}) _allTabs: QueryList<MatTab>;
  @ViewChild('tabBodyWrapper') _tabBodyWrapper: ElementRef;
  @ViewChild('tabHeader') _tabHeader: MatTabHeader;

  /** Whether the ink bar should fit its width to the size of the tab label content. */
  @Input()
  get fitInkBarToContent(): boolean {
    return this._fitInkBarToContent;
  }
  set fitInkBarToContent(v: BooleanInput) {
    this._fitInkBarToContent = coerceBooleanProperty(v);
    this._changeDetectorRef.markForCheck();
  }
  private _fitInkBarToContent = false;

  constructor(
    elementRef: ElementRef,
    changeDetectorRef: ChangeDetectorRef,
    @Inject(MAT_TABS_CONFIG) @Optional() defaultConfig?: MatTabsConfig,
    @Optional() @Inject(ANIMATION_MODULE_TYPE) animationMode?: string,
  ) {
    super(elementRef, changeDetectorRef, defaultConfig, animationMode);
    this.fitInkBarToContent =
      defaultConfig && defaultConfig.fitInkBarToContent != null
        ? defaultConfig.fitInkBarToContent
        : false;
  }
}
