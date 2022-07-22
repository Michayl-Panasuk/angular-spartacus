import { Component, OnInit } from '@angular/core';
import { RoutingService } from '@spartacus/core';
import {AccountSummaryDetailsService} from "../../../services";
import {AccountSummaryDocument} from "../../../../core";
@Component({
  selector: 'cx-account-summary-document',
  templateUrl: './account-summary-document.component.html',
})
export class AccountSummaryDocumentComponent implements OnInit {

  currentUnitCode: string;
  documents: Array<AccountSummaryDocument> = [];
  pagination = undefined;
  sorts = undefined;


  constructor(
    private routingService: RoutingService,
    private accountSummaryDetailsService: AccountSummaryDetailsService
  ) { }

  ngOnInit(): void {
    this.routingService.getRouterState().subscribe((value) => {
      const urlArr = value.state.context.id.split('/');
      this.currentUnitCode = urlArr[urlArr.length - 1];
    });

    this.accountSummaryDetailsService.getDocumentData(this.currentUnitCode).subscribe(response => {
      if (response) {
        this.documents = response.documents;
        this.pagination = response.pagination; // ToDo: add form control for pages
        this.sorts = response.sorts; // ToDo: add form control for sort
      }
    });
  }



}
