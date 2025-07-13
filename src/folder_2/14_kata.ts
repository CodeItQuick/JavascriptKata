

export const input = (commands) => {
    let totalCost = +commands[0] * +commands[1];
    const volumeDiscount = [
        { volume: 50000, discount: 0.15 },
        { volume: 10000, discount: 0.10 },
        { volume: 7000, discount: 0.07 },
        { volume: 5000, discount: 0.05 },
        { volume: 1000, discount: 0.03 },
    ]
    volumeDiscount.some(({volume, discount}, idx) => {
        if (totalCost >= volume) {
            totalCost = totalCost * (1 - discount)
            return true;
        }
        return false;
    })
    const stateTaxes = {
        UT: 6.85,
        NV: 8.00,
        TX: 6.25,
        AL: 4.00,
        CA: 8.25,
    }
    return totalCost * (1 + stateTaxes[commands[2]] / 100);
}