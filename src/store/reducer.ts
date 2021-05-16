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
  RemoveFromBasket = "REMOVE_FROM_BASKET",
}

export type Action = { type: ActionTypes; payload: Product };

export const reducer = (state: BasketState = initialState, action: Action) => {
  switch (action.type) {
    case ActionTypes.AddToBasket: {
      return { ...state, basket: [...state.basket, action.payload] };
    }

    case ActionTypes.RemoveFromBasket: {
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.payload.id
      );

      let newBasket = [...state.basket];

      if (index > -1) {
        newBasket.splice(index, 1);
      }

      return { ...state, basket: newBasket };
    }

    default:
      return state;
  }
};
