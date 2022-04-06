import { getUsers } from "../index";

test('Get users', async () => {
  expect(getUsers()).toMatchObject([
    {
      id: 1,
      name: 'João'
    }
  ])
})