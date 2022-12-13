import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-paging-header',
  templateUrl: './paging-header.component.html',
  styleUrls: ['./paging-header.component.css']
})
export class PagingHeaderComponent {
@Input() pageNumber:number = 0;
@Input() pageSize:number = 0;
@Input() totalCount:number = 0;
}
