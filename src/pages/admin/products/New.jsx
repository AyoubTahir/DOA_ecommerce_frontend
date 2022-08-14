import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { useNavigate } from "react-router-dom";
import { v4 } from "uuid";
import { categories as getCategories } from "../../../actions/categories";
import { addProduct } from "../../../actions/products";
import Container from "../../../components/admin/Container";
import Uploader from "../../../components/admin/Uploader";
import Variation from "../../../components/admin/Variation";

const New = () => {
  const { categories } = useSelector((state) => state.categories);
  const { loading, errors } = useSelector((state) => state.products);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [images, setImages] = useState([]);
  const [withVariation, setWithVariation] = useState(1);
  const [variationArray, setVariationArray] = useState([
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
  const [inputs, setInputs] = useState({
    title: "",
    description: "",
    selling_price: "",
    purchase_price: null,
    category_id: null,
    status: 1,
  });

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    dispatch(getCategories(1, 1000, "", signal));
    return () => {
      controller.abort();
    };
  }, [dispatch]);

  const handleInputs = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]:
        e.target.name === "status"
          ? parseInt(e.target.value)
          : e.target.name === "variations"
          ? setWithVariation(parseInt(e.target.value))
          : e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addProduct(
        inputs,
        images,
        withVariation ? variationArray : null,
        navigate
      )
    );
  };

  const getImages = (images) => {
    setImages(images);
  };

  return (
    <Container
      title="New Product"
      subtitle="Welcome Admin, you have 12 pending orders"
      parent="Products"
    >
      {loading && <div id="page-loader" className="show"></div>}
      <h2 className="content-heading">Add Product</h2>
      <div className="row">
        <div className="col-md-12">
          <form onSubmit={handleSubmit} encType="multipart/form-data">
            <div className="block block-rounded">
              <div className="block-header block-header-default">
                <h3 className="block-title">Basic Info</h3>
                <div className="block-options">
                  <button type="submit" className="btn btn-sm btn-alt-primary">
                    <i className="fa fa-save opacity-50 me-1"></i> Save
                  </button>
                </div>
              </div>
              <div className="block-content block-content-full">
                <div className="mb-4">
                  <label className="form-label" htmlFor="ecom-product-name">
                    Title
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="ecom-product-name"
                    name="title"
                    placeholder="Category Name"
                    onChange={handleInputs}
                  />
                  {errors?.validation_errors?.title && (
                    <span style={{ color: "red" }}>
                      {" "}
                      {errors?.validation_errors?.title[0]}{" "}
                    </span>
                  )}
                </div>
                <div className="mb-4">
                  <label
                    className="form-label"
                    htmlFor="ecom-product-description-short"
                  >
                    Description
                  </label>
                  <textarea
                    className="form-control"
                    id="ecom-product-description-short"
                    name="description"
                    placeholder="Description visible on preview.."
                    onChange={handleInputs}
                    style={{ height: "180px" }}
                  ></textarea>
                  {errors?.validation_errors?.description && (
                    <span style={{ color: "red" }}>
                      {" "}
                      {errors?.validation_errors?.description[0]}{" "}
                    </span>
                  )}
                </div>
                <div className="mb-4">
                  <div className="row">
                    <div className="col-sm-6">
                      <label
                        className="form-label"
                        htmlFor="ecom-product-price"
                      >
                        Price
                      </label>
                      <div className="input-group">
                        <span className="input-group-text">
                          <i className="fa fa-fw fa-dollar-sign"></i>
                        </span>
                        <input
                          type="text"
                          className="form-control"
                          id="ecom-product-price"
                          name="selling_price"
                          placeholder="Product Price"
                          onChange={handleInputs}
                        />
                      </div>
                      {errors?.validation_errors?.selling_price && (
                        <span style={{ color: "red" }}>
                          {" "}
                          {errors?.validation_errors?.selling_price[0]}{" "}
                        </span>
                      )}
                    </div>
                    <div className="col-sm-6">
                      <label className="form-label" htmlFor="ecom-product-cost">
                        Cost
                      </label>
                      <div className="input-group">
                        <span className="input-group-text">
                          <i className="fa fa-fw fa-dollar-sign"></i>
                        </span>
                        <input
                          type="text"
                          className="form-control"
                          id="ecom-product-cost"
                          name="purchase_price"
                          placeholder="Purchase Price"
                          onChange={handleInputs}
                        />
                      </div>
                      {errors?.validation_errors?.purchase_price && (
                        <span style={{ color: "red" }}>
                          {" "}
                          {errors?.validation_errors?.purchase_price[0]}{" "}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                <div className="mb-4">
                  <label className="form-label" htmlFor="categories-select">
                    Categories
                  </label>
                  <select
                    className="form-select"
                    id="categories-select"
                    name="category_id"
                    onChange={handleInputs}
                  >
                    <option defaultValue disabled>
                      Categories
                    </option>
                    {categories.map((category) => (
                      <option key={category.id} value={category.id}>
                        {category.title}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="mb-4">
                  <label className="form-label d-block">Status</label>
                  <div className="form-check form-check-inline">
                    <input
                      type="radio"
                      className="form-check-input"
                      id="ecom-product-condition-new"
                      name="status"
                      value={1}
                      defaultChecked
                      onChange={handleInputs}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="ecom-product-condition-new"
                    >
                      Active
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      type="radio"
                      className="form-check-input"
                      id="ecom-product-condition-old"
                      name="status"
                      value={0}
                      onChange={handleInputs}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="ecom-product-condition-old"
                    >
                      Disable
                    </label>
                  </div>
                  {errors?.validation_errors?.status && (
                    <span style={{ color: "red" }}>
                      {" "}
                      {errors?.validation_errors?.status[0]}{" "}
                    </span>
                  )}
                </div>
                <div className="row mb-4">
                  <div className="col-md-10 col-xl-6">
                    <div className="mb-4">
                      <label
                        className="form-label"
                        htmlFor="profile-settings-avatar"
                      >
                        Choose new image
                      </label>
                      <Uploader getImages={getImages} />
                      {errors?.validation_errors?.images && (
                        <span style={{ color: "red" }}>
                          {" "}
                          {errors?.validation_errors?.images[0]}{" "}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                <div className="mb-4">
                  <label className="form-label d-block">Variations</label>
                  <div className="form-check form-check-inline">
                    <input
                      type="radio"
                      className="form-check-input"
                      id="ecom-product-variations-active"
                      name="variations"
                      value={1}
                      defaultChecked
                      onChange={handleInputs}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="ecom-product-variations-active"
                    >
                      Active
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      type="radio"
                      className="form-check-input"
                      id="ecom-product-variations-disable"
                      name="variations"
                      value={0}
                      onChange={handleInputs}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="ecom-product-variations-disable"
                    >
                      Disable
                    </label>
                  </div>
                </div>
                {!!withVariation && (
                  <div className="mb-4">
                    {variationArray.map((value, index) => (
                      <Variation
                        key={index}
                        handleInputs={handleInputs}
                        value={value}
                        setVariationArray={setVariationArray}
                        variationArray={variationArray}
                        errors={errors}
                        index={index}
                      />
                    ))}
                  </div>
                )}
                {!withVariation && (
                  <div className="mb-4">
                    <label
                      className="form-label"
                      htmlFor="ecom-product-total_stock"
                    >
                      Total Stock
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="ecom-product-total_stock"
                      name="total_stock"
                      placeholder="Total Stock"
                      onChange={handleInputs}
                    />
                    {errors?.validation_errors?.total_stock && (
                      <span style={{ color: "red" }}>
                        {" "}
                        {errors?.validation_errors?.total_stock[0]}{" "}
                      </span>
                    )}
                  </div>
                )}
              </div>
            </div>
          </form>
        </div>
      </div>
    </Container>
  );
};

export default New;
