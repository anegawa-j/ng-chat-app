import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

export interface TalkApiModel {
apikey: string;
callback: string;
query: string;
}

const BASE_URI = '/chatapi/';

@Injectable({
  providedIn: 'root'
})
export class CommonService {


  constructor(private http: HttpClient) { }

   callTalkApi(talkText: string): Observable<any> {
     const url = BASE_URI + 'call';
     const requestBody: TalkApiModel = {
       apikey: '**',
       callback: '',
       query: talkText
     };

     return this.http.post(url, requestBody);
}



}
