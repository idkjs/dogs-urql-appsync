[@react.component]
let make = () => {
     <React.Suspense fallback={<div> {React.string("Loading...")} </div>}>
       <h1
         style={ReactDOMRe.Style.make(
           ~fontFamily="'Space Mono', monospace",
           ~fontSize="1rem",
           (),
         )}>
         "The deployed server is a Now instance booting from a cold start. Wait ~30 seconds after executing your first query to see results. After that, you should see updates instantly!"
         ->React.string
       </h1>
     </React.Suspense>;
};
