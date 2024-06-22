async function fetchGraphQL(query: string, preview = false): Promise<any> {
  return fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${
          preview
            ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
            : process.env.CONTENTFUL_ACCESS_TOKEN
        }`,
      },
      body: JSON.stringify({ query }),
      next: { tags: ["homePage"] },
    }
  ).then((response) => response.json())
}

export async function getHomePageData(): Promise<any> {
  const entry = await fetchGraphQL(
    `query {
      contentfulHomePage {
        videos {
          id
          url
        }

        promos {
          image {
            url
            title
          }
        }

        foodSpecials {
          id
          title
          image {
            file {
              url
            }
          }
          description {
            raw
          }
        }
      }
    }`,
    true
  )
  return entry
}
