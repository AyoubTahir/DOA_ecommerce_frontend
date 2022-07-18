import moment from 'moment';
import { BASE_URL } from '../../../apis';

const handleColumn = (column, item, deleteItem) => {
  if (column.type === 'image') {
    return (
      <td class="">
        <img
          class="img-avatar img-avatar48"
          src={`${BASE_URL}/${item[column.field]}`}
          alt=""
        />
      </td>
    );
  } else if (column.type === 'date') {
    return (
      <td class="d-none d-sm-table-cell" style={{ padding: '24px 13px' }}>
        {moment(item[column.field]).utc().format('YYYY-MM-DD')}
      </td>
    );
  } else if (column.type === 'status') {
    return (
      <td class="d-none d-sm-table-cell" style={{ padding: '24px 13px' }}>
        <span class="badge bg-success">{item[column.field]}</span>
      </td>
    );
  } else if (column.type === 'actions') {
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
  } else {
    return (
      <td class="d-none d-sm-table-cell" style={{ padding: '24px 13px' }}>
        {item[column.field]}
      </td>
    );
  }
};

export default handleColumn;
