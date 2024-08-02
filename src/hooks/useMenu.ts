const CATEGORIES_URL =
  "https://oloapi.shift4payments.com/api/v2/public/159be0622ebd2df1f853b75c08601a94/menu/f1a877a0-6831-11ee-ae48-297681800ee0/categories"
const ITEMS_URL =
  "https://oloapi.shift4payments.com/api/v2/public/159be0622ebd2df1f853b75c08601a94/menu/f1a877a0-6831-11ee-ae48-297681800ee0/items"

interface Category {
  name: string
  description: string
  items: string[] // Assuming items is an array of item IDs
}

interface Item {
  ref: string
  name: string
  description: string
  price: number
  imageUrl800x800: string
}

interface MenuItem {
  id: string | undefined
  name: string | undefined
  description: string | undefined
  price: number | undefined
  imageUrl: string | undefined
}

interface Menu {
  [categoryName: string]: {
    description: string
    items: MenuItem[]
  }
}

export default async function useMenu(): Promise<Menu> {
  const categoriesResponse = await fetch(CATEGORIES_URL)
  const itemsResponse = await fetch(ITEMS_URL)
  const categoriesJson = await categoriesResponse.json()
  const itemsJson = await itemsResponse.json()
  const categories: Category[] = categoriesJson.categories
  const items: Item[] = itemsJson.items

  return (
    categories.reduce((acc: Menu, category: Category) => {
      acc[category.name] = {
        description: category.description,
        items: category.items.map((itemId) => {
          const item = items.find((item) => item.ref === itemId)
          return {
            id: item?.ref,
            name: item?.name,
            description: item?.description,
            price: item ? Number(item.price) / 100 : undefined,
            imageUrl: item?.imageUrl800x800,
          }
        }),
      }
      return acc
    }, {} as Menu) || {}
  )
}
