import React from 'react'
import { Provider } from 'react-redux'
import { store } from '../redux/store'
import { QueryClient, QueryClientProvider } from 'react-query'
import { reactQueryConfig } from '../config'

const ProviderApp = ({ children }) => {
  const queryClient = new QueryClient(reactQueryConfig)
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
          {children}
      </QueryClientProvider>
    </Provider>
  )
}

export default ProviderApp