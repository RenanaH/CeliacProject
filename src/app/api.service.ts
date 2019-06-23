import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Payment } from './payment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
////test
  public firstPage: string = "";
public prevPage: string = "";
public nextPage: string = "";
public lastPage: string = "";
////
  apiURL: string = 'http://www.server.com/api/';////change

  constructor(private httpClient: HttpClient) { }
  public createPayment(payment: Payment){}

public updatePayment(payment: Payment){}

public deletePayment(id: number){}

public getPaymentById(id: number){
  return this.httpClient.get(`${this.apiURL}/payments/${id}`);

}

public getPayments(url?: string){}

//test
// public getContacts(url?: string){

//   if(url){
//     return this.httpClient.get<Payment[]>(url,{ observe: 'response' }).pipe(tap(res => {
//       this.retrieve_pagination_links(res);
//     }));
//   }

//   return this.httpClient.get<Payment[]>(`${this.apiURL}/customers?page=1`,
//   { observe: 'response' }).pipe(tap(res => {
//     this.retrieve_pagination_links(res); 
//   }));
// }
parse_link_header(header) {
  if (header.length == 0) {
    return ;
  }

  let parts = header.split(',');
  var links = {};
  parts.forEach( p => {
    let section = p.split(';');
    var url = section[0].replace(/<(.*)>/, '$1').trim();
    var name = section[1].replace(/rel="(.*)"/, '$1').trim();
    links[name] = url;

  }); 
  return links;
}
public retrieve_pagination_links(response){
  const linkHeader = this.parse_link_header(response.headers.get('Link'));
  this.firstPage = linkHeader["first"];
  this.lastPage =  linkHeader["last"];
  this.prevPage =  linkHeader["prev"];
  this.nextPage =  linkHeader["next"];
}
}
