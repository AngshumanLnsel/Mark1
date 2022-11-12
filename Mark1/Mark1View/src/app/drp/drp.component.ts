import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from 'src/app/apiservice.service';
import { Country } from '../country';
import { State } from '../state';

@Component({
  selector: 'app-drp',
  templateUrl: './drp.component.html',
  styleUrls: ['./drp.component.css']
})
export class DrpComponent implements OnInit {
  name = 'Ark';

  selectedCountry: Country = new Country(1, 'India');
  countries: Country[] = [];
  states: State[] = [];

  constructor(private selectService: ApiserviceService) { }

  ngOnInit() {
    this.countries = this.selectService.getCountries();
    this.onSelect(this.selectedCountry.id);
  }

  onSelect(countryid: number) {
    this.states = this.selectService.getStates().filter((item) => item.countryid == countryid);
  }

}
