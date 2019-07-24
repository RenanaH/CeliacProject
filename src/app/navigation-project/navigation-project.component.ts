import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ContactUsComponent } from '../contact-us/contact-us.component';

@Component({
  selector: 'app-navigation-project',
  templateUrl: './navigation-project.component.html',
  styleUrls: ['./navigation-project.component.scss']
})
export class NavigationProjectComponent implements OnInit {

  constructor(private dialog: MatDialog) { }


  ngOnInit() {
  }
open_contact_us_dialog()
{
  this.dialog.open(ContactUsComponent);
}
}
