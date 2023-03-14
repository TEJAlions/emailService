import { Component } from '@angular/core';
import { MatChipInputEvent } from '@angular/material/chips';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MailList } from '../interface/mail';
@Component({
  selector: 'app-invite-email',
  templateUrl: './invite-email.component.html',
  styleUrls: ['./invite-email.component.scss']
})
export class InviteEmailComponent {
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  mailList: MailList[] = [];
  emailListform: FormGroup = new FormGroup({ // Form control group for email form
    subject: new FormControl('', [
      Validators.required,
      Validators.minLength(1),
      Validators.maxLength(120),
    ]),
    mailListvalue: new FormControl('',[
      Validators.required,
    ]),
  });

  // Function to add a chip 
  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();
    const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (value) {
      if (value.match(mailformat)) {
        this.mailList.push({ mailid: value, color: 'green' });
      } else {
        this.mailList.push({ mailid: value, color: 'red' });
      }
    }
    event.chipInput!.clear();
    if(this.mailList.length) {
      this.emailListform.setValue({mailListvalue:' '})
    }
  }

  // Function to remove chip
  remove(mailid: MailList): void {
    const index = this.mailList.indexOf(mailid);
    if (index >= 0) {
      this.mailList.splice(index, 1);
    }
    if(!this.mailList.length) {
      this.emailListform.setValue({mailListvalue:undefined})
    }
  }

  // Function triggers on click on send invitation button
  sendInvitation() {
    console.log(this.mailList)
  }
}
