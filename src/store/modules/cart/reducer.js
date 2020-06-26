import produce from 'immer';

export default function cart(state = [], action) {
  console.tron.log(state);
  switch (action.type) {
    case 'ADD_TO_CART':
      return produce(state, (draft) => {
        const findIndex = draft.findIndex((p) => p.id === action.product.id);

        if (findIndex >= 0) {
          draft[findIndex].amount += 1;
        } else {
          draft.push({
            ...action.product,
            amount: 1,
          });
        }
      });

    default:
      return state;
  }
}
