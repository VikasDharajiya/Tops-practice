import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DialogService {
  private dialogTrigger = new Subject<void>();
  dialogTrigger$ = this.dialogTrigger.asObservable();

  openDialog() {
    this.dialogTrigger.next();
  }
}
