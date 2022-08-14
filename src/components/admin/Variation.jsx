import { v4 } from "uuid";

const Variation = ({
  value,
  setVariationArray,
  variationArray,
  errors,
  index,
}) => {
  const addVarition = () => {
    setVariationArray((prev) => prev.filter((item) => (item.delete = true)));
    setVariationArray([
      ...variationArray,
      {
        id: v4(),
        delete: false,
        val: {
          size: "",
          color: "#030303",
          stock: 0,
        },
      },
    ]);
  };

  const deleteVarition = (id) => {
    setVariationArray(variationArray.filter((item) => item.id !== id));
  };
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
        {errors?.validation_errors[`variations.${index}.size`] &&
          errors?.validation_errors[`variations.${index}.size`][0] && (
            <span style={{ color: "red" }}>
              {" "}
              {errors?.validation_errors[`variations.${index}.size`][0]}{" "}
            </span>
          )}
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
        {errors?.validation_errors[`variations.${index}.color`] &&
          errors?.validation_errors[`variations.${index}.color`][0] && (
            <span style={{ color: "red" }}>
              {" "}
              {errors?.validation_errors[`variations.${index}.color`][0]}{" "}
            </span>
          )}
      </div>
      <div className="col-5 col-md-3">
        <div className="input-group">
          <span className="input-group-text">Quantity</span>
          <input
            type="number"
            style={{ height: "38px" }}
            className="form-control"
            id={`stock-${value.id}`}
            name={`stock-${value.id}`}
            placeholder="Product Quantity"
            onChange={(e) => {
              setVariationArray(
                variationArray.map((item) =>
                  item.id === value.id
                    ? {
                        ...item,
                        val: { ...item.val, stock: parseInt(e.target.value) },
                      }
                    : item
                )
              );
            }}
            value={value.val.stock}
          />
        </div>
        {errors?.validation_errors[`variations.${index}.stock`] &&
          errors?.validation_errors[`variations.${index}.stock`][0] && (
            <span style={{ color: "red" }}>
              {" "}
              {errors?.validation_errors[`variations.${index}.stock`][0]}{" "}
            </span>
          )}
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
