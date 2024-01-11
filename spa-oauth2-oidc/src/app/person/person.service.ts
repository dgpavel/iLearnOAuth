import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Person } from "./person";
import { Observable } from "rxjs";
import { environment } from "../auth/auth-code-flow.config";

@Injectable({ providedIn: 'root' })
export class PersonService {
  private apiUrl = `${environment.apiUrl}/api/v1/persons`;
  constructor(
    private http: HttpClient
  ) { }


  getPersons(): Observable<Person[]> {
    return this.http.get<Person[]>(this.apiUrl);
  }
}
