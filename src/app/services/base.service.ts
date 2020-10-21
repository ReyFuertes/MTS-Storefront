import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import * as _ from 'lodash';

export abstract class BaseService<T> {
  protected baseUrl: string;

  constructor(
    // public cognitoSrv: CognitoService,
    public http: HttpClient,
    private entity: string = '') {
    this.baseUrl = environment.apiUrl;
  }

  // private getToken = (): string => this.cognitoSrv.getAccessToken().getJwtToken();

  private getToken(): string {
    return JSON.parse(localStorage.getItem('user') || null) ?
      JSON.parse(localStorage.getItem('user')).authentication_token : null;
  }

  protected commonHeaders(): HttpHeaders {
    return new HttpHeaders({
      'content-type': 'application/json',
      Accept: 'application/json',
      'x-user-token': `${this.getToken()}`
    });
  }

  public temporaryLogin(object?: any, param?: string): Observable<T> {
    let headers = new HttpHeaders();
    // headers = headers.append('X-User-Email', object.username || object.email);
    // headers = headers.append('X-User-Password', object.password);
    headers = headers.append('content-type', 'application/json');
    headers = headers.append('Accept', 'application/json');

    return this.http.post<T>(`${this.baseUrl}${this.entity}${this.fmtParam(param)}`, null,
      { headers });
  }

  private removeNullProps(obj: any): any {
    let ret: any;
    if (!Array.isArray(obj)) {
      ret = _.pickBy(obj, _.identity);
    } else {
      ret = Object.values(_.pickBy(obj, o => o !== null && o !== undefined));
    }
    return ret;
  }

  public post(object?: T | T[], param?: string, hasPrefix: boolean = true): Observable<T | T[]> {
    return this.http.post<T>(`${this.baseUrl}${this.entity}${this.fmtParam(param, hasPrefix)}`,
      (object),
      { headers: this.commonHeaders() });
  }

  public delete(id?: string, param?: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}${this.entity}/${id}${this.fmtParam(param)}`,
      { headers: this.commonHeaders() });
  }

  public patch(object: T | any, addtnlParam?: string): Observable<T> {
    return this.http.patch<T>(`${this.baseUrl}${this.entity}${this.fmtParam(addtnlParam)}`,
      this.removeNullProps(object),
      { headers: this.commonHeaders() }
    );
  }

  private fmtParam(param?: string, hasPrefix: boolean = true): string {
    return `${param ? (hasPrefix ? '/' : '') + param : ''}`;
  }

  public getAll(param?: string, hasPrefix: boolean = true): Observable<T | T[]> {
    return this.http.get<T | T[]>(`${this.baseUrl}${this.entity}${this.fmtParam(param, hasPrefix)}`, { headers: this.commonHeaders() });
  }

  public get(param?: string): Observable<T> {
    return this.http.get<T>(`${this.baseUrl}${this.entity}${this.fmtParam(param)}`, { headers: this.commonHeaders() });
  }

  public getWithQuery(query: string, param?: string): Observable<T> {
    return this.http.get<T>(`${this.baseUrl}${this.entity}${this.fmtParam(param)}?${query}`, { headers: this.commonHeaders() });
  }

  public getById(id: string | number, addtnlParam?: string): Observable<T> {
    return this.http.get<T>(`${this.baseUrl}${this.entity}/${id}${this.fmtParam(addtnlParam)}`, { headers: this.commonHeaders() });
  }

  public getAllById(id: string, addtnlParam?: string): Observable<T[]> {
    return this.http.get<T[]>(`${this.baseUrl}${this.entity}/${id}${this.fmtParam(addtnlParam)}`, { headers: this.commonHeaders() });
  }

  public upload(object?: any, addtnlParam?: string): Observable<T> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.getToken()}`,
      Accept: 'application/json'
    });
    headers.set('content-type', 'multipart/form-data');
    return this.http.post<T>(`${this.baseUrl}${this.entity}${this.fmtParam(addtnlParam)}`, object, { headers: headers });
  }
}
