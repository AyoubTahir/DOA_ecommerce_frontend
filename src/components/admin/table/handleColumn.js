import ActionsColumn from './ActionsColumn';
import DateColumn from './DateColumn';
import ImageColumn from './ImageColumn';
import StatusColumn from './StatusColumn';
import TextColumn from './TextColumn';

const handleColumn = (column, item, deleteItem, editLink, index) => {
  if (column.type === 'image') {
    return <ImageColumn item={item} column={column} key={`a-${index}`} />;
  } else if (column.type === 'date') {
    return <DateColumn item={item} column={column} key={`a-${index}`} />;
  } else if (column.type === 'status') {
    return <StatusColumn item={item} column={column} key={`a-${index}`} />;
  } else if (column.type === 'actions') {
    return (
      <ActionsColumn
        item={item}
        deleteItem={deleteItem}
        editLink={editLink}
        key={`a-${index}`}
      />
    );
  } else {
    return <TextColumn item={item} column={column} key={`a-${index}`} />;
  }
};

export default handleColumn;
