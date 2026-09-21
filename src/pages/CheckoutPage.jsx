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
    const [errors, setErrors] = useState({})


    const handleCheckout = (e) => {
        e.preventDefault()

        const newErrors = {}
        if (!fullName.trim()) {
            newErrors.fullName = "Full name is required"
        } else if (fullName.trim().length < 3) {
            newErrors.fullName = "Please enter a valid full name."
        } else if (!/^[a-zA-Z\s.'-']+$/.test(fullName)) {
            newErrors.fullName = "Full name must only contain letters"
        }

        if (!email.trim()) {
            newErrors.email = "Email is required"
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            newErrors.email = "Please enter a valid email address."
        }

        if (!phoneNumber.trim()) {
            newErrors.phoneNumber = "Phone number is required"
        } else if (!/^\d{10,11}$/.test(email)) {
            newErrors.phoneNumber = "Please number must contain 10 to 11 digits."
        }

        if (!deliveryAddress.trim()) {
            newErrors.deliveryAddress = "Delivery address is required"
        } else if (deliveryAddress.trim().length < 5) {
            newErrors.deliveryAddress = "Please enter a complete delivery address"
        }

        if (!paymentMethod) {
            newErrors.paymentMethod = "Please select a payment method."
        }

        setErrors(newErrors)

        if (Object.keys(newErrors).length > 0) {
            setMessage("Please correct the highlighted fields")
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
                                            maxLength={50}
                                            isInvalid={!!errors.fullName}
                                            onChange={(e) => {
                                                setFullName(e.target.value)

                                                if (errors.fullName) {
                                                    setErrors({
                                                        ...errors,
                                                        fullName: ""
                                                    })
                                                }
                                            }}
                                        />

                                        <Form.Control.Feedback type='invalid'>
                                            {errors.fullName}
                                        </Form.Control.Feedback>
                                    </Form.Group>

                                    <Form.Group className='mb-3'>
                                        <Form.Label>
                                            Email
                                        </Form.Label>

                                        <Form.Control
                                            type='email'
                                            placeholder='Enter your email'
                                            value={email}
                                            maxLength={100}
                                            isInvalid={!!errors.email}
                                            onChange={(e) => {
                                                setEmail(e.target.value)

                                                if (errors.email) {
                                                    setErrors({
                                                        ...errors,
                                                        email: ""
                                                    })
                                                }
                                            }}
                                        />

                                        <Form.Control.Feedback type='invalid'>
                                            {errors.email}
                                        </Form.Control.Feedback>
                                    </Form.Group>

                                    <Form.Group className='mb-3'>
                                        <Form.Label>
                                            Phone Number
                                        </Form.Label>

                                        <Form.Control
                                            type='tel'
                                            placeholder='Enter your phone number'
                                            value={phoneNumber}
                                            maxLength={11}
                                            isInvalid={!!errors.phoneNumber}
                                            onChange={(e) => {
                                                setPhoneNumber(e.target.value)

                                                if (errors.phoneNumber) {
                                                    setErrors({
                                                        ...errors,
                                                        phoneNumber: ""
                                                    })
                                                }
                                            }}
                                        />

                                        <Form.Control.Feedback type='invalid'>
                                            {errors.phoneNumber}
                                        </Form.Control.Feedback>
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
                                            maxLength={150}
                                            isInvalid={!!errors.deliveryAddress}
                                            onChange={(e) => {
                                                setDeliveryAddress(e.target.value)

                                                if (errors.deliveryAddress) {
                                                    setErrors({
                                                        ...errors,
                                                        deliveryAddress: ""
                                                    })
                                                }
                                            }}
                                        />

                                        <Form.Control.Feedback type='invalid'>
                                            {errors.deliveryAddress}
                                        </Form.Control.Feedback>
                                    </Form.Group>

                                    <Form.Group className='mb-3'>
                                        <Form.Label>
                                            Payment Method
                                        </Form.Label>

                                        <Form.Select
                                            value={paymentMethod}
                                            isInvalid={!!errors.paymentMethod}
                                            onChange={(e) => {
                                                setPaymentMethod(e.target.value)

                                                if (errors.paymentMethod) {
                                                    setErrors({
                                                        ...errors,
                                                        paymentMethod: ""
                                                    })
                                                }
                                            }}
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

                                        <Form.Control.Feedback type='invalid'>
                                            {errors.paymentMethod}
                                        </Form.Control.Feedback>
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
