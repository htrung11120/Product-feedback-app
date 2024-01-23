import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Suggestion from './pages/Suggestion'
import './index.css'
import Detail from './pages/Detail'
import { DataProvider } from './context/DataContext'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
    },
  },
})
const router = createBrowserRouter([
  {
    path: '/',
    children: [
      {
        element: <Suggestion />,
        index: true,
      },
      {
        path: 'detail',
        element: <Detail />,
        children: [{ path: ':id', element: <p>asdas</p> }],
      },
    ],
  },
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <DataProvider>
        <RouterProvider router={router} />
        <ReactQueryDevtools initialIsOpen={false} />
      </DataProvider>
    </QueryClientProvider>
  </React.StrictMode>
)
