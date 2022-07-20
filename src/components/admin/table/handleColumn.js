import ActionsColumn from './ActionsColumn';
import DateColumn from './DateColumn';
import ImageColumn from './ImageColumn';
import StatusColumn from './StatusColumn';
import TextColumn from './TextColumn';

const handleColumn = (column, item, deleteItem) => {
  if (column.type === 'image') {
    return <ImageColumn item={item} column={column} />;
  } else if (column.type === 'date') {
    return <DateColumn item={item} column={column} />;
  } else if (column.type === 'status') {
    return <StatusColumn item={item} column={column} />;
  } else if (column.type === 'actions') {
    return <ActionsColumn item={item} deleteItem={deleteItem} />;
  } else {
    return <TextColumn item={item} column={column} />;
  }
};

export default handleColumn;
