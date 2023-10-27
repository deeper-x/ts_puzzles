export function solution(prices: number[]): number {
    let maxProfit = 0;
    let minPrice = prices[0];
    const pLength = prices.length;

    for (let i = 0; i < pLength; i++) {
        maxProfit = Math.max(maxProfit, prices[i] - minPrice);
        minPrice = Math.min(minPrice, prices[i]);
    }

    return maxProfit;
};