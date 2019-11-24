open ReasonUrql;

[@react.component]
let make =
    (
      ~id: string,
      ~name: string,
      ~imageUrl: string,
      ~likes: int,
      ~pats: int,
      ~treats: int,
      ~bellyscratches: int,
      ~description: string,
    ) => {
  // Example of using hooks with graphql_ppx_re (or graphql_ppx)
  <div className=DogStyles.container>
    <img src=imageUrl alt=name className=DogStyles.image />
    <h3 className=DogStyles.title> {j|$name|j}->React.string </h3>
    <div className=DogStyles.buttons>
      <EmojiButton
        emoji={j|👍|j}
        count={string_of_int(likes)}
        hex="48a9dc"
        onClick={_ => Js.log2("likes", likes) |> ignore}
      />
      <EmojiButton
        emoji={j|✋|j}
        count={string_of_int(pats)}
        hex="db4d3f"
        onClick={_ => Js.log2("pats", pats) |> ignore}
      />
      <EmojiButton
        emoji={j|🍖|j}
        count={string_of_int(treats)}
        hex="7b16ff"
        onClick={_ => Js.log2("Treats", treats) |> ignore}
      />
      // Example of using the Mutation component
      <EmojiButton
        emoji={j|🐾|j}
        count={string_of_int(bellyscratches)}
        hex="1bda2a"
        onClick={_ => Js.log2("bellyscratches", bellyscratches) |> ignore}
      />
    </div>
    <div> description->React.string </div>
  </div>;
};
