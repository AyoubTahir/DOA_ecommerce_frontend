import React from 'react';

const StatusColumn = ({ item, column }) => {
  return (
    <td class="d-none d-sm-table-cell" style={{ padding: '24px 13px' }}>
      <span class={`badge ${item[column.field] ? 'bg-success' : 'bg-danger'}`}>
        {item[column.field] ? 'Active' : 'Disable'}
      </span>
    </td>
  );
};

export default StatusColumn;
