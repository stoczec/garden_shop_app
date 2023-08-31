const sortProductReducer = (state, action) => {
  if (action.payload === 'title') {
    state.products.sort((a, b) => a.title.localeCompare(b.title));
  } else if (action.payload === 'price_asc') {
    state.products.sort(
      (a, b) =>
        (a.discont_price ? a.discont_price : a.price) -
        (b.discont_price ? b.discont_price : b.price)
    );
  } else if (action.payload === 'price_desc') {
    state.products.sort(
      (a, b) =>
        (b.discont_price ? b.discont_price : b.price) -
        (a.discont_price ? a.discont_price : a.price)
    );
  } else if (action.payload === 'default') {
    state.products.sort((a, b) => a.id - b.id);
  }
};

const sortPriceProductsReducer = (state, action) => {
  const { min_value, max_value } = action.payload;

  state.products = state.products.map((el) => {
    if (el.discont_price) {
      if (el.discont_price >= min_value && el.discont_price <= max_value) {
        el.visible = true;
      } else {
        el.visible = false;
      }
    } else {
      if (el.price >= min_value && el.price <= max_value) {
        el.visible = true;
      } else {
        el.visible = false;
      }
    }
    return el;
  });
};
