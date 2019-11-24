open ReasonUrql;
open Client;
open Decoder;
module GetAllDogs = [%graphql
  {|
  {
    listDogs  {
      items {
        id
        name
        breed
        color
        likes
        pats
        treats
        bellyscratches
        description
        imageUrl
      }
    }
  }
|}
];

let request = GetAllDogs.make();

type state = {dogs: array(dog)};

type action = {payload: state};

[@react.component]
let make = (~client: Client.t) => {
  let (state, dispatch) =
    React.useReducer(
      (_, action) => {dogs: action.payload.dogs},
      {dogs: [||]},
    );
  let test = response => {
    open Belt.Option;

    let deviceName = response##listDogs->flatMap(listDogs => listDogs##items);
    // switch (deviceName) {
    // | Some(dogs) => Js.log(dogs)
    // | None => Js.log("dogs")
    // };
    let dogsOption =
      switch (deviceName) {
      | Some(dogs) =>
        dogs
        ->Belt.Array.keep(Belt.Option.isSome)
        ->Belt.Array.map(Belt.Option.getExn)
      | None => [||]
      };
    // let listDogs = response##listDogs;
    let dogs = dogsOption->Belt.Array.map(Decoder.makeDog);
    dogs;
  };
  React.useEffect1(
    () => {
      let query =
        Client.executeQuery(~client, ~request, ())
        |> Wonka.subscribe((. data) =>
             switch (data.response) {
             | Data(d) =>
               Js.log2("data", data);
               let dogsd = d->test;
               dispatch({
                 payload: {
                   dogs: dogsd,
                 },
               });
             | _ => ()
             }
           );

      Some(query.unsubscribe);
    },
    [|client|],
  );
  <div>
    <ColdStart />
    <div className=GridStyles.grid>
      {Array.map(
         dog =>
           <DogItem
             key={dog.id}
             id={dog.id}
             name={dog.name}
             imageUrl={dog.imageUrl}
             likes={dog.likes}
             pats={dog.pats}
             treats={dog.treats}
             bellyscratches={dog.bellyscratches}
             description={dog.description}
           />,
         state.dogs,
       )
       ->React.array}
    </div>
  </div>;
};
