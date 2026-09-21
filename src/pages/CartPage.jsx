import { Card, Button, Container, Row, Col } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import "../App.css"

export default function CartPage({ cartItems, setCartItems }) {

    const navigate = useNavigate()

    const increaseQuantity = (id) => {
        const updatedCart = cartItems.map((item) => {
            if (item.id === id) {
                return {
                    ...item, quantity: item.quantity + 1
                }
            }
            return item
        })

        setCartItems(updatedCart)
    }

    const decreaseQuantity = (id) => {
        const updatedCart = cartItems.map((item) => {
            if (item.id === id && item.quantity > 1) {
                return {
                    ...item, quantity: item.quantity - 1
                }
            }
            return item
        })

        setCartItems(updatedCart)
    }

    const removeItem = (id) => {
        const updatedCart = cartItems.filter(
            (item) => item.id !== id
        )

        setCartItems(updatedCart)
    }

    const subtotal = cartItems.reduce((total, item) => {
        return total + item.price * item.quantity
    }, 0)

    const total = subtotal

    return (
        <div className='bg-gray-50 min-h-screen'>
            <Container className='py-5'>
                <h1 className='text-3xl font-bold mb-4'>
                    Shopping Cart
                </h1>

                {cartItems.length === 0 ? (
                    <Card className='border-0 shadow-sm'>
                        <Card.Body className='text-center py-5'>
                            <h4>
                                Your cart is empty
                            </h4>

                            <p className='text-muted'>
                                Add products to your cart to see them here.
                            </p>
                        </Card.Body>
                    </Card>
                ) :
                    (
                        <Row className='g-4'>
                            <Col xs={12} lg={8}>
                                {cartItems.map((item) => (
                                    <Card key={item.id} className='border-0 shadow-sm mb-3'>
                                        <Card.Body>
                                            <Row className='align-items-center'>
                                                <Col xs={12} sm={3}>
                                                    <img
                                                        src={item.image}
                                                        alt={item.name}
                                                        className='w-100 rounded'
                                                        style={{ height: "120px", objectFit: "cover" }}
                                                    />
                                                </Col>

                                                <Col xs={12} sm={3}>
                                                    <h5 className='fw-bold'>
                                                        {item.name}
                                                    </h5>

                                                    <p className='text-muted mb-1'>
                                                        {item.category}
                                                    </p>

                                                    <p className='fw-semibold mb-0'>
                                                        PHP {item.price}
                                                    </p>
                                                </Col>

                                                <Col xs={12} sm={3}>
                                                    <p className='mb-2'>
                                                        Quantity
                                                    </p>

                                                    <div className='d-flex align-items-center gap-2'>
                                                        <Button
                                                            size='sm'
                                                            style={{
                                                                backgroundColor: 'transparent',
                                                                borderColor: '#305797',
                                                                color: '#305797'
                                                            }}
                                                            onClick={() => decreaseQuantity(item.id)}
                                                            disabled={item.quantity === 1}
                                                        >
                                                            -
                                                        </Button>

                                                        <span className='px-2 fw-bold'>
                                                            {item.quantity}
                                                        </span>

                                                        <Button
                                                            size='sm'
                                                            style={{
                                                                backgroundColor: 'transparent',
                                                                borderColor: '#305797',
                                                                color: '#305797'
                                                            }}
                                                            onClick={() => increaseQuantity(item.id)}
                                                            disabled={item.quantity >= item.stock}
                                                        >
                                                            +
                                                        </Button>
                                                    </div>
                                                </Col>


                                                <Col xs={12} lg={2}>
                                                    <p className='fw-bold mb-2'>
                                                        PHP {(item.price * item.quantity)}
                                                    </p>

                                                    <Button
                                                        variant='danger'
                                                        size='sm'
                                                        onClick={() => removeItem(item.id)}
                                                    >
                                                        Remove
                                                    </Button>
                                                </Col>
                                            </Row>
                                        </Card.Body>
                                    </Card>
                                ))}
                            </Col>

                            <Col xs={12} lg={4}>
                                <Card className='border-0 shadow-sm'>
                                    <Card.Body className='p-4'>
                                        <h4 className='fw-bold mb-4'>
                                            Order Summary
                                        </h4>

                                        <div className='d-flex justify-content-between mb-3'>
                                            <span>Subtotal</span>
                                            <span>
                                                PHP {subtotal}
                                            </span>
                                        </div>

                                        <hr />

                                        <div className='d-flex justify-content-between mb-4'>
                                            <h5 className='fw-bold'>
                                                Total
                                            </h5>

                                            <h5 className='fw-bold'>
                                                PHP {total}
                                            </h5>
                                        </div>

                                        <Button
                                            size='lg'
                                            className='w-100'
                                            style={{
                                                backgroundColor: 'transparent',
                                                borderColor: '#305797',
                                                color: '#305797'
                                            }}
                                            onClick={() => navigate("/checkout")}
                                        >
                                            Proceed to Checkout
                                        </Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    )}
            </Container>
        </div>
    )
}
