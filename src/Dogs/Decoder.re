type dog = {
  id: string,
  name: string,
  color: string,
  breed: string,
  likes: int,
  pats: int,
  treats: int,
  bellyscratches: int,
  description: string,
  imageUrl: string,
};
type dogJs = {
  .
  "id": string,
  "name": string,
  "color": string,
  "breed": string,
  "likes": int,
  "pats": int,
  "treats": int,
  "bellyscratches": int,
  "description": string,
  "imageUrl": string,
};

let makeDog: dogJs => dog =
  data => {
    id: data##id,
    name: data##name,
    color: data##color,
    breed: data##breed,
    likes: data##likes,
    pats: data##pats,
    treats: data##treats,
    bellyscratches: data##bellyscratches,
    description: data##description,
    imageUrl: data##imageUrl,
  };
