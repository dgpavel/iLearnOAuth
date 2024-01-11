import { Component, OnInit } from '@angular/core';
import { PersonService } from '../person.service';

@Component({
  selector: 'app-person-home',
  templateUrl: './person-home.component.html',
  styleUrls: ['./person-home.component.css']
})
export class PersonHomeComponent implements OnInit {
  constructor(private apiService: PersonService) { }
  ngOnInit(): void {
    this.apiService.getPersons().subscribe();
  }


}
