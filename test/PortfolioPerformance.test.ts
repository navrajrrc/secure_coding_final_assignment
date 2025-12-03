import { calculatePortfolioPerformance } from "../src/portfolio/portfolioPerformance";

describe("calculatePortofolioPerformance", () => {
    it("should calculate when there is a profit", () => {
        const result = calculatePortfolioPerformance(10000,11000);

        expect(result.initialInvestment).toBe(10000);
        expect(result.currentValue).toBe(11000);
        expect(result.profitOrLoss).toBe(1000);
        expect(result.percentageChange).toBe(10);
        expect(result.performanceSummary).toBe("Moderately gained by $1000")
        });
    });

    it(" should calculate correctly when there is a loss", () => {
        const result = calculatePortfolioPerformance(10000,8000);

        expect(result.initialInvestment).toBe(10000);
        expect(result.currentValue).toBe(8000);
        expect(result.profitOrLoss).toBe(-2000);
        expect(result.percentageChange).toBe(-20);
        expect(result.performanceSummary).toBe("Lost significantly by $-2000")

    });

    it("should calculate when there is no change", () => {
        const result = calculatePortfolioPerformance(10000,10000);

        expect(result.initialInvestment).toBe(10000);
        expect(result.currentValue).toBe(10000);
        expect(result.profitOrLoss).toBe(0);
        expect(result.percentageChange).toBe(0);
        expect(result.performanceSummary).toBe("No change")
    });

