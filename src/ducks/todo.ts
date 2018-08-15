import { defaultState } from "../State";
import { IState } from "../types";

export const KEYS = {
  ADD_TODO: "ADD_TODO",
  DELETE_ITEM: "DELETE_ITEM",
  UPDATE_ITEM: "UPDATE_ITEM"
};

export const deleteItem = (e: any) => {
  e.preventDefault();
  return {
    payload: e.target.parentElement.parentElement.innerText
      .replace("Delete", "")
      .trim(),
    type: KEYS.DELETE_ITEM
  };
};

export const updateItem = (e: any) => {
  e.preventDefault();
  return {
    payload: e.target.value,
    type: KEYS.UPDATE_ITEM
  };
};

export const addTodo = (e: any) => {
  e.preventDefault();
  return {
    type: KEYS.ADD_TODO
  };
};

export const rootReducer = (state: IState = defaultState, action: any) => {
  switch (action.type) {
    case KEYS.DELETE_ITEM: {
      const itemToDelete: string = action.payload;
      const newList = state.items.filter(item => item !== itemToDelete);
      return {
        ...state,
        items: newList
      };
    }
    case KEYS.ADD_TODO: {
      const newItem: string = state.item;
      return {
        ...state,
        item: "",
        items: [...state.items, newItem]
      };
    }
    case KEYS.UPDATE_ITEM: {
      return {
        ...state,
        item: action.payload
      };
    }
    default: {
      return state;
    }
  }
};
