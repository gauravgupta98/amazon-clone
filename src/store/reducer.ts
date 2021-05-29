import firebase from "firebase";

export interface IBasketState {
  basket: IProduct[];
  user: firebase.User | null;
}

export interface IProduct {
  id: string;
  title: string;
  image: string;
  price: number;
  category: string;
  description: string;
  hideButton?: boolean;
}

const initialState = {
  basket: [],
  user: null,
};

export enum ActionTypes {
  AddToBasket = "ADD_TO_BASKET",
  RemoveFromBasket = "REMOVE_FROM_BASKET",
  SetUser = "SET_USER",
  EmptyBasket = "EMPTY_BASKET",
}

export const getBasketTotal = (basket: IProduct[]) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

export type Action = {
  type: ActionTypes;
  payload: IProduct;
  user: firebase.User | null;
};

export const reducer = (state: IBasketState = initialState, action: Action) => {
  switch (action.type) {
    // Adding product to basket
    case ActionTypes.AddToBasket: {
      return { ...state, basket: [...state.basket, action.payload] };
    }

    // Removing product from basket
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

    // Setting the user
    case ActionTypes.SetUser: {
      return { ...state, user: action.user };
    }

    // Empty the basket
    case ActionTypes.EmptyBasket: {
      return { ...state, basket: [] };
    }

    default:
      return state;
  }
};
