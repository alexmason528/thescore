import React from 'react'
import { useSelector } from 'react-redux'
import { Card, Table } from 'antd'
import { selectRushingLoading, selectRushings } from 'store/modules/rushing'
import columns from './columns'

const Dashboard = () => {
  const rushings = useSelector(selectRushings)
  const isLoading = useSelector(selectRushingLoading)

  return (
    <Card className="dashboard">
      <Table
        dataSource={rushings}
        columns={columns}
        bordered
        loading={isLoading}
        scroll={{ x: true }}
      />
    </Card>
  )
}

export default Dashboard
