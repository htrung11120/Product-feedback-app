import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Suggestion from './pages/Suggestion'
import './index.css'
import Detail from './pages/Detail'
import { DataProvider } from './context/DataContext'
import SingleCommentCard from './components/SingleCommentCard'
import AddFeedBack from './components/AddFeedBack'

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
        path: 'comment',
        element: <Detail />,
        children: [{ path: ':id', element: <SingleCommentCard /> }],
      },
    ],
  },
  {
    path: 'new',
    element: <AddFeedBack />,
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
