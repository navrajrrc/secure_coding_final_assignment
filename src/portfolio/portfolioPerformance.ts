interface portfolioPerformance {
    initialInvestment: number;
    currentValue: number;
    profitOrLoss: number;
    percentageChange: number;
    performanceSummary: string;
}


export function calculatePortfolioPerformance(
    initialInvestment: number,
    currentValue: number
): portfolioPerformance{

    const profitOrLoss = currentValue - initialInvestment;

    let percentageChange: number;

    switch (true) {
        case initialInvestment === 0:
        percentageChange = 0;
        break;

        default:
        percentageChange = (profitOrLoss/ initialInvestment) * 100
    }

    let performanceSummary: string;
    
    switch (true) {
        case percentageChange >= 20:
            performanceSummary = `Gained singnificantly with a profit of $${profitOrLoss}`
            break;

        case percentageChange >= 10 && percentageChange < 20:
            performanceSummary = `Moderately gained by $${profitOrLoss}`
            break;

        case percentageChange >= 0.1 && percentageChange <10:
            performanceSummary = `Significantly gained by $${profitOrLoss}`
            break;
        
        case percentageChange === 0:
            performanceSummary = `No change`
            break;

        case percentageChange <= -0.1 && percentageChange > -10:
            performanceSummary = `Lost significantly by $${profitOrLoss}`
            break;

        case percentageChange <= -10 && percentageChange > -20:
            performanceSummary = ` Lost moderately by $${profitOrLoss}`
            break;

        default: 
            performanceSummary = `Lost significantly by $${profitOrLoss}`

    }
    return {
        initialInvestment,
        currentValue,
        profitOrLoss,
        percentageChange,
        performanceSummary,
    };
}

interface Asset {
    name: string;
    value: number;
}

export function largestholdingasset(assets: Asset[]): Asset | null {
    if (assets.length === 0) return null;

    let largest = assets[0];

    for (const asset of assets) {
        switch (true) {
            case asset.value > largest.value:
                largest = asset;
                break;
        }
    }

    return largest;
}
interface Asset{
    name:string;
    value: number;
}

interface Allocation {
    name:string; 
    percentage: number;
}

export function calculateAllocation(assets: Asset[]): Allocation[] {
    switch(true) {
        case assets.length === 0:
            return [];
        default:
            break;
    }

    let total = 0;
    for (const asset of assets) {
        total += asset.value;
    }

    let allocations: Allocation[] = [];

    switch (true) {
        case total === 0:
            for (const asset of assets) {
                allocations.push({
                    name: asset.name,
                    percentage:0
                });
            }
            break;

        default:
            for (const asset of assets) {
                allocations.push({
                    name: asset.name,
                    percentage: (asset.value/ total) * 100
                });
            }
            break;
    }
    return allocations;
}