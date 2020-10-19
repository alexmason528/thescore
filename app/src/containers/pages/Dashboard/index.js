import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Card, Input, Space, Table } from 'antd'
import { SearchOutlined, DownloadOutlined } from '@ant-design/icons'
import { API_BASE_URL } from 'config/base'
import {
  listRushing,
  selectRushingData,
  selectRushingLoading,
} from 'store/modules/rushing'

const Dashboard = () => {
  const rushingData = useSelector(selectRushingData)
  const isLoading = useSelector(selectRushingLoading)

  const dispatch = useDispatch()
  const [playerName, setPlayerName] = useState('')

  useEffect(() => {
    dispatch(listRushing())
  }, [dispatch])

  function handleTableChange(pagination, filters, sorter) {
    const { current, pageSize } = pagination
    const { player } = filters
    const { field, order } = sorter

    const params = Object.assign(
      {
        page: current,
        page_size: pageSize,
      },
      player && { player },
      field && order && { order_by: field, dir: order }
    )

    dispatch(listRushing({ params }))
    setPlayerName(player || '')
  }

  function handleDownload() {
    const params = playerName ? `?player=${playerName}` : ''
    const url = `${API_BASE_URL}/rushings.csv/${params}`

    const link = document.createElement('a')
    link.setAttribute('download', 'rushings.csv')
    link.href = url
    document.body.appendChild(link)
    link.click()
    link.remove()
  }

  function getColumnSearchProps(dataIndex) {
    return {
      filterDropdown: ({
        setSelectedKeys,
        selectedKeys,
        confirm,
        clearFilters,
      }) => (
        <div style={{ padding: 8 }}>
          <Input
            placeholder={`Search by ${dataIndex}`}
            value={selectedKeys[0]}
            onChange={(e) => {
              setSelectedKeys(e.target.value ? [e.target.value] : [])
            }}
            onPressEnter={confirm}
            style={{ width: 188, marginBottom: 8, display: 'block' }}
          />
          <Space>
            <Button
              type="primary"
              onClick={confirm}
              icon={<SearchOutlined />}
              size="small"
              style={{ width: 90 }}
            >
              Search
            </Button>
            <Button onClick={clearFilters} size="small" style={{ width: 90 }}>
              Reset
            </Button>
          </Space>
        </div>
      ),
      filterIcon: (filtered) => (
        <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />
      ),
    }
  }

  function getColumns() {
    return [
      {
        title: 'Player',
        dataIndex: 'player',
        key: 'player',
        ...getColumnSearchProps('player'),
      },
      {
        title: 'Team',
        dataIndex: 'team',
        key: 'team',
      },
      {
        title: 'Pos',
        dataIndex: 'pos',
        key: 'pos',
      },
      {
        title: 'Att/G',
        dataIndex: 'att_g',
        key: 'att_g',
      },
      {
        title: 'Att',
        dataIndex: 'att',
        key: 'att',
      },
      {
        title: 'Yds',
        dataIndex: 'yds',
        key: 'yds',
        sorter: true,
      },
      {
        title: 'Avg',
        dataIndex: 'avg',
        key: 'avg',
      },
      {
        title: 'Yds/G',
        dataIndex: 'yds_g',
        key: 'yds_g',
      },
      {
        title: 'TD',
        dataIndex: 'td',
        key: 'td',
        sorter: true,
      },
      {
        title: 'Lng',
        dataIndex: 'lng',
        key: 'lng',
        sorter: true,
      },
      {
        title: '1st',
        dataIndex: 'fir',
        key: 'fir',
      },
      {
        title: '1st%',
        dataIndex: 'first_percent',
        key: 'yds_g',
      },
      {
        title: '20+',
        dataIndex: 'twenty_plus',
        key: 'twenty_plus',
      },
      {
        title: '40+',
        dataIndex: 'forty_plus',
        key: 'forty_plus',
      },
      {
        title: 'FUM',
        dataIndex: 'fum',
        key: 'fum',
      },
    ]
  }

  return (
    <Card className="dashboard">
      <Button
        onClick={handleDownload}
        type="primary"
        icon={<DownloadOutlined />}
        style={{ marginBottom: 8, float: 'right' }}
      >
        Download
      </Button>

      <Table
        dataSource={rushingData.rushings}
        columns={getColumns()}
        bordered
        loading={isLoading}
        rowKey="id"
        scroll={{ x: true, y: 600 }}
        pagination={{
          total: rushingData.meta.total,
          pageSize: rushingData.meta.page_size,
          showTotal: (total) => `Total: ${total}`,
        }}
        onChange={handleTableChange}
      />
    </Card>
  )
}

export default Dashboard
