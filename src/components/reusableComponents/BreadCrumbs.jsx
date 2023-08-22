import React from 'react';
// import { styled } from 'styled-components';
import { HomeOutlined } from '@ant-design/icons';
import { Breadcrumb } from 'antd';
import { Link } from 'react-router-dom';

const BreadCrumbs = ({ secondLink, secondTitle, thirdTitle }) => {
  return (
    <>
      <Breadcrumb style={{ fontSize: '24px' }}>
        <Breadcrumb.Item>
          <Link to="/">
            <HomeOutlined style={{ fontSize: '24px' }} />
          </Link>
        </Breadcrumb.Item>
        {secondLink ? (
          <Breadcrumb.Item>
            <Link to={secondLink}>{secondTitle}</Link>
          </Breadcrumb.Item>
        ) : (
          <Breadcrumb.Item>{secondTitle}</Breadcrumb.Item>
        )}

        {thirdTitle && <Breadcrumb.Item>{thirdTitle}</Breadcrumb.Item>}
      </Breadcrumb>
    </>
  );
};

// SCC ========== VARIABLES STYLED COMPONENTS ========== //
// SCC ========== STYLED COMPONENTS ========== //
export default BreadCrumbs;
