export const initialState = {
  basket: [],
};
export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

// here we are making a function which will give us the total price, which takes a array here that array is basket and then apply the reduce method on that

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
        //here while return we are returning whatever the state earlier was and inside basket we are adding whatever state earlier was and the new item added
      };
    case "REMOVE_FROM_BASKET":
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      let newBasket = [...state.basket];
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Can't remove product (id:${action.id}) as it's not in the basket`
        );
      }
      return {
        ...state,
        basket: newBasket,
      };

    //here what is happening when we click on remove from basket then removeFromBasket function is fired which starts dispatching this time the type of dispatch is REMOVE_FROM_BASKET and we also send the id of the removed item and that id is came over here and we are doing the next procedure, first we create a variable and store the index value since every item has unique id thus we will get the acutal index of that element once we have the index then we are going to create a new array called newBasket which will have all the items present inside it and now we run a if condition if the index is greater than or equal to zero because if it's not then it means there is not product found and index value will be -1, so if we get the index then apply the splice on the newbasket which we have created and remove that index element from the newBasket and thus that element gets removed from the basket
    //here one thing is to note that we created a new array i.e the newBasket so that our original array i.e the basket which have all the value should not get reomoved, suppose we have applied spice on our original basket then the product or item will also go from the home screen and that will be incorrect, so this is the use of creating a newBasket
    default:
      return state;
  }
};
export default reducer;
