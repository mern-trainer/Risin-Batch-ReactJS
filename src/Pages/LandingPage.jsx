import { Fragment } from "react"
import "./LandingPage.css"
import { Button, Card, Carousel, Container, Form, Image, Nav, Navbar, Stack } from "react-bootstrap"
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"

const LandingPage = () => {

    const cardList = [
        { title: "Card 1", description: "Description 1" },
        { title: "Card 2", description: "Description 2" },
        { title: "Card 3", description: "Description 3" },
        { title: "Card 4", description: "Description 4" },
        { title: "Card 5", description: "Description 5" },
        { title: "Card 6", description: "Description 6" },
        { title: "Card 7", description: "Description 7" },
        { title: "Card 8", description: "Description 8" }
    ]

    return <Fragment>
        <Header />
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
                <Image loading="lazy" src="https://i.ytimg.com/vi/7P7SodRbwTU/maxresdefault.jpg" className="vw-100" style={{height: "500px"}}/>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
                <Image loading="lazy" src="https://graphicsfamily.com/wp-content/uploads/edd/2024/11/Creative-E-Commerce-Shoes-Banner-Design-Free-PSD--scaled.jpg" className="vw-100" style={{height: "500px"}}/>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
                <Image loading="lazy" src="https://i.ytimg.com/vi/f64GdOxJjPE/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAxPhGb84zF25stREqgMB0f6JAJhA" className="vw-100" style={{height: "500px"}}/>
            </Carousel.Item>
        </Carousel>

        <div className="d-flex overflow-auto gap-3 mt-3">
            {
                cardList.map((card, index) => {
                    return <Card key={index} style={{ width: '18rem' }} className="flex-shrink-0">
                        <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXFN2hMdobSowHAAk2_I22T6555OQDMcvzwj4rAyS3MY_z3rUT_IZokHyF3HvUpy-25y0&usqp=CAU" />
                        <Card.Body>
                            <Card.Title>{card.title}</Card.Title>
                            <Card.Text  className="text-truncate">{card.description}</Card.Text>
                            <Button variant="primary" className="w-100">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                })
            }
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

