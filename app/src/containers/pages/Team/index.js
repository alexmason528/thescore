import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Card, Table } from 'antd'
import {
  listTeam,
  selectTeams,
  selectRushingLoading,
} from 'store/modules/rushing'

const Team = () => {
  const teams = useSelector(selectTeams)
  const isLoading = useSelector(selectRushingLoading)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(listTeam())
  }, [dispatch])

  function getColumns() {
    return [
      {
        title: 'Team',
        dataIndex: 'team',
        key: 'team',
      },
      {
        title: 'Yds',
        dataIndex: 'yds',
        key: 'yds',
        sorter: true,
      },
      {
        title: 'Att',
        dataIndex: 'att',
        key: 'att',
        sorter: true,
      },
    ]
  }

  function handleTableChange(pagination, filters, sorter) {
    const { field, order } = sorter

    const params = field && order && { order_by: field, dir: order }

    dispatch(listTeam({ params }))
  }

  return (
    <Card className="dashboard">
      <Table
        dataSource={teams}
        columns={getColumns()}
        bordered
        loading={isLoading}
        rowKey="team"
        scroll={{ x: true, y: 550 }}
        onChange={handleTableChange}
      />
    </Card>
  )
}

export default Team
