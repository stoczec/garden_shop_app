import React from 'react';
import { HomeOutlined } from '@ant-design/icons';
import { Breadcrumb } from 'antd';
import { Link } from 'react-router-dom';

const BreadCrumbs = ({ secondLink, secondTitle, thirdTitle }) => {
  return (
    <Breadcrumb
      style={{ fontSize: '24px' }}
      items={[
        {
          title: (
            <Link to="/">
              <HomeOutlined style={{ fontSize: '24px' }} />
            </Link>
          ),
        },
        secondLink
          ? {
              title: <Link to={secondLink}>{secondTitle}</Link>,
            }
          : { title: secondTitle },
        thirdTitle ? { title: thirdTitle } : { title: '' },
      ]}
    />
  );
};

export default BreadCrumbs;
