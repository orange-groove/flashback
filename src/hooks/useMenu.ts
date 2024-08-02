const CATEGORIES_URL =
  "https://oloapi.shift4payments.com/api/v2/public/159be0622ebd2df1f853b75c08601a94/menu/f1a877a0-6831-11ee-ae48-297681800ee0/categories"
const ITEMS_URL =
  "https://oloapi.shift4payments.com/api/v2/public/159be0622ebd2df1f853b75c08601a94/menu/f1a877a0-6831-11ee-ae48-297681800ee0/items"

export default async function useMenu() {
  const categoriesResponse = await fetch(CATEGORIES_URL)
  const itemsResponse = await fetch(ITEMS_URL)
  const categoriesJson = await categoriesResponse.json()
  const itemsJson = await itemsResponse.json()
  const categories = categoriesJson.categories
  const items = itemsJson.items

  return (
    categories.reduce((acc, category) => {
      acc[category.name] = {
        description: category.description,
        items: category.items.map((itemId) => {
          const item = items.find((item) => item.ref === itemId)
          return {
            id: item.ref,
            name: item.name,
            description: item.description,
            price: item.price / 100,
            imageUrl: item.imageUrl800x800,
          }
        }),
      }
      return acc
    }, {}) || {}
  )
}
