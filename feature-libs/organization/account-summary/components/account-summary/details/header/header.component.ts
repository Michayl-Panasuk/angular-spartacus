import { Component, OnInit } from '@angular/core';
import { RoutingService, TranslationService } from '@spartacus/core';
import { Card } from '@spartacus/storefront';
import { AccountSummaryDetailsService } from '../../../services';
import {
  // combineLatest,
  Observable
} from "rxjs";
import { AccountSummaryDetails } from "../../../../core";
import {filter, map } from "rxjs/operators";

@Component({
  selector: 'cx-account-summary-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {

  currentUnitCode: string;
  headerDetails$: Observable<AccountSummaryDetails>
  response: any;

  constructor(
    private routingService: RoutingService,
    private accountSummaryDetailsService: AccountSummaryDetailsService,
    protected translation: TranslationService,
  ) { }

  ngOnInit(): void {
    this.routingService.getRouterState().subscribe((value) => {
      const urlArr = value.state.context.id.split('/');
      this.currentUnitCode = urlArr[urlArr.length - 1];
    });

    this.headerDetails$ = this.accountSummaryDetailsService.getHeaderData(this.currentUnitCode);
    this.accountSummaryDetailsService.getDocumentData(this.currentUnitCode).subscribe(res => console.log(res));
  }

  getIdCardContent(id: string): Observable<Card> {
    return this.translation.translate('orgAccountSummary.details.uid').pipe(
      filter(() => Boolean(id)),
      map((idTitle) => ({
        title: idTitle,
        text: [id],
      }))
    );
  }

  getNameCardContent(name: string): Observable<Card> {
    return this.translation.translate('orgAccountSummary.details.name').pipe(
      filter(() => Boolean(name)),
      map((nameTitle) => ({
        title: nameTitle,
        text: [name],
      }))
    );
  }

  getAddressCardContent(name: string, address: string, country: string): Observable<Card> {
    return this.translation.translate('orgAccountSummary.details.address').pipe(
      filter(() => Boolean(name)),
      map((addressTitle) => ({
        title: addressTitle,
        text: [name, address, country],
      }))
    );
  }

  getCreditRepCardContent(creditRep: string): Observable<Card> {
    return this.translation.translate('orgAccountSummary.details.creditRep').pipe(
      filter(() => Boolean(creditRep)),
      map((creditRepTitle) => ({
        title: creditRepTitle,
        text: [creditRep],
      }))
    );
  }

  getCreditLineCardContent(creditLine: string): Observable<Card> {
    return this.translation.translate('orgAccountSummary.details.creditLine').pipe(
      filter(() => Boolean(creditLine)),
      map((creditLineTitle) => ({
        title: creditLineTitle,
        text: [creditLine],
      }))
    );
  }

  getCurrentBalanceCardContent(currentBalance: string): Observable<Card> {
    return this.translation.translate('orgAccountSummary.details.currentBalance').pipe(
      filter(() => Boolean(currentBalance)),
      map((currentBalanceTitle) => ({
        title: currentBalanceTitle,
        text: [currentBalance],
      }))
    );
  }

  getOpenBalanceCardContent(openBalance: string): Observable<Card> {
    return this.translation.translate('orgAccountSummary.details.openBalance').pipe(
      filter(() => Boolean(openBalance)),
      map((openBalanceTitle) => ({
        title: openBalanceTitle,
        text: [openBalance],
      }))
    );
  }
}
