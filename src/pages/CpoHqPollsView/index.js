import React from "react";
import { Typography, Layout, Menu, Breadcrumb } from "antd";
import SiderView from "layout/Sider";

const { Content } = Layout;
const { Title } = Typography;

const CpoHqPollsView = () => {
  return (
    <div>
      <Layout>
        <SiderView />
        <Layout style={{ padding: "0 24px 24px" }}>
          <Title level={1}>CPOHQ Polls</Title>
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            Content
          </Content>
        </Layout>
      </Layout>
    </div>
  );
};

export default CpoHqPollsView;
