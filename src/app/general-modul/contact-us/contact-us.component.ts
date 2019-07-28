import { Component, OnInit, HostListener } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ConnectionService } from '../../connection.service';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
  //submitted = false;

  //onSubmit() { this.submitted = true; }
  contactForm: FormGroup;
  disabledSubmitButton: boolean = true;
  optionsSelect: Array<any>;
  sending = false;
    @HostListener('input') oninput() {

      if (this.contactForm.valid) {
        this.disabledSubmitButton = false;
      }
    }

    constructor(private fb: FormBuilder, private connectionService: ConnectionService, private dialogRef: MatDialogRef<ContactUsComponent>) {

      this.contactForm = fb.group({
        'contactFormName': ['', Validators.required],
        'contactFormEmail': ['', Validators.compose([Validators.required, Validators.email])],
       // 'contactFormSubjects': ['', Validators.required],
        'contactFormMessage': ['', Validators.required],
       // 'contactFormCopy': [''],
        });
      }

  ngOnInit() {
    this.optionsSelect = [
      { value: 'Feedback', label: 'Feedback' },
      { value: 'Report a bug', label: 'Report a bug' },
      { value: 'Feature request', label: 'Feature request' },
      { value: 'Other stuff', label: 'Other stuff' },
      ];
    }

    onSubmit() {
      this.connectionService.sendMessage(this.contactForm.value).subscribe(() => {
        alert('Your message has been sent.');
        this.contactForm.reset();
        this.disabledSubmitButton = true;
      }, error => {
        console.log('Error', error);
      });
      //window.open('mailto:renanashuv@gmail.com');
      // this.close();
      this.sending = true;
    }

    close()
    {
      this.dialogRef.close();
    }
  }
