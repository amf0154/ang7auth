import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable()
export class RequestService {

  constructor(protected http: HttpClient) {}

  async get<T>(link: string, params: any): Promise<T> {
    try {
      return await this.http.get<T>(environment.api + '/api' + link,{params: params}).toPromise();
    } catch (error) {
      return error;
    }
  }

  async post(link: string, body: object, params: any): Promise<any> {
    try {
      return await this.http.post<any>(environment.api + '/api' + link, body, {params}).toPromise();
    } catch (error) {
      return error;
    }
  }

  async put(link: string, body: object, params: any) {
    try {
      return await this.http.put<any>(environment.api + '/api' + link, body,{params: params}).toPromise();
    } catch (error) {
      return error;
    }
  }

  async delete(link: string) {
    try{
      return await this.http.delete<any>(environment.api + '/api' + link).toPromise();
    } catch (error) {
      return error;
    }
  }

}
