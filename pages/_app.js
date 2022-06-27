import '../styles/globals.css'
import Layout from '../components/Layout'
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider
} from "@apollo/client";

function MyApp({ Component, pageProps }) {
  const client = new ApolloClient({
    uri: 'https://swift-sprint.testingnow.me/graphql',
    cache: new InMemoryCache()
  });

  return (
    <ApolloProvider client={client}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  )
}

export default MyApp
