import { Component, Input } from '@angular/core';
import { resultData } from '../investment-data.model';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { InvestmentResultsService } from '../investment-results.service';

@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [CommonModule, CurrencyPipe],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css',
})
export class InvestmentResultsComponent {
  constructor(private investmentService: InvestmentResultsService) {}

  get results() {
    return this.investmentService.resultData;
  }
}
