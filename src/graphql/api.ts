async function fetchGraphQL(query: string): Promise<any> {
  return fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN}`,
      },
      body: JSON.stringify({ query }),
      // next: { tags: ["homePage"] },
    }
  ).then((response) => response.json())
}

export async function getSiteData(): Promise<any> {
  const entry = await fetchGraphQL(
    `query {
      homePage(id: "4HNswoQNInE0eNfRqTld9h") {
        title
        videosCollection {
          items {
            ... on Asset {
              title
              url
            }
          }
        }
        promosCollection {
          items {
            ... on Promo {
              title
              image {
                url
              }
              url
            }
          }
        }
        foodSpecialsCollection {
          items {
            ... on FoodSpecials {
              title
              description {
                json
              }
              price
              image {
                url
              }
            }
          }
        }
      }
      asset(id: "3ir9gQNTvbOpUepfcBWO53") {
        url 
      }

      aboutUs(id: "3ll55D1xeDFfXWOCGvauCf") {
        content {
          json 
        }
      }
    }`
  )
  return entry
}
