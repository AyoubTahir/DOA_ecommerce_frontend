import React from 'react';

const Search = ({ setSearch }) => {
  return (
    <div class="block-content bg-body-light">
      <form>
        <div class="mb-4">
          <div class="input-group">
            <input
              type="text"
              class="form-control"
              placeholder="Search products.."
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            />
            <button type="submit" class="btn btn-primary">
              <i class="fa fa-search"></i>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Search;
