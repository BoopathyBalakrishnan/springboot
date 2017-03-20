import { Component, OnInit } from '@angular/core';
import { SlistService } from '../slist.service';
import { StudentDetail } from '../CardDetails';
@Component({
  selector: 'home-app', // <home-app></home-app>
  templateUrl: 'slist/home.component.html'

})

export class HomeComponent implements OnInit {
  constructor(private slistService: SlistService) {

  }
  cardDetail: StudentDetail[];

  ngOnInit() {

    this.slistService.fetchCardDetails().subscribe(cardDetaildd => this.cardDetail = cardDetaildd);
  }
}