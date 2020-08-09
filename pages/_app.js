import '../styles/index.css'

function MyApp({ Component, pageProps }) {
  return <SearchContext.Provider value={value}><Component {...pageProps} /></SearchContext.Provider>
}

export default MyApp
