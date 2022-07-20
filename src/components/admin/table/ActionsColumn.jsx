import React from 'react';

const ActionsColumn = ({ item, deleteItem }) => {
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
      <button
        class="link-fx text-dual"
        style={{ background: 'transparent', border: 'none' }}
      >
        <i class="fa fa-pen-to-square text-success"></i>
      </button>
    </td>
  );
};

export default ActionsColumn;
