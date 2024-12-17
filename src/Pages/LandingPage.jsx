import { Fragment } from "react"
import "./LandingPage.css"
import { Button, Card, Carousel, Container, Form, Image, Nav, Navbar, Stack } from "react-bootstrap"
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"

const LandingPage = () => {
    return <Fragment>
        <Navbar expand="md" className="bg-body-tertiary">
            <Container fluid>
                <Navbar.Brand href="#home">
                    <Image src="https://banner2.cleanpng.com/20180711/xqq/aawoyegun.webp" fluid width={100}/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Link</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

        <Carousel nextIcon={<FaArrowRight />} prevIcon={<FaArrowLeft />}>
            <Carousel.Item interval={2000}>
                <Image src="https://i.ytimg.com/vi/7P7SodRbwTU/maxresdefault.jpg" className="vw-100" style={{height: "500px"}}/>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
                <Image src="https://graphicsfamily.com/wp-content/uploads/edd/2024/11/Creative-E-Commerce-Shoes-Banner-Design-Free-PSD--scaled.jpg" className="vw-100" style={{height: "500px"}}/>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
                <Image src="https://i.ytimg.com/vi/f64GdOxJjPE/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAxPhGb84zF25stREqgMB0f6JAJhA" className="vw-100" style={{height: "500px"}}/>
            </Carousel.Item>
        </Carousel>

        <div className="d-flex overflow-auto gap-3 mt-3">
            <Card style={{ width: '18rem' }} className="flex-shrink-0">
                <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXFN2hMdobSowHAAk2_I22T6555OQDMcvzwj4rAyS3MY_z3rUT_IZokHyF3HvUpy-25y0&usqp=CAU" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text  className="text-truncate">
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary" className="w-100">Go somewhere</Button>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }} className="flex-shrink-0">
                <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXFN2hMdobSowHAAk2_I22T6555OQDMcvzwj4rAyS3MY_z3rUT_IZokHyF3HvUpy-25y0&usqp=CAU" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text className="text-truncate">
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content. Some quick example text to build on the card title and make up the
                        bulk of the card's content.Some quick example text to build on the card title and make up the
                        bulk of the card's content.Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary" className="w-100">Go somewhere</Button>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }} className="flex-shrink-0">
                <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXFN2hMdobSowHAAk2_I22T6555OQDMcvzwj4rAyS3MY_z3rUT_IZokHyF3HvUpy-25y0&usqp=CAU" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text  className="text-truncate">
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary" className="w-100">Go somewhere</Button>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }} className="flex-shrink-0">
                <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXFN2hMdobSowHAAk2_I22T6555OQDMcvzwj4rAyS3MY_z3rUT_IZokHyF3HvUpy-25y0&usqp=CAU" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text  className="text-truncate">
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary" className="w-100">Go somewhere</Button>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }} className="flex-shrink-0">
                <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXFN2hMdobSowHAAk2_I22T6555OQDMcvzwj4rAyS3MY_z3rUT_IZokHyF3HvUpy-25y0&usqp=CAU" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text  className="text-truncate">
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary" className="w-100">Go somewhere</Button>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }} className="flex-shrink-0">
                <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXFN2hMdobSowHAAk2_I22T6555OQDMcvzwj4rAyS3MY_z3rUT_IZokHyF3HvUpy-25y0&usqp=CAU" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text  className="text-truncate">
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary" className="w-100">Go somewhere</Button>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }} className="flex-shrink-0">
                <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXFN2hMdobSowHAAk2_I22T6555OQDMcvzwj4rAyS3MY_z3rUT_IZokHyF3HvUpy-25y0&usqp=CAU" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text  className="text-truncate">
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary" className="w-100">Go somewhere</Button>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }} className="flex-shrink-0">
                <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXFN2hMdobSowHAAk2_I22T6555OQDMcvzwj4rAyS3MY_z3rUT_IZokHyF3HvUpy-25y0&usqp=CAU" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text  className="text-truncate">
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary" className="w-100">Go somewhere</Button>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }} className="flex-shrink-0">
                <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXFN2hMdobSowHAAk2_I22T6555OQDMcvzwj4rAyS3MY_z3rUT_IZokHyF3HvUpy-25y0&usqp=CAU" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text  className="text-truncate">
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary" className="w-100">Go somewhere</Button>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }} className="flex-shrink-0">
                <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXFN2hMdobSowHAAk2_I22T6555OQDMcvzwj4rAyS3MY_z3rUT_IZokHyF3HvUpy-25y0&usqp=CAU" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text  className="text-truncate">
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary" className="w-100">Go somewhere</Button>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }} className="flex-shrink-0">
                <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXFN2hMdobSowHAAk2_I22T6555OQDMcvzwj4rAyS3MY_z3rUT_IZokHyF3HvUpy-25y0&usqp=CAU" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text  className="text-truncate">
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary" className="w-100">Go somewhere</Button>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }} className="flex-shrink-0">
                <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXFN2hMdobSowHAAk2_I22T6555OQDMcvzwj4rAyS3MY_z3rUT_IZokHyF3HvUpy-25y0&usqp=CAU" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text  className="text-truncate">
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary" className="w-100">Go somewhere</Button>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }} className="flex-shrink-0">
                <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXFN2hMdobSowHAAk2_I22T6555OQDMcvzwj4rAyS3MY_z3rUT_IZokHyF3HvUpy-25y0&usqp=CAU" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text  className="text-truncate">
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary" className="w-100">Go somewhere</Button>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }} className="flex-shrink-0">
                <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXFN2hMdobSowHAAk2_I22T6555OQDMcvzwj4rAyS3MY_z3rUT_IZokHyF3HvUpy-25y0&usqp=CAU" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text  className="text-truncate">
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary" className="w-100">Go somewhere</Button>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }} className="flex-shrink-0">
                <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXFN2hMdobSowHAAk2_I22T6555OQDMcvzwj4rAyS3MY_z3rUT_IZokHyF3HvUpy-25y0&usqp=CAU" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text  className="text-truncate">
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary" className="w-100">Go somewhere</Button>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }} className="flex-shrink-0">
                <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXFN2hMdobSowHAAk2_I22T6555OQDMcvzwj4rAyS3MY_z3rUT_IZokHyF3HvUpy-25y0&usqp=CAU" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text  className="text-truncate">
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary" className="w-100">Go somewhere</Button>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }} className="flex-shrink-0">
                <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXFN2hMdobSowHAAk2_I22T6555OQDMcvzwj4rAyS3MY_z3rUT_IZokHyF3HvUpy-25y0&usqp=CAU" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text  className="text-truncate">
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary" className="w-100">Go somewhere</Button>
                </Card.Body>
            </Card>
        </div>

        <Stack>
            <div>Hello</div>
            <div>Hello</div>
            <div>Hello</div>
        </Stack>
        
        <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Example textarea</Form.Label>
                <Form.Control as="textarea" rows={3} />
            </Form.Group>
        </Form>
    </Fragment>
}

export default LandingPage

