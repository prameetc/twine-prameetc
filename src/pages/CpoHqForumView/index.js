import React from "react";
import { Layout, Typography } from "antd";
import SiderView from "layout/Sider";

const { Title } = Typography;

const CpoHqForumView = () => {
  return (
    <Layout>
      <SiderView />
      <Layout style={{ padding: "0 24px 24px" }}>
        <Title level={1}>CPOHQ Forum</Title>
      </Layout>
    </Layout>
  );
};

export default CpoHqForumView;
