import { largestholdingasset } from "../src/portfolio/portfolioPerformance";

interface Asset{
    name:string;
    value:number;
}

describe("largestholdingasset", () => {
    test("finds the largest asset in normal case", () => {
        const assets: Asset[] = [
            {name: "stocks", value: 200},
            {name: "bonds", value: 300},
            {name: "house", value: 1000}
        ];
        const result = largestholdingasset(assets);
        expect(result).toEqual({name: "house", value: 1000});
    });


    test("returns null for empty value", () => {
        const assets: Asset[] = [];
        const result = largestholdingasset(assets);
        expect(result).toBeNull();
    });

});