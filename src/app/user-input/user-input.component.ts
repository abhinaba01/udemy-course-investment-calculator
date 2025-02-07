import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentResultsService } from '../investment-results.service';
import { InvestmentInput } from '../investment-data.model';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {
  initialInvestment = '0';
  annualInvestment = '0';
  expectedReturn = '0';
  duration = '0';

  @Output() calculate = new EventEmitter<InvestmentInput>();

  constructor(private investmentResults: InvestmentResultsService) {}

  onSubmit() {
    this.calculate.emit({
      initialInvestment: +this.initialInvestment,
      annualInvestment: +this.annualInvestment,
      expectedReturn: +this.expectedReturn,
      duration: +this.duration,
    });

    // console.log(
    //   this.investmentResults.calculateInvestmentResults(
    //     this.initialInvestment,
    //     this.duration,
    //     this.expectedReturn,
    //     this.annualInvestment
    //   )
    // );
  }
}
