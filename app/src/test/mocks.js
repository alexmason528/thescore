import { random } from 'lodash'

export const RushingMock = (id = 1) => ({
  id,
  player: `Player${id}`,
  team: `Team${id}`,
  pos: 'RB',
  att: random(1, 101),
  att_g: random(1, 10),
  yds: random(-25, 1700),
  avg: random(-3, 20, true),
  yds_g: random(-1, 110),
  td: random(0, 18),
  lng: random(-10, 85),
  touchdown: id % 2 === 0,
  fir: random(0, 90),
  first_percent: random(0, 100, true),
  twenty_plus: random(1, 10),
  forty_plus: random(1, 10),
  fum: random(0, 5),
  created_at: `2020-10-${random(1, 30)}T02:55:22.135Z`,
  updated_at: `2020-10-${random(1, 30)}T02:55:22.135Z`,
})

export const RushingMocks = (count) => {
  const rushings = []

  for (let i = 1; i <= count; i++) {
    rushings.push(RushingMock(i))
  }

  return rushings
}
