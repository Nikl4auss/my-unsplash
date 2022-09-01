import { useState } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { trpc } from './utils/trpc'

function AppContent() {
  const { data, error, isLoading } = trpc.useQuery(['hello'])
  if (isLoading) return <p>Loading...</p>
  if (data) return <h1>{data}</h1>
  console.error(error)
  return (
    <h1>Hello World</h1>
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
