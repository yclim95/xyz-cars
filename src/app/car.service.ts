import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Car } from './car';
import { CARS } from './mock-cars';


@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor() { }

  // Cars On Sale Screen
  getCars(): Observable<Car[]> {
    // Return CARS
    return of(CARS);
  }


  getCar(id: number): Observable<Car> {
    // rETURN Car
    return of(CARS.find(car => car.id === id));
  }
}
