import { useState } from 'react'
import { Card, Form, Button, Pagination, Container, Row, Col } from 'react-bootstrap'
import "../App.css"
import ProductPage from './ProductPage'

export default function HomePage({ cartItems, setCartItems }) {
    const products = [
        {
            id: 1,
            name: "Misaka Mikoto Figurine",
            description: "A Misaka Mikoto Figurine from the series called 'A certain magical index' and 'A certain scientific railgun' ",
            category: "Figures",
            price: "7500",
            stock: 4,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-efYVglc8xhfTs6kEHbULFJ38t4XZjq4_auUZgVwLXUsrr1HYWUAUrKQ&s=10"
        },
        {
            id: 2,
            name: "Yamada Ryo Plushie",
            description: "A plushie from a TV Show called 'Bocchi the Rock'",
            category: "Plushies",
            price: "1500",
            stock: 5,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTfNBN9HLsbfTktvHlKtDiHMJXjUFtENQ5hkSHYWfe9w&s"
        },
        {
            id: 3,
            name: "Cat Ears Miku Figurine",
            description: "A Figurine of a famous vocaloid named 'Miku'",
            category: "Figures",
            price: "10500",
            stock: 3,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8HKl6VUUpviTpr2hChjJRqQuKbrbKuDUolG0X-EA36g&s=10"
        },
        {
            id: 4,
            name: "Hakui Koyori Figurine",
            description: "A Figurine of a popular VTuber from HoloX generation of Hololive",
            category: "Figures",
            price: "22500",
            stock: 2,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXmjOlh39zSxT4n1B8FqA0NB3KmRuSCy88w7vrZXeJtg&s=10"
        },
        {
            id: 5,
            name: "Horimiya Plushie Set",
            description: "A set of plushies of Main Characters from a TV Show called 'Horimiya'",
            category: "Plushies",
            price: "2500",
            stock: 5,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVmfh7SWEpGBnez9Nbqw5HE6rc3XOpekAepkI4vH7cWA&s=10"
        },
        {
            id: 6,
            name: "Saiki Kusuo Plushie",
            description: "A plushie of Saiki Kusuo from a TV Show called 'Saiki'",
            category: "Plushies",
            price: "3000",
            stock: 7,
            image: "https://img.lazcdn.com/g/p/58ec9a5b66e91aeb9463231d5ba8afbf.jpg_720x720q80.jpg"
        },
        {
            id: 7,
            name: "Hoshimachi Susei Plushie",
            description: "A plushie of a famous utaite and Vtuber named 'Hoshimachi Suisei' from the Oth Generation of Hololive",
            category: "Plushies",
            price: "4500",
            stock: 3,
            image: "https://down-ph.img.susercontent.com/file/sg-11134201-7qvdn-lgj3emva5l6c5b"
        },
        {
            id: 8,
            name: "Berserk Griffith Figurine",
            description: "A Figurine of the Main Villain from a known Dark Fantasy Manga called 'Berserk'",
            category: "Figures",
            price: "8500",
            stock: 16,
            image: "https://m.media-amazon.com/images/I/610ef0X0ZNL._AC_UF350,350_QL80_.jpg"
        },
        {
            id: 9,
            name: "Berserk Guts Figurine",
            description: "A Figurine of the Main Protagonist from a known Dark Fantasy Manga called 'Berserk'",
            category: "Figures",
            price: "12500",
            stock: 12,
            image: "https://m.media-amazon.com/images/I/61OOePydCwL.jpg"
        },
        {
            id: 10,
            name: "Jujutsu Kaisen Poster",
            description: "A Poster from a popular show called 'Jujutsu Kaisen'",
            category: "Posters",
            price: "1500",
            stock: 23,
            image: "https://m.media-amazon.com/images/I/51XDRuK-9CL._AC_US750_.jpg"
        },
        {
            id: 11,
            name: "Demon Slayer Card Set",
            description: "A card set merch from a show called 'Demon Slayer'",
            category: "Cards",
            price: "2500",
            stock: 32,
            image: "https://m.media-amazon.com/images/I/81gpXYlaJGL._AC_UF1000,1000_QL80_.jpg"
        },
        {
            id: 12,
            name: "Naruto Card Collectibles",
            description: "A card set merch from a show called 'Naruto'",
            category: "Cards",
            price: "3500",
            stock: 12,
            image: "https://toystorey.in/cdn/shop/files/AnimeUniqueCardDeskPack_OfficialAnimeCCGCollectablePlayingFoilCards_AnimeMerchandiseGift_Packof55_Silver_4.jpg?v=1753169069&width=1445"
        },
    ]

    const [search, setSearch] = useState("")
    const [category, setCategory] = useState("All")
    const [currentPage, setCurrentPage] = useState(1)
    const [selectedProduct, setSelectedProduct] = useState(null)

    const addToCart = (product) => {
        const existingProduct = cartItems.find(
            (item) => item.id === product.id
        )

        if (existingProduct) {

            if (existingProduct.quantity >= product.stock) {
                return
            }

            const updatedCart = cartItems.map((item) => {
                if (item.id === product.id) {
                    return {
                        ...item,
                        quantity: item.quantity + 1
                    }
                }

                return item
            })

            setCartItems(updatedCart)
        } else {
            setCartItems([
                ...cartItems,
                {
                    ...product,
                    quantity: 1
                }
            ])
        }
    }

    if (selectedProduct) {
        return (
            <ProductPage
                product={selectedProduct}
                onBack={() => setSelectedProduct(null)}
                addToCart={addToCart}
            />
        )
    }

    const productsPerPage = 6

    const categories = [
        "All",
        "Figures",
        "Plushies",
        "Cards",
        "Posters"
    ]

    const filteredProducts = products.filter((product) => {
        return (
            product.name.toLowerCase().includes(search.toLowerCase()) && (category === "All" || product.category === category)
        )
    })

    const totalPages = Math.ceil(
        filteredProducts.length / productsPerPage
    )

    const indexOfLastProduct = currentPage * productsPerPage
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage
    const currentProducts = filteredProducts.slice(
        indexOfFirstProduct,
        indexOfLastProduct
    )

    const handleSearch = (e) => {
        setSearch(e.target.value)
        setCurrentPage(1)
    }

    const handleCategory = (e) => {
        setCategory(e.target.value)
        setCurrentPage(1)
    }

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber)

        window.scroll({
            top: 0,
            behavior: "smooth"
        })
    }

    return (
        <>
            <div className='bg-gray-50 min-h-screen'>
                <Container className='py-5'>
                    <div className='mb-8'>
                        <h1 className='text-3xl font-bold text-gray-900 mb-2'>
                            Products
                        </h1>
                        <p className='text-gray-500'>
                            Browse and discover our available products
                        </p>
                    </div>

                    <div className='bg-white shadow-sm rounded-xl p-4 mb-6'>
                        <Row className='g-3 align-items-end'>
                            <Col xs={12} md={8}>
                                <Form.Group>
                                    <Form.Label className='font-medium'>
                                        Search Products
                                    </Form.Label>
                                </Form.Group>

                                <Form.Control
                                    type='text'
                                    placeholder='Search product...'
                                    value={search}
                                    onChange={handleSearch}
                                    className='py-2'
                                />
                            </Col>

                            <Col xs={12} md={4}>
                                <Form.Group>
                                    <Form.Label className='font-medium'>
                                        Category
                                    </Form.Label>
                                </Form.Group>

                                <Form.Select
                                    value={category}
                                    onChange={handleCategory}
                                    className='py-2'
                                >
                                    {categories.map((item) => (
                                        <option
                                            key={item}
                                            value={item}
                                        >
                                            {item}
                                        </option>
                                    ))}
                                </Form.Select>
                            </Col>
                        </Row>
                    </div>

                    <div className='flex justify-between items-center mb-4'>
                        <p className='text-gray-600 mb-0'>
                            Showing {" "}
                            <span className='font-semibold'>
                                {filteredProducts.length}
                            </span> {" "}
                            product
                            {filteredProducts.length !== 1 && "s"}
                        </p>
                    </div>

                    {currentProducts.length > 0 ? (
                        <Row className='g-4'>
                            {currentProducts.map((product) => (
                                <Col
                                    key={product.id}
                                    xs={12}
                                    sm={6}
                                    lg={4}
                                >
                                    <Card className='h-100 border-0 shadow-sm rounded-xl overflow-hidden hover:shadow-md transition-shadow duration-200'>
                                        <Card.Img
                                            variant='top'
                                            src={product.image}
                                            alt={product.name}
                                            className='w-full h-52 object-cover'
                                        />

                                        <Card.Body className='p-4'>
                                            <span className='text-sm text-[#305797] font-medium'>
                                                {product.category}
                                            </span>

                                            <Card.Title className='mt-2 mb-2 text-xl font-semibold'>
                                                {product.name}
                                            </Card.Title>

                                            <h5 className='text-gray-900 font-bold mb-2'>
                                                PHP {product.price}
                                            </h5>

                                            <p className={`text-sm ${product.stock > 0 ? "text-green-600" : "text-red-500"}`}>
                                                {product.stock > 0 ? `${product.stock} items available` : "Out of Stock"}
                                            </p>
                                        </Card.Body>

                                        <Card.Footer className='bg-white border-0 px-4 pb-4'>
                                            <Button
                                                className='w-100 mb-2'
                                                style={{
                                                    color: '#305797',
                                                    borderColor: '#305797',
                                                    backgroundColor: 'transparent'
                                                }}

                                                onMouseEnter={(e) => {
                                                    e.currentTarget.style.backgroundColor = '#305797'
                                                    e.currentTarget.style.color = '#fff'
                                                }}

                                                onMouseLeave={(e) => {
                                                    e.currentTarget.style.backgroundColor = 'transparent'
                                                    e.currentTarget.style.color = '#305797'
                                                }}
                                                onClick={() => setSelectedProduct(product)}
                                            >
                                                View Details
                                            </Button>

                                            <Button
                                                className='w-100 py-2'
                                                style={{
                                                    backgroundColor: '#305797',
                                                    borderColor: '#305797'
                                                }}
                                                disabled={
                                                    product.stock === 0
                                                }
                                                onClick={() => addToCart(product)}
                                            >
                                                {product.stock > 0 ? "Add to Cart" : "Out of Stock"}
                                            </Button>
                                        </Card.Footer>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    ) : (
                        <div className='bg-white rounded-xl shadow-sm text-center py-16'>
                            <h4 className='font-semibold text-gray-700'>
                                No products found
                            </h4>

                            <p className='text-gray-500 mb-0'>
                                Try changing your search or category filter.
                            </p>
                        </div>
                    )}

                    {totalPages > 0 && (
                        <div className='flex justify-center mt-8'>
                            <Pagination>
                                <Pagination.Prev
                                    disabled={currentPage === 1}
                                    onClick={() =>
                                        handlePageChange(
                                            currentPage - 1
                                        )
                                    }
                                    linkStyle={{ color: '#305797' }}
                                />

                                {Array.from(
                                    { length: totalPages },
                                    (_, index) => {
                                        const pageNumber = index + 1
                                        return (
                                            <Pagination.Item
                                                key={pageNumber}
                                                active={pageNumber === currentPage}
                                                onClick={() =>
                                                    handlePageChange(
                                                        pageNumber
                                                    )
                                                }
                                                linkStyle={{
                                                    backgroundColor: pageNumber === currentPage ? '#305797' : '#fff',
                                                    borderColor: pageNumber === currentPage ? '#305797' : '#dee2e6',
                                                    color: pageNumber === currentPage ? '#fff' : '#305797'
                                                }}
                                            >
                                                {pageNumber}
                                            </Pagination.Item>
                                        )
                                    }
                                )}

                                <Pagination.Next
                                    disabled={currentPage === totalPages}
                                    onClick={() => handlePageChange(
                                        currentPage + 1
                                    )}
                                    linkStyle={{ color: '#305797' }}
                                />
                            </Pagination>
                        </div>
                    )}

                </Container>
            </div>
        </>

    )
}
