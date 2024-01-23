import { createContext, useState, useContext, useEffect } from 'react'
import { useQuery } from '@tanstack/react-query'
import { getData } from '../utils/fetchdata'

const DataContext = createContext()

export const DataProvider = ({ children }) => {
  const [clickedStates, setClickedStates] = useState({
    All: true,
    UI: false,
    UX: false,
    Enhancement: false,
    Bug: false,
    Feature: false,
  })

  const { isLoading, data, error } = useQuery({
    queryKey: ['ProductRequests'],
    queryFn: getData,
  })
  const [sortCategory, setSortCategory] = useState([
    { name: 'Most Upvotes', border: true, checked: true },
    { name: 'Least Upvotes', border: true, checked: false },
    { name: 'Most Comments', border: true, checked: false },
    { name: 'Least Comments', border: false, checked: false },
  ])

  const [sortedData, setSortedData] = useState([])

  useEffect(() => {
    if (data) {
      const newSortedData = data.slice().sort((a, b) => {
        const selectedCategory = sortCategory.find((el) => el.checked)
        switch (selectedCategory?.name) {
          case 'Most Upvotes':
            return (b.upvotes || 0) - (a.upvotes || 0)
          case 'Least Upvotes':
            return (a.upvotes || 0) - (b.upvotes || 0)
          case 'Most Comments':
            return (b.comments?.length || 0) - (a.comments?.length || 0)
          case 'Least Comments':
            return (a.comments?.length || 0) - (b.comments?.length || 0)
          default:
            return 0
        }
      })

      const dataKey =
        Object.keys(clickedStates).find((key) => clickedStates[key] === true) ||
        null

      const filteredData = newSortedData.filter((item) => {
        return item.category.toLowerCase() === dataKey.toLowerCase()
      })

      if (dataKey === 'All') {
        updateSortedData(newSortedData)
      } else {
        updateSortedData(filteredData)
      }
    }
  }, [data, sortCategory, clickedStates])

  const updateSortCategory = (newSortCategory) => {
    setSortCategory(newSortCategory)
  }

  const updateSortedData = (newSortedData) => {
    setSortedData(newSortedData)
  }

  return (
    <DataContext.Provider
      value={{
        clickedStates,
        setClickedStates,
        sortCategory,
        setSortCategory,
        sortedData,
        updateSortCategory,
        updateSortedData,
        isLoading,
        data,
        error,
      }}
    >
      {children}
    </DataContext.Provider>
  )
}

export const useDataContext = () => useContext(DataContext)
