import { Component } from '@angular/core';
import { ApiService } from './api.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'hjh';
  constructor(private apiService: ApiService){}

  ngOnInit(){
    this.apiService.getContacts().subscribe((res)=>{
      this.apiService.getContacts(this.apiService.nextPage).subscribe((res)=>{
        console.log(res.body);
      });      
    });
  }
}
