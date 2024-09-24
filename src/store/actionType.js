export const INCREMENT_TYPE = "increment";
export const DECREMENT_TYPE = "decrement";

export function incrementAction(payload) {
    return { type: INCREMENT_TYPE, payload };
}

export function decrementAction(payload) {
    return { type: DECREMENT_TYPE, payload };
}

