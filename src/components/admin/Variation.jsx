import React from "react";

const Variation = ({
  handleInputs,
  addVarition,
  deleteVarition,
  value,
  setVariationArray,
  variationArray,
}) => {
  return (
    <div className="row">
      <div className="col-12 col-md-5 mb-4">
        <div className="input-group">
          <span className="input-group-text">Size</span>
          <input
            type="text"
            className="form-control"
            id={`size-${value.id}`}
            name={`size-${value.id}`}
            placeholder="Product Size"
            onChange={(e) => {
              setVariationArray(
                variationArray.map((item) =>
                  item.id === value.id
                    ? { ...item, val: { ...item.val, size: e.target.value } }
                    : item
                )
              );
            }}
            value={value.val.size}
          />
        </div>
      </div>
      <div className="col-5 col-md-3">
        <div className="input-group">
          <span className="input-group-text">Color</span>
          <input
            type="color"
            style={{ height: "38px" }}
            className="form-control"
            id={`color-${value.id}`}
            name={`color-${value.id}`}
            placeholder="Product Color"
            onChange={(e) => {
              setVariationArray(
                variationArray.map((item) =>
                  item.id === value.id
                    ? { ...item, val: { ...item.val, color: e.target.value } }
                    : item
                )
              );
            }}
            value={value.val.color}
          />
        </div>
      </div>
      <div className="col-5 col-md-3">
        <div className="input-group">
          <span className="input-group-text">Quantity</span>
          <input
            type="number"
            style={{ height: "38px" }}
            className="form-control"
            id={`quantity-${value.id}`}
            name={`quantity-${value.id}`}
            placeholder="Product Quantity"
            onChange={(e) => {
              setVariationArray(
                variationArray.map((item) =>
                  item.id === value.id
                    ? {
                        ...item,
                        val: { ...item.val, quantity: e.target.value },
                      }
                    : item
                )
              );
            }}
            value={value.val.quantity}
          />
        </div>
      </div>
      <div className="col-2 col-md-1">
        {value.delete ? (
          <button
            type="button"
            className={`btn btn-danger float-end`}
            onClick={(e) => {
              document.getElementById(`size-${value.id}`).value = "";
              deleteVarition(value.id);
            }}
          >
            <i className="fa fa-times"></i>
          </button>
        ) : (
          <button
            type="button"
            className={`btn btn-primary float-end`}
            onClick={addVarition}
          >
            <i className="fa fa-plus"></i>
          </button>
        )}
      </div>
    </div>
  );
};

export default Variation;
