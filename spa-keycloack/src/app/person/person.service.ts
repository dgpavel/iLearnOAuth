import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Person } from "./person";
import { Observable } from "rxjs";

@Injectable({ providedIn: 'root' })
export class PersonService {
  private apiUrl = 'api/v1/persons';
  constructor(
    private http: HttpClient
  ) { }


  getPersons(): Observable<Person[]> {
    return this.http.get<Person[]>(this.apiUrl);
  }
}
