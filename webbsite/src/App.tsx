import React from 'react'
import HomePage from './page/HomePage/HomePage'
import "./style/app/Index.scss"
import { QueryClient, QueryClientProvider } from 'react-query'

function App() {
const queryClient = new QueryClient()

  return (
    <div>
    <QueryClientProvider client={queryClient}>

      <HomePage/>
      </QueryClientProvider>
    </div>
  )
}

export default App