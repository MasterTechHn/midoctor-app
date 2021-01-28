import { Component, OnInit } from '@angular/core';
import { MatExpansionPanel } from '@angular/material/expansion';

@Component({
  selector: 'app-med-portal',
  templateUrl: './med-portal.component.html',
  styleUrls: ['./med-portal.component.css'],
  viewProviders: [MatExpansionPanel]
})
export class MedPortalComponent implements OnInit {
  showFiller = false;
  panelOpenState = false;
  constructor() { }

  ngOnInit(): void {
  }

}
