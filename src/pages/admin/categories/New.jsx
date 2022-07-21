import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { useNavigate } from 'react-router-dom';
import { addCategory } from '../../../actions/categories';
import { avatar } from '../../../assets/admin/images';
import Container from '../../../components/admin/Container';

const New = () => {
  const { loading, errors } = useSelector((state) => state.categories);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [image, setImage] = useState(avatar);
  const [inputs, setInputs] = useState({
    title: '',
    description: '',
    status: 1,
    photo: null,
  });

  const handleInputs = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]:
        e.target.name === 'status'
          ? parseInt(e.target.value)
          : e.target.name === 'photo'
          ? e.target.files[0]
          : e.target.value,
    });
  };

  const handleImage = (e) => {
    setImage(URL.createObjectURL(e.target.files[0]));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addCategory(inputs, navigate));
  };

  return (
    <Container
      title="New Category"
      subtitle="Welcome Admin, you have 12 pending orders"
      parent="Categories"
    >
      {loading && <div id="page-loader" className="show"></div>}
      <h2 className="content-heading">Add Category</h2>
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
                    <span style={{ color: 'red' }}>
                      {' '}
                      {errors?.validation_errors?.title[0]}{' '}
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
                    style={{ height: '180px' }}
                  ></textarea>
                  {errors?.validation_errors?.description && (
                    <span style={{ color: 'red' }}>
                      {' '}
                      {errors?.validation_errors?.description[0]}{' '}
                    </span>
                  )}
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
                    <span style={{ color: 'red' }}>
                      {' '}
                      {errors?.validation_errors?.status[0]}{' '}
                    </span>
                  )}
                </div>
                <div className="row mb-4">
                  <div className="col-md-10 col-xl-6">
                    <div className="push">
                      <img className="img-main-model" src={image} alt="" />
                    </div>
                    <div className="mb-4">
                      <label
                        className="form-label"
                        htmlFor="profile-settings-avatar"
                      >
                        Choose new image
                      </label>
                      <input
                        className="form-control"
                        type="file"
                        id="profile-settings-avatar"
                        name="photo"
                        onChange={(e) => {
                          handleInputs(e);
                          handleImage(e);
                        }}
                      />
                      {errors?.validation_errors?.photo && (
                        <span style={{ color: 'red' }}>
                          {' '}
                          {errors?.validation_errors?.photo[0]}{' '}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </Container>
  );
};

export default New;
