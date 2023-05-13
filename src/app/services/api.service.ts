import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  postBook(data: any) {
    return this.http.post<any>('Http://localhost:3000/destinations', data).pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  getBook() {
    return this.http.get<any>('Http://localhost:3000/destinations').pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  updateBook(data: any, id: number) {
    return this.http
      .put<any>('Http://localhost:3000/destinations/' + id, data)
      .pipe(
        map((res: any) => {
          return res;
        })
      );
  }

  deleteBook(id: number) {
    return this.http
      .delete<any>('Http://localhost:3000/destinations/' + id)
      .pipe(
        map((res: any) => {
          return res;
        })
      );
  }
}
