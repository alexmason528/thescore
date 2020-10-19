import React from 'react'
import { Layout } from 'antd'

const { Header, Content, Footer } = Layout

const MainLayout = ({ children }) => (
  <Layout className="page">
    <Header className="header">
      <img className="logo" src="logo.svg" alt="Logo" />
    </Header>
    <Content className="content">{children}</Content>
    <Footer className="footer">
      <a
        href="https://www.thescore.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        theScore.com
      </a>
    </Footer>
  </Layout>
)
export default MainLayout
