import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Car } from '../car';
import { CarService } from '../car.service';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {

  car: Car;
  message: string;
  selectedCar: Car;


  constructor(
    private route: ActivatedRoute,
    private carService: CarService,
    private location: Location
    ) { }

  ngOnInit(): void {
    this.getCar();
  }

  // Display Car Detail based on the car detail
  getCar(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.carService.getCar(id)
      .subscribe(car => this.car = car);
  }

  // Show message once user subscribe to that car
  onSelect(car: Car): void {
    this.selectedCar = car;
    this.message = `Subscribed to Car Update: Selected car id: ${car.id}, car model: ${car.model} of year ${car.year}`;
  }


  // Return back to previous location
  goBack(): void {
    this.location.back();
  }

}
