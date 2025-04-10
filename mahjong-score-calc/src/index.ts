interface scoreOptions {
    rule    : ruleType;
    han     : number;
    hu      : number;
    isDealer: boolean;
    isTsumo : boolean;
}

type ruleType = 'unlimited' | 'withRoundingMangan' | 'strict';

const options:scoreOptions = {
    rule    : "unlimited",
    han     : 3,
    hu      : 40,
    isDealer: true,
    isTsumo : true,
}

function calcScoreByRule ({ rule, han, hu, isDealer }:scoreOptions): number {
    const basePoint = hu * 2 ** (2 + han);
    const multiplier = isDealer ? 6 : 4;
    const total = basePoint * multiplier;
    const rounded = Math.ceil(total / 100) * 100;

    const mangan = isDealer ? 12000 : 8000;
    const haneman = isDealer ? 18000 : 12000;
    const baiman = isDealer ? 24000 : 16000;
    const sanbaiman = isDealer ? 36000 : 24000;
    const yakuman = isDealer ? 48000 : 32000;

    const isRoundingMangan:boolean = rule === "withRoundingMangan" && ((han === 3 && hu === 60) || (han === 4 && hu === 30));

    if (rule === "unlimited") {
        return rounded;
    } else  {
        if (han >= 13) {
            return yakuman;
        } else if (han >= 11) {
            return sanbaiman;
        } else if (han >= 8) {
            return baiman;
        } else if (han >= 6) {
            return haneman;
        } else if (han >= 5 || isRoundingMangan)  {
            return mangan;
        } else {
            return rounded;
        }
    }
}
