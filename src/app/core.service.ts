import { Injectable, Inject } from '@angular/core';
import { Http, Headers, Response, RequestOptionsArgs } from '@angular/http';
import { APP_CONFIG, IAppConfig } from './app.config';

@Injectable()
export class CoreService {

  constructor(
    private http: Http,

    @Inject(APP_CONFIG) private config: IAppConfig) {};

  private apiEndpoint: any = this.config.apiEndpoint;
  private apiDir: any = this.config.apiDir;
  private getToken = "token";
  /* Perform all HTTP POST Request */
  doPost(uri: any, body: any): Promise<any>{
    let headers = new Headers({ 'Authorization': 'Bearer ' + this.getToken });
    let options: RequestOptionsArgs = { headers: headers, withCredentials: false }
    return new Promise((resolve, reject) => {
      this.http.post(this.apiEndpoint + this.apiDir + uri, body, options).toPromise()
      .then(res => { 
        resolve(res.json());
      }, err => {
        reject(err.statusText || "Can't reach server.");
      }).catch(rsn => {
        reject(rsn.statusText || "Can't reach server.");
      });
    }); 
  }

  quickGet(uri: any): Promise<any>{
    let headers = new Headers();
    let options: RequestOptionsArgs = { headers: headers, withCredentials: false }

    return new Promise((resolve, reject) => {
      this.http.get(this.apiEndpoint + this.apiDir + uri, options).toPromise()
      .then(res => {
        resolve(res.json());
      }, err => {
        reject(err.statusText || "Can't reach server.");
      }).catch(rsn => {
        reject(rsn.statusText || "Can't reach server.");
      });
    }); 
  }
  
  findUser(uri:any): Promise<any> {
    return new Promise((resolve, reject) => {
      this.quickGet(uri).then(r => {
        if (r) {
          resolve(r);
        }else{ reject(r); }
      }).catch(e => {
        reject(e);
      });
    });
  }

  };