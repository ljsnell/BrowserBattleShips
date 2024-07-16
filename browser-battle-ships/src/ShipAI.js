import { WITHDRAW, OFFER_BROADSIDE, CLOSE } from './Constants'

export function pickAction() {
    const min = 1;
    const max = 6;
    const rand = min + Math.random() * (max - min);
    console.log('rand:' + rand)

    if (rand > 0 && rand < 3) {
        return CLOSE
    }
    else if (rand > 2 && rand < 6) {
        return OFFER_BROADSIDE
    }
    else {
        return WITHDRAW
    }
}