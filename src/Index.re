open ReasonUrql;

// let client = Client.make(~url="https://formidadog-ql.now.sh", ());
open Aws;
let fetchOptions =
  Fetch.RequestInit.make(
    ~method_=Post,
    ~headers=
      Fetch.HeadersInit.make({
        "Content-Type": "application/json",
        "x-api-key": aws_config##aws_appsync_apiKey,
      }),
    (),
  );
let client =
  Client.make(
    ~url=aws_config##aws_appsync_graphqlEndpoint,
    ~fetchOptions=Client.FetchOpts(fetchOptions),
    (),
  );
ReactDOMRe.renderToElementWithId(
  <Provider value=client> <ColdStart />
   <Grid client />
   </Provider>,
  "root",
);