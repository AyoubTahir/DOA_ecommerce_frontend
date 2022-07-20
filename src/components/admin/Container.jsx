import React from 'react';
import Header from '../admin/Header';

const Container = ({ children, title, subtitle, current, parent }) => {
  return (
    <>
      <Header
        title={title}
        subtitle={subtitle}
        current={current}
        parent={parent}
      />
      <div className="content">{children}</div>
    </>
  );
};

export default Container;
