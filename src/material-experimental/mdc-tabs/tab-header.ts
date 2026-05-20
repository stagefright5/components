/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  ContentChildren,
  ViewChild,
  ElementRef,
  QueryList,
  AfterContentInit,
  Optional,
  ChangeDetectorRef,
  NgZone,
  Inject,
} from '@angular/core';
import {_MatTabHeaderBase} from '@stagefright5/material/tabs';
import {ViewportRuler} from '@stagefright5/cdk/scrolling';
import {Platform} from '@stagefright5/cdk/platform';
import {Directionality} from '@stagefright5/cdk/bidi';
import {ANIMATION_MODULE_TYPE} from '@angular/platform-browser/animations';
import {MatTabLabelWrapper} from './tab-label-wrapper';
import {MatInkBar} from './ink-bar';

/**
 * The header of the tab group which displays a list of all the tabs in the tab group. Includes
 * an ink bar that follows the currently selected tab. When the tabs list's width exceeds the
 * width of the header container, then arrows will be displayed to allow the user to scroll
 * left and right across the header.
 * @docs-private
 */
@Component({
  standalone: false,
  selector: 'mat-tab-header',
  templateUrl: 'tab-header.html',
  styleUrls: ['tab-header.scss'],
  inputs: ['selectedIndex'],
  outputs: ['selectFocusedIndex', 'indexFocused'],
  encapsulation: ViewEncapsulation.None,
  // tslint:disable-next-line:validate-decorators
  changeDetection: ChangeDetectionStrategy.Default,
  host: {
    'class': 'mat-mdc-tab-header',
    '[class.mat-mdc-tab-header-pagination-controls-enabled]': '_showPaginationControls',
    '[class.mat-mdc-tab-header-rtl]': "_getLayoutDirection() == 'rtl'",
  },
})
export class MatTabHeader extends _MatTabHeaderBase implements AfterContentInit {
  @ContentChildren(MatTabLabelWrapper, {descendants: false}) _items: QueryList<MatTabLabelWrapper>;
  @ViewChild('tabListContainer', {static: true}) _tabListContainer: ElementRef;
  @ViewChild('tabList', {static: true}) _tabList: ElementRef;
  @ViewChild('tabListInner', {static: true}) _tabListInner: ElementRef;
  @ViewChild('nextPaginator') _nextPaginator: ElementRef<HTMLElement>;
  @ViewChild('previousPaginator') _previousPaginator: ElementRef<HTMLElement>;
  _inkBar: MatInkBar;

  constructor(
    elementRef: ElementRef,
    changeDetectorRef: ChangeDetectorRef,
    viewportRuler: ViewportRuler,
    @Optional() dir: Directionality,
    ngZone: NgZone,
    platform: Platform,
    @Optional() @Inject(ANIMATION_MODULE_TYPE) animationMode?: string,
  ) {
    super(elementRef, changeDetectorRef, viewportRuler, dir, ngZone, platform, animationMode);
  }

  override ngAfterContentInit() {
    this._inkBar = new MatInkBar(this._items);
    super.ngAfterContentInit();
  }
}
