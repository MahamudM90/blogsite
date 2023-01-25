import './App.css';
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { RouterProvider } from 'react-router';
import router from '../src//router///routes'
const client = new ApolloClient({
  uri: "YOUR_HASURA_GRAPHQL_URL",
  cache: new InMemoryCache(),
});
function App() {
  return (
    <div  data-theme="lofi">
     <RouterProvider router={router} />
    </div>
  );
}

export default App;
