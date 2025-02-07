export interface InvestmentInput
{
    initialInvestment:number,
    annualInvestment:number,
    duration:number,
    expectedReturn:number
}

export interface annualData
{
    year: number,
    interest: number,
    valueEndOfYear: number,
    annualInvestment: number,
    totalInterest:number,
    totalAmountInvested: number,
  }