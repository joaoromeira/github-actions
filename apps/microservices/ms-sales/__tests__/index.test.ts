import { getSales } from "../index";

test('Get sales', async () => {
  expect(getSales()).toMatchObject([
    {
      id: 1,
      product: 1,
      user: 1
    }
  ])
})