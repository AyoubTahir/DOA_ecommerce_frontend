import React from 'react';

const Record = ({ setRecord, setPage }) => {
  return (
    <div class="dropdown d-inline-block">
      <select
        class="form-select"
        id="example-select"
        name="example-select"
        onChange={(e) => {
          setRecord(e.target.value);
          setPage(1);
        }}
      >
        <option selected="" value={10}>
          10
        </option>
        <option value={25}>25</option>
        <option value={50}>50</option>
        <option value={100}>100</option>
      </select>
    </div>
  );
};

export default Record;
