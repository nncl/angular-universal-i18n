import { Inject, Injectable, LOCALE_ID } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(@Inject(LOCALE_ID) public locale: string,
              private http: HttpClient) {
  }

  get(): Observable<any> {
    return this.http.get(
      `https://dev-core.hsanches.com/api/posts`,
      {
        params: {
          lang: this.locale === 'pt' ? 'pt_br' : 'eng'
        }
      }
    )
  }
}
