import React from 'react'
import { Layout } from 'antd'

const { Header, Content, Footer } = Layout

const MainLayout = ({ children }) => (
  <Layout className="page">
    <Header className="header"></Header>
    <Content className="content">{children}</Content>
    <Footer className="footer">The Score</Footer>
  </Layout>
)
export default MainLayout
