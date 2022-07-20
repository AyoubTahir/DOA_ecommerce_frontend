import { BASE_URL } from '../../../apis';

const ImageColumn = ({ item, column }) => {
  return (
    <td class="">
      <img
        class="img-avatar img-avatar48"
        src={`${BASE_URL}/${item[column.field]}`}
        alt=""
      />
    </td>
  );
};

export default ImageColumn;
