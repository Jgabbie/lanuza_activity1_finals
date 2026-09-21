import { useState } from 'react'
import { Card, Button, Form, Alert, Container, Row, Col } from 'react-bootstrap'
import "../App.css"


export default function CheckoutPage() {

    const [fullName, setFullName] = useState("")
    const [email, setEmail] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [deliveryAddress, setDeliveryAddress] = useState("")
    const [paymentMethod, setPaymentMethod] = useState("")
    const [message, setMessage] = useState("")


    const handleCheckout = (e) => {
        e.preventDefault()
        if (!fullName || !email || !phoneNumber || !deliveryAddress || !paymentMethod) {
            setMessage("Please complete all required fields.")
            return
        }

        setMessage("")

        const checkoutData = {
            fullName,
            email,
            phoneNumber,
            deliveryAddress,
            paymentMethod
        }

        console.log(checkoutData)

        alert("Order placed successfully!")
    }

    return (
        <div className='bg-gray-50 min-h-screen'>
            <Container className='py-5'>
                <div className='mb-4'>
                    <h1 className='text-3xl font-bold text-gray-900'>
                        Checkout
                    </h1>

                    <p className='text-gray-500'>
                        Enter your delivery and payment information
                    </p>
                </div>

                <Row className='justify-content-center'>
                    <Col xs={12} md={10} lg={8}>
                        <Card className='border-0 shadow-sm rounded-xl'>
                            <Card.Body className='p-4 p-md-5'>
                                {message && (
                                    <Alert variant='danger'>
                                        {message}
                                    </Alert>
                                )}

                                <Form onSubmit={handleCheckout}>
                                    <Form.Group className='mb-3'>
                                        <Form.Label>
                                            Full Name
                                        </Form.Label>

                                        <Form.Control
                                            type='text'
                                            placeholder='Enter your full name'
                                            value={fullName}
                                            onChange={(e) => setFullName(e.target.value)}
                                        />
                                    </Form.Group>

                                    <Form.Group className='mb-3'>
                                        <Form.Label>
                                            Email
                                        </Form.Label>

                                        <Form.Control
                                            type='email'
                                            placeholder='Enter your email'
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                    </Form.Group>

                                    <Form.Group className='mb-3'>
                                        <Form.Label>
                                            Phone Number
                                        </Form.Label>

                                        <Form.Control
                                            type='tel'
                                            placeholder='Enter your phone number'
                                            value={phoneNumber}
                                            onChange={(e) => setPhoneNumber(e.target.value)}
                                        />
                                    </Form.Group>

                                    <Form.Group className='mb-3'>
                                        <Form.Label>
                                            Delivery Address
                                        </Form.Label>

                                        <Form.Control
                                            as="textarea"
                                            rows={3}
                                            placeholder='Enter your complete delivery address'
                                            value={deliveryAddress}
                                            onChange={(e) => setDeliveryAddress(e.target.value)}
                                        />
                                    </Form.Group>

                                    <Form.Group className='mb-3'>
                                        <Form.Label>
                                            Payment Method
                                        </Form.Label>

                                        <Form.Select
                                            value={paymentMethod}
                                            onChange={(e) => setPaymentMethod(e.target.value)}
                                        >
                                            <option value="">
                                                Select payment method
                                            </option>

                                            <option value="Cash On Delivery">
                                                Cash On Delivery
                                            </option>

                                            <option value="GCash">
                                                GCash
                                            </option>

                                            <option value="Credit/Debit Card">
                                                Credit / Debit Card
                                            </option>
                                        </Form.Select>
                                    </Form.Group>

                                    <Button
                                        type='submit'
                                        size='lg'
                                        style={{
                                            backgroundColor: '#305797',
                                            borderColor: '#305797',
                                        }}
                                        className='w-100'
                                    >
                                        Place Order
                                    </Button>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
