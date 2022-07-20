import moment from 'moment';

const DateColumn = ({ item, column }) => {
  return (
    <td class="d-none d-sm-table-cell" style={{ padding: '24px 13px' }}>
      {moment(item[column.field]).utc().format('YYYY-MM-DD')}
    </td>
  );
};

export default DateColumn;
