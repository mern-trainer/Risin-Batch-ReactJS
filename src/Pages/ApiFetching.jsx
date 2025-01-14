import { useEffect, useState } from "react"
import { api } from "../axios"

const ApiFetching = () => {

    const [products, setProducts] = useState([])
    const [isPending, setPending] = useState(true)

    const fetchData = async () => {
        // const response = await fetch("https://dummyjson.com/products")
        // const result = await response.json()
        const response = await api.get("/products")
        setProducts(response.data.products)
        setPending(false)
    }

    useEffect(() => {
        fetchData()
    }, [])

    return <div>
        {
            isPending && <div>Loading...</div>
        }
        {
            !isPending && products.map(product => {
                return <div key={product.id}>{product.title}</div>
            })
        }
    </div>
}

export default ApiFetching