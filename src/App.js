import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./Router/Routes/Routes";
import { ApolloClient, ApolloProvider } from "@apollo/client";
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

const client = new ApolloClient({
  link: new HttpLink({
    uri: "https://mahamud-blog.hasura.app/v1/graphql",
    headers: {
      "Content-Type": "application/json",
      "x-hasura-admin-secret": "1a2SvrcBRccTGnEaxUDoDDsrTLHybVd3skIRZGveJ7RE4P7imYv8TzbgQYV4fQP3",
    },
  }),
  cache: new InMemoryCache(),
}); 

function App() {
  return (
    <ApolloProvider client={client}>
      <div data-theme="winter">
        <RouterProvider router={router} />
      </div>
    </ApolloProvider>
  );
}

export default App;
