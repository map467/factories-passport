import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


import { Factory } from './factory.model';



@Injectable(
  // providedIn: 'root'
)
export class FactoryService {

  factories: Factory[];
  // private socket;
  // private url = 'http://localhost:3000';

  // readonly baseURL = 'http://localhost:3000/factories';
  readonly baseURL = 'https://factories-passport.herokuapp.com/factories';
  constructor(private http: HttpClient) { 

  }

  postFactory(fac : Factory){
    
    return this.http.post(this.baseURL, fac);
  }

  getFactoryList() {
    return this.http.get(this.baseURL);
  }

  putFactory(fac: Factory) {
    return this.http.put(this.baseURL + `/${fac._id}`, fac);
  }

  deleteFactory(_id: string){
    return this.http.delete(this.baseURL + `/${_id}`);
  }

}
