import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, forkJoin, of, reduce, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FileUploadService {
  baseApiUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  uploadXML(file: File): Observable<string> {
    const formData = new FormData();
    formData.append('multipartFiles', file);
    const url = `${this.baseApiUrl}/upload`;

    return this.http.post(url, formData, { responseType: 'text' });
  }

  uploadFile(files: File[]): Observable<Array<string>> {
    const texto: Array<string> = [];

    return of(files).pipe(
      switchMap((last) => {
        const obs = last.map((x) => {
          return this.uploadXML(x);
        });
        return forkJoin(obs);
      })
    );
  }
}
