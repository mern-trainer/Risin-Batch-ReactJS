import { useEffect, useState } from "react"
import { useParams } from "react-router"
import { api } from "../axios"

const SingleProductPage = () => {

    const { product_id } = useParams()
    const [product, setProduct] = useState(null)
    const [currentImage, setCurrentImage] = useState("")

    const fetchProduct = async () => {
        try {
            const { data } = await api.get(`/products/${product_id}`)
            setProduct(data)
            setCurrentImage(data.images[0])
        } catch (error) {
            console.log(error);
        }
    }   

    useEffect(() => {
        fetchProduct()
    }, [product_id])

    return <div className="container-fluid">
        <div className="d-flex justify-content-center">
            <div className="w-100 d-flex">
                <div className="d-flex flex-column" style={{width: "100px"}}>
                    {
                        product?.images.map((image, index) => {
                            return <div>
                                <img onClick={() => setCurrentImage(image)}  src={image} alt="product images" className="w-100" style={{height: "100px", objectFit: "contain", cursor: "pointer"}}/>
                            </div>  
                        })
                    }  
                </div>
                <div className="d-flex justify-content-center w-100">
                    <img src={currentImage} alt={product?.title} style={{height: "500px"}} />
                </div>
            </div>
            <div className="w-100">
                <h3>{product?.title}</h3>
                <p>{product?.description}</p>
                <div className="d-flex gap-2">
                    <p>${product?.price}</p>
                    <p>${(product?.price - ( product?.price * (product?.discountPercentage / 100))).toFixed(2)}</p>
                </div>
            </div>
        </div>
    </div>
}

export default SingleProductPage