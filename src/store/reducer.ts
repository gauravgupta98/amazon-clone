export interface BasketState {
  basket: string[];
}

const initialState = {
  basket: [],
};

export type Action = { type: "ADD_BASKET"; payload: string };

export const reducer = (state: BasketState = initialState, action: Action) => {
  switch (action.type) {
    case "ADD_BASKET": {
      return { ...state, basket: [...state.basket, action.payload] };
    }

    default:
      return state;
  }
};
