import React from 'react';
import { HomeOutlined } from '@ant-design/icons';
import { Breadcrumb } from 'antd';
import { Link } from 'react-router-dom';

const BreadCrumbs = ({ secondLink, secondTitle, thirdTitle }) => {
  const items = [
    {
      title: (
        <Link to="/" style={{ height: 0 }}>
          <HomeOutlined style={{ fontSize: '24px' }} />
        </Link>
      ),
    },
    secondLink
      ? {
          title: (
            <Link to={secondLink} style={{ height: 0 }}>
              {secondTitle}
            </Link>
          ),
        }
      : { title: secondTitle },
    thirdTitle ? { title: thirdTitle } : { title: '' },
  ];

  return (
    <Breadcrumb Breadcrumb style={{ fontSize: '24px' }}>
      {items.map((item, index) => (
        <Breadcrumb.Item key={index}>{item.title}</Breadcrumb.Item>
      ))}
    </Breadcrumb>
  );
};

export default BreadCrumbs;
