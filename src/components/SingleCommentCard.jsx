import { useDataContext } from '../context/DataContext'
import CurrentComents from './CurrentComents'
import ProductRequestCard from './ProductRequestCard'
import { useParams } from 'react-router-dom'

export default function SingleCommentCard() {
  const { id } = useParams()
  const { sortedData, isLoading, error } = useDataContext()
  const postData = sortedData?.find((el) => el.id === parseInt(id))
  const commentData = postData?.comments
  if (isLoading) {
    return <div>Loading...</div>
  }

  if (error) {
    11
    return <div>Error: {error.message}</div>
  }

  return (
    <div>
      <ProductRequestCard
        sortedData={[postData]}
        isLoading={isLoading}
        error={error}
      />

      <CurrentComents
        commentData={commentData}
        isLoading={isLoading}
        error={error}
      />
    </div>
  )
}
