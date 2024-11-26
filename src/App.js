import { Provider } from "./components/ui/provider"
import loginPage from "./pages/accounts/loginPage"

function App({ Component, pageProps }) {
  return (
    <Provider>
      <Component {...pageProps} />
      <loginPage />
    </Provider>
  )
}

export default App;
