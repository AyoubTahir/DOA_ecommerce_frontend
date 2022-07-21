import React from 'react';
import { Link } from 'react-router-dom';

const ActionsColumn = ({ item, deleteItem, editLink }) => {
  return (
    <td class="text-end" style={{ padding: '24px 17px' }}>
      <button
        class="link-fx text-dual"
        style={{
          background: 'transparent',
          border: 'none',
          marginRight: '5px',
        }}
        onClick={() => {
          deleteItem(item.id);
        }}
      >
        <i class="fa fa-trash-can text-danger"></i>
      </button>
      <Link
        to={`${editLink}/${item.id}`}
        class="link-fx text-dual"
        style={{ background: 'transparent', border: 'none' }}
      >
        <i class="fa fa-pen-to-square text-success"></i>
      </Link>
    </td>
  );
};

export default ActionsColumn;
