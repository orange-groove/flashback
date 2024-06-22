export type Promotion = {
  id: string
  title: string
  description: string
  image: {
    url: string
    title: string
  }
}

export type Event = {
  id: string
  title: string
  description: string
  date: string
  location: string
}

export type FoodSpecial = {
  id: string
  title: string
  description: {
    json: string
  }
  price: number
  image: {
    url: string
  }
}

export type Video = {
  title: string
  url: string
}
