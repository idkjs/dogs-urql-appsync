// @flow
// this is an auto generated file. This will be overwritten

export const getDog = `query GetDog($id: ID!) {
  getDog(id: $id) {
    key
    name
    breed
    color
    imageUrl
    description
    likes
    pats
    treats
    bellyscratches
  }
}
`;
export const listDogs = `query ListDogs($filter: ModelDogFilterInput, $limit: Int, $nextToken: String) {
  listDogs(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      key
      name
      breed
      color
      imageUrl
      description
      likes
      pats
      treats
      bellyscratches
    }
    nextToken
  }
}
`;
