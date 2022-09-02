import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { useState } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { trpc } from './utils/trpc'
import NavBar from './components/NavBar'

function AppContent() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<NavBar />}>

        </Route>
      </Routes>
    </Router>
  )
}

export function App() {

  const [queryClient] = useState(() => new QueryClient())
  const [trpcClient] = useState(() => trpc.createClient({
    url: 'http://localhost:3000/trpc'
  }))

  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        <AppContent />
      </QueryClientProvider>
    </trpc.Provider>
  )
}

export default App
