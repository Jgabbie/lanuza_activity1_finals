import { Card, Button } from 'react-bootstrap'
import "../App.css"

export default function ProductPage({ product, onBack, addToCart }) {
    if (!product) {
        return (
            <div className='container py-5'>
                <h3>
                    No product selected.
                </h3>
            </div>
        )
    }


    return (
        <div className='container py-5'>
            <Button
                className='mb-4'
                onClick={onBack}
                style={{
                    backgroundColor: '#305797',
                    borderColor: '#305797'
                }}
            >
                Back to Products
            </Button>
            <div className='row g-4 align-items-start'>
                <div className='col-md-6'>
                    <img
                        src={product.image}
                        alt={product.name}
                        className='w-100 rounded shadow-sm'
                        style={{
                            height: "400px",
                            objectFit: "cover"
                        }}
                    />
                </div>

                <div className='col-md-6'>
                    <Card className='border-0 shadow-sm rounded-xl'>
                        <Card.Body className='p-4'>
                            <p className='text-primary fw-semibold mb-2'>
                                {product.category}
                            </p>

                            <h2 className='fw-bold'>
                                {product.name}
                            </h2>

                            <h3 className='mt-3'>
                                PHP {product.price}
                            </h3>

                            <p className={product.stock > 0 ? "text-success" : "text-danger"}>
                                {product.stock > 0 ? `${product.stock} items available` : "Out of Stock"}
                            </p>

                            <hr />

                            <p className='text-muted'>
                                {product.description || "No description available for this product"}

                            </p>

                            <Button
                                size='lg'
                                className='w-100'
                                style={{
                                    backgroundColor: '#305797',
                                    borderColor: '#305797'
                                }}
                                disabled={product.stock === 0}
                                onClick={() => addToCart(product)}
                            >
                                {product.stock > 0 ? "Add to Cart" : "Out of Stcok"}
                            </Button>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    )
}
