import React from 'react';

const TextColumn = ({ item, column }) => {
  return (
    <td class="d-none d-sm-table-cell" style={{ padding: '24px 13px' }}>
      {column.relation
        ? item[column.relation][column.field]
        : item[column.field]}
    </td>
  );
};

export default TextColumn;
