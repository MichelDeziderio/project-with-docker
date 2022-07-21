import {Component} from '@angular/core';
import {MatSnackBar, MatSnackBarConfig} from '@angular/material/snack-bar';

/**
 * @title Testing with MatSnackBarHarness
 */
@Component({
  selector: 'toast-alert.component',
  templateUrl: 'toast-alert.component.html',
})
export class ToastAlertComponent {
  constructor(readonly snackBar: MatSnackBar) {}

  open(message: string, action = '', config?: MatSnackBarConfig) {
    return this.snackBar.open(message, action, config);
  }
}