import { calculateAllocation } from "../src/portfolio/portfolioPerformance";

interface Asset {
    name: string;
    value: number;
}

describe("calculateAllocations", () => {
    test("calculates even distribution", () => {
        const asset:Asset[] = [
            {name: "stocks", value: 100},
            {name: "bonds", value: 100}
        ];
        const result = calculateAllocation(asset);
        expect(result).toEqual([
            {name: "stocks", percentage: 50},
            {name: "bonds", percentage: 50}
        ]);
    });

    test("calculates uneven distribution", () => {
        const asset: Asset[] = [
            { name: "stocks", value: 300},
            {name: "bonds", value: 100}
        ];
        const result = calculateAllocation(asset);
        expect(result).toEqual([
            {name: "stocks", percentage:75},
            {name: "bonds", percentage: 25}
        ]);
    });
});