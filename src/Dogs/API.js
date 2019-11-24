/* @flow */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateDogInput = {|
  key: string,
  name: string,
  breed: string,
  color: string,
  imageUrl: string,
  description: string,
  likes: number,
  pats: number,
  treats: number,
  bellyscratches: number,
|};

export type UpdateDogInput = {|
  key?: ?string,
  name?: ?string,
  breed?: ?string,
  color?: ?string,
  imageUrl?: ?string,
  description?: ?string,
  likes?: ?number,
  pats?: ?number,
  treats?: ?number,
  bellyscratches?: ?number,
|};

export type DeleteDogInput = {|
  id?: ?string,
|};

export type ModelDogFilterInput = {|
  key?: ?ModelStringFilterInput,
  name?: ?ModelStringFilterInput,
  breed?: ?ModelStringFilterInput,
  color?: ?ModelStringFilterInput,
  imageUrl?: ?ModelStringFilterInput,
  description?: ?ModelStringFilterInput,
  likes?: ?ModelIntFilterInput,
  pats?: ?ModelIntFilterInput,
  treats?: ?ModelIntFilterInput,
  bellyscratches?: ?ModelIntFilterInput,
  and?: ?Array< ?ModelDogFilterInput >,
  or?: ?Array< ?ModelDogFilterInput >,
  not?: ?ModelDogFilterInput,
|};

export type ModelStringFilterInput = {|
  ne?: ?string,
  eq?: ?string,
  le?: ?string,
  lt?: ?string,
  ge?: ?string,
  gt?: ?string,
  contains?: ?string,
  notContains?: ?string,
  between?: ?Array< ?string >,
  beginsWith?: ?string,
|};

export type ModelIntFilterInput = {|
  ne?: ?number,
  eq?: ?number,
  le?: ?number,
  lt?: ?number,
  ge?: ?number,
  gt?: ?number,
  contains?: ?number,
  notContains?: ?number,
  between?: ?Array< ?number >,
|};

export type CreateDogMutationVariables = {|
  input: CreateDogInput,
|};

export type CreateDogMutation = {|
  createDog: ? {|
    __typename: "Dog",
    key: string,
    name: string,
    breed: string,
    color: string,
    imageUrl: string,
    description: string,
    likes: number,
    pats: number,
    treats: number,
    bellyscratches: number,
  |},
|};

export type UpdateDogMutationVariables = {|
  input: UpdateDogInput,
|};

export type UpdateDogMutation = {|
  updateDog: ? {|
    __typename: "Dog",
    key: string,
    name: string,
    breed: string,
    color: string,
    imageUrl: string,
    description: string,
    likes: number,
    pats: number,
    treats: number,
    bellyscratches: number,
  |},
|};

export type DeleteDogMutationVariables = {|
  input: DeleteDogInput,
|};

export type DeleteDogMutation = {|
  deleteDog: ? {|
    __typename: "Dog",
    key: string,
    name: string,
    breed: string,
    color: string,
    imageUrl: string,
    description: string,
    likes: number,
    pats: number,
    treats: number,
    bellyscratches: number,
  |},
|};

export type GetDogQueryVariables = {|
  id: string,
|};

export type GetDogQuery = {|
  getDog: ? {|
    __typename: "Dog",
    key: string,
    name: string,
    breed: string,
    color: string,
    imageUrl: string,
    description: string,
    likes: number,
    pats: number,
    treats: number,
    bellyscratches: number,
  |},
|};

export type ListDogsQueryVariables = {|
  filter?: ?ModelDogFilterInput,
  limit?: ?number,
  nextToken?: ?string,
|};

export type ListDogsQuery = {|
  listDogs: ? {|
    __typename: "ModelDogConnection",
    items: ? Array<? {|
      __typename: string,
      key: string,
      name: string,
      breed: string,
      color: string,
      imageUrl: string,
      description: string,
      likes: number,
      pats: number,
      treats: number,
      bellyscratches: number,
    |} >,
    nextToken: ?string,
  |},
|};

export type OnCreateDogSubscription = {|
  onCreateDog: ? {|
    __typename: "Dog",
    key: string,
    name: string,
    breed: string,
    color: string,
    imageUrl: string,
    description: string,
    likes: number,
    pats: number,
    treats: number,
    bellyscratches: number,
  |},
|};

export type OnUpdateDogSubscription = {|
  onUpdateDog: ? {|
    __typename: "Dog",
    key: string,
    name: string,
    breed: string,
    color: string,
    imageUrl: string,
    description: string,
    likes: number,
    pats: number,
    treats: number,
    bellyscratches: number,
  |},
|};

export type OnDeleteDogSubscription = {|
  onDeleteDog: ? {|
    __typename: "Dog",
    key: string,
    name: string,
    breed: string,
    color: string,
    imageUrl: string,
    description: string,
    likes: number,
    pats: number,
    treats: number,
    bellyscratches: number,
  |},
|};