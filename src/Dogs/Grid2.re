open ReasonUrql;
open Client;
open Decoder;
/* option(array(option(ReasonReactExamples.Decoder.dogJs))); */
// type items = option(array(option(ReasonReactExamples.Decoder.dog)));
// type listDogs = {listDogs: option(items)};
module GetAllDogs = [%graphql
  {|
  {
    listDogs {
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
  let processOptions = response => {
    open Belt.Option;

    let optionDogsJs =
      response##listDogs->flatMap(listDogs => listDogs##items);

    let dogsJs =
      switch (optionDogsJs) {
      | Some(dogs) =>
        dogs
        ->Belt.Array.keep(Belt.Option.isSome)
        ->Belt.Array.map(Belt.Option.getExn)
      | None => [||]
      };
    let dogs = dogsJs->Belt.Array.map(Decoder.makeDog);
    dogs;
  };
  React.useEffect1(
    () => {
      let query =
        Client.executeQuery(~client, ~request, ())
        |> Wonka.subscribe((. data) =>
             switch (data.response) {
             | Data(d) =>
               let dogs = d->processOptions;
               Js.log2("subscribe data", dogs);
               dispatch({
                 payload: {
                   dogs: dogs,
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