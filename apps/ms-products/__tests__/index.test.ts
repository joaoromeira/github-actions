import { getProducts } from "../index";

test('Get sales', async () => {
  expect(getProducts()).toMatchObject([
    {
      id: 1,
      product: 'Iphone 12'
    }
  ])
})