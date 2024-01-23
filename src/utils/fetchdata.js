import axios from 'axios'

async function getData() {
  try {
    const response = await axios.get('/src/data.json')
    const productRequests = response.data.productRequests
    return productRequests
  } catch (error) {
    console.error('Error fetching data:', error)
  }
}
export { getData }
