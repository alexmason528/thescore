export default [
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
    render: (lng, record) => `${lng}${record.touchdown ? 'T' : ''}`,
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
