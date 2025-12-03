import express, { Express, Request, Response } from "express";
import { calculatePortfolioPerformance, largestholdingasset, calculateAllocation } from "../src/portfolio/portfolioPerformance";
const app: Express = express();

interface HealthCheckResponse {
    status:string;
    uptime: number;
    timestamp:string;
    version: string;
}

app.get("/", (req: Request, res: Response) => {
    res.send("Hello World");
});

app.get("/api/v1/health", (req:Request, res: Response) => {
    const healthData: HealthCheckResponse = {
        status: "OK",
        uptime:process.uptime(),
        timestamp: new Date().toISOString(),
        version: "1.0.0",
    };

    res.json(healthData);
});

app.get("/api/v1/portfolio/performance", (req: Request, res:Response) => {
    const initialInvestment = Number(req.query.initialInvestment) || 1000;
    const currentValue = Number(req.query.currentValue) || 2000;

    const result = calculatePortfolioPerformance(initialInvestment, currentValue);
    res.json(result);
});

interface Asset {
    name: string;
    value: number
}
app.get("/api/v1/portfolio/largestholding", (req:Request, res: Response) => {
    const asset: Asset[] = [
        {name:"House", value: 50000},
        {name:"stocks", value: 20000},
        {name:"bonds", value: 10000},

    ];

    const largest = largestholdingasset(asset);
    res.json(largest);
});


interface Asset {
    name: string;
    value: number
}
app.get("/api/v1/portfolio/allocation", (req: Request, res:Response) => {
    const asset: Asset[] = [
        {name: "stocks", value: 13000},
        {name: "bonds", value: 7000},
    ];

    const allocation = calculateAllocation(asset);
    res.json(allocation);
});



export default app;