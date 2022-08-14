import * as actionType from "../constants/actionTypes";
import * as api from "../apis";

export const addProduct =
  (inputs, images, variations, navigate) => async (dispatch) => {
    try {
      dispatch({ type: actionType.PRODUCTS_REQUEST });

      const formData = new FormData();

      formData.append("title", inputs.title);
      formData.append("description", inputs.description);
      formData.append("selling_price", inputs.selling_price);
      formData.append("purchase_price", inputs.purchase_price);
      formData.append("category_id", inputs.category_id);
      formData.append("status", inputs.status);
      if (images && images.length > 0)
        for (let i = 0; i < images.length; i++) {
          formData.append(`images[]`, images[i]);
        }
      let total_stock = 0;
      if (variations) {
        formData.append(
          "variations",
          JSON.stringify(
            variations.map((variation) => {
              total_stock += variation.val.stock;
              return variation.val;
            })
          )
        );
      } else {
        total_stock = inputs.total_stock;
      }
      formData.append("total_stock", total_stock);
      const { data } = await api.addProduct(formData);

      dispatch({ type: actionType.PRODUCT_SUCCESS, data });

      navigate("/admin/products");
    } catch (error) {
      dispatch({
        type: actionType.PRODUCT_FAILURE,
        error: error?.response?.data,
      });

      console.log(error);
    }
  };
