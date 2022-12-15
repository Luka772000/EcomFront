import { Observable } from 'rxjs';
import { BreadcrumbService } from 'xng-breadcrumb';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-header',
  templateUrl: './section-header.component.html',
  styleUrls: ['./section-header.component.css'],
})
export class SectionHeaderComponent implements OnInit {
  breadCrumb$: Observable<any[]>; // Observable of type any array
  constructor(private bcService: BreadcrumbService) {}
  ngOnInit() {
    this.breadCrumb$ = this.bcService.breadcrumbs$;
  }
}
