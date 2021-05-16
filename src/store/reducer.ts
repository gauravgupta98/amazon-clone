export interface BasketState {
  basket: Product[];
}

export interface Product {
  id: string;
  title: string;
  image: string;
  price: number;
  rating: number;
}

const initialState = {
  basket: [],
};

export enum ActionTypes {
  AddToBasket = "ADD_TO_BASKET",
}

export type Action = { type: ActionTypes; payload: Product };

export const reducer = (state: BasketState = initialState, action: Action) => {
  switch (action.type) {
    case ActionTypes.AddToBasket: {
      return { ...state, basket: [...state.basket, action.payload] };
    }

    default:
      return state;
  }
};
