import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private jsonUrl = 'assets/sample-data.json'; // Path to your JSON file
  private dataSignal = signal<any>(null);

  constructor(private http: HttpClient) {
    this.http = http
    this.fetchData()
  }

  private fetchData() {
    this.http.get<any>(this.jsonUrl).subscribe(response => {
      this.dataSignal.set(response);
    })
  }

  getDataSignal() {
    return this.dataSignal;
  }
}
