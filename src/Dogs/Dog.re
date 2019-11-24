open ReasonUrql;
module Mutations = {
  module LikeDog = [%graphql
    {|
    mutation LikeDog($key: ID!, $likes:Int) {
      updateDog(input:{key: $key,likes:$likes}) {
        likes
      }
    }
  |}
  ];
  module PatDog = [%graphql
    {|
    mutation PatDog($key: ID!,$pats:Int) {
        updateDog(input:{key: $key,pats:$pats}) {
          id
        pats
      }
    }
  |}
  ];
  let treatDog = {|
    mutation updateDog($input: {$key: ID!,$treatDog:Int}) {
        id
        treats
      }
  |};
  module BellyscratchDog = [%graphql
    {|
    mutation BellyscratchDog($key: ID!,$bellyscratches:Int) {
      updateDog(input:{key: $key,bellyscratches:$bellyscratches}) {
          id
          bellyscratches
      }
    }
  |}
  ];
};
// [@react.component]
// let make =
//     (
//       ~id: string,
//       ~name: string,
//       ~imageUrl: string,
//       ~likes: int,
//       ~pats: int,
//       ~treats: int,
//       ~bellyscratches: int,
//       ~description: string,
//     ) => {
//   let payload =
//     React.useMemo1(
//       () => {
//         let variables = Js.Dict.empty();
//         Js.Dict.set(variables, "key", Js.Json.string(id));
//         Js.Json.object_(variables);
//       },
//       [|id|],
//     );
//   // Example of using hooks with graphql_ppx_re (or graphql_ppx).
//   let (_, executeLikeMutation) =
//     Hooks.useMutation(~request=Mutations.LikeDog.make(~key=id, ()));
//   // Example of using hooks without graphql_ppx_re (or graphql_ppx).
//   let (_, executeTreatMutation) =
//     Hooks.useMutation(
//       ~request={
//         "query": Mutations.treatDog,
//         "variables": payload,
//         "parse": x => x,
//       },
//     );
//   /* Example of using hooks where the variables are only known when the
//      mutation runs. */
//   let (_, executePatMutation) =
//     Hooks.useDynamicMutation(
//       ~query=Mutations.PatDog.query,
//       ~parse=Mutations.PatDog.parse,
//     );
//   <div className=DogStyles.container>
//     <img src=imageUrl alt=name className=DogStyles.image />
//     <h3 className=DogStyles.title> {j|$name|j}->React.string </h3>
//     <div className=DogStyles.buttons>
//       <EmojiButton
//         emoji={j|👍|j}
//         count={string_of_int(likes)}
//         hex="48a9dc"
//         onClick={_ => executeLikeMutation() |> ignore}
//       />
//       <EmojiButton
//         emoji={j|✋|j}
//         count={string_of_int(pats)}
//         hex="db4d3f"
//         onClick={_ =>
//           executePatMutation(Mutations.PatDog.make(~key=id, ())) |> ignore
//         }
//       />
//       <EmojiButton
//         emoji={j|🍖|j}
//         count={string_of_int(treats)}
//         hex="7b16ff"
//         onClick={_ => executeTreatMutation() |> ignore}
//       />
//       // Example of using the Mutation component.
//       <Mutation request={Mutations.BellyscratchDog.make(~key=id, ())}>
//         ...{({executeMutation}) =>
//           <EmojiButton
//             emoji={j|🐾|j}
//             count={string_of_int(bellyscratches)}
//             hex="1bda2a"
//             onClick={_ => executeMutation() |> ignore}
//           />
//         }
//       </Mutation>
//     </div>
//     <div> description->React.string </div>
//   </div>;
// };
