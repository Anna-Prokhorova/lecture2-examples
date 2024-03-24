import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of, tap } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class BuildingService {
  private httpClient: HttpClient = inject(HttpClient);

  public get user(): User | null {
    const token = localStorage.getItem('user_token');
    if (token) {
      const user: any = this.parseJwt(token);
      return user;
    }
    return null;
  }

  public get token(): string | null {
    const token = localStorage.getItem('user_token');
    return token;
  }

  public login(key: string): Observable<User | null> {
    return this.httpClient.get<{ token: string }>(`assets/${key}.json`).pipe(
      tap((res: { token: string }) =>
        localStorage.setItem('user_token', res.token)
      ),
      map((res: { token: string }): User => this.parseJwt(res.token)),
      catchError((): Observable<null> => {
        localStorage.removeItem('user_token');
        alert('НЕ ПУЩУ!');
        return of(null);
      })
    );
  }

  private parseJwt(token: string): User {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(
      window
        .atob(base64)
        .split('')
        .map(function (c) {
          return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join('')
    );
    return JSON.parse(jsonPayload);
  }
}
