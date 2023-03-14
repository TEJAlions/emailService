import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { InviteEmailComponent } from './invite-email/invite-email.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public dialog: MatDialog) {}

  invite() {
    const dialogRef = this.dialog.open(InviteEmailComponent,{
      width:'80%',
      height:'80%'
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  } 
}
