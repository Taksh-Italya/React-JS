import { Container, Row, Col, Button, Navbar, Nav, Image, Form, Card } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function Material() {
  return (
    <>
      {/* Navigation Bar */}
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Material Kit react</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home">COMPONENTS</Nav.Link>
              <Nav.Link href="#features">UPGRADE TO PRO</Nav.Link>
              <Nav.Link href="#contact">DOWNLOD</Nav.Link>
              <Nav.Link><i class="bi bi-twitter"></i></Nav.Link>
              <Nav.Link><i class="bi bi-instagram"></i></Nav.Link>
              <Nav.Link><i class="bi bi-facebook"></i></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Hero Section */}
      <div className="bg-light text-center py-5">
        <img src="img/image1.gpg" alt="image1" />
        <Container>
          <h1 className="display-4 mb-3 d-flex justify-content-around">Material Kit React.</h1>
          <p className="lead mb-4">A modern React UI Kit based on React-Bootstrap</p>
        </Container>
      </div>

      {/* Features Section */}
      <Container className="text-center py-5" id="features">
        <Row>
          <h1 className="text-primary mb-3 mt-3">I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...</h1>
          <h2 className="text-secondary mb-3 mt-3">I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...</h2>
          <h3 className="text-success mb-3 mt-3">I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...</h3>
          <h4 className="text-danger mb-3 mt-3">I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...</h4>
          <h5 className="text-warning mb-3 mt-3">I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...</h5>
          <h6 className="text-info mb-3 mt-3">I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...</h6>
        </Row>
        <Row>
          <div>
            <div>
              <button className="me-2 pb-1" type="button">
                <span>Default</span>
              </button>
              <button className="me-2 rounded-pill" type="button">
                <span className="p-2">round</span>
              </button>
              <button className="me-2 rounded-pill" type="button">
                <span>
                  <svg width={"25px"} height={"25px"}>
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path>
                  </svg> with icon
                </span>
              </button>
              <button className="me-2 rounded-circle" type="button">
                <span >
                  <svg className="p-0" width={"25px"} height={"25px"}>
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path>
                  </svg>
                </span>
              </button>
              <button className="me-2 pb-1 border-0" type="button">
                <span>simple</span>
              </button>
            </div>
          </div>
        </Row>
        <Row>
          <div>
            <button type="button" className="btn btn-primary btn-lg mt-2 mb-2 me-3">Large button</button>
            <button type="button" className="btn btn-primary btn-xs mt-2 mb-2 me-3">medium button</button>
            <button type="button" className="btn btn-primary btn-sm mt-2 mb-2 me-3">Small button</button>

          </div>
        </Row>
        <Row>
          <div className="d-flex justify-content-center">
            <button type="button" className="btn btn-primary mt-4 mb-5 me-3">Primary</button>
            <button type="button" className="btn btn-secondary mt-4 mb-5 me-3">Secondary</button>
            <button type="button" className="btn btn-success mt-4 mb-5 me-3">Success</button>
            <button type="button" className="btn btn-danger mt-4 mb-5 me-3">Danger</button>
            <button type="button" className="btn btn-warning mt-4 mb-5 me-3">Warning</button>
            <button type="button" className="btn btn-info mt-4 mb-5 me-3">Info</button>
            <button type="button" className="btn btn-light mt-4 mb-5 me-3">Light</button>
            <button type="button" className="btn btn-dark mt-4 mb-5 me-3">Dark</button>
          </div>
        </Row>
        <Row>
          <Col md={4}>
            <h3 className="mb-3">Checkboxes</h3>
            <div className="htmlForm-check mb-3">
              <input className="htmlForm-check-input" type="checkbox" value="" id="checkDefault0" />
              <label className="htmlForm-check-label" htmlFor="checkDefault">Un-Checked checkbox</label>
            </div>
            <div className="htmlForm-check mb-3">
              <input className="htmlForm-check-input" type="checkbox" value="" id="checkChecked" checked />
              <label className="htmlForm-check-label" htmlFor="checkChecked">Checked checkbox</label>
            </div>
            <div className="htmlForm-check mb-3">
              <input className="htmlForm-check-input" type="checkbox" value="" id="checkDisabled" disabled />
              <label className="htmlForm-check-label" htmlFor="checkDisabled">Disabled checkbox</label>
            </div>
            <div className="htmlForm-check mb-3">
              <input className="htmlForm-check-input" type="checkbox" value="" id="checkCheckedDisabled" checked disabled />
              <label className="htmlForm-check-label" htmlFor="checkCheckedDisabled">Disabled checked checkbox</label>
            </div>
          </Col>
          <Col md={4}>
            <h3 className="mb-3">Radio Buttons</h3>
            <div className="htmlForm-check mb-3">
              <input className="htmlForm-check-input" type="radio" name="radioDefault" id="radioDefault1" />
              <label className="htmlForm-check-label" htmlFor="radioDefault1">Default radio</label>
            </div>
            <div className="htmlForm-check mb-3">
              <input className="htmlForm-check-input" type="radio" name="radioDefault" id="radioDefault2" checked />
              <label className="htmlForm-check-label" htmlFor="radioDefault2">Default checked radio</label>
            </div>
            <div className="htmlForm-check mb-3">
              <input className="htmlForm-check-input" type="radio" name="radioDisabled" id="radioDisabled" disabled />
              <label className="htmlForm-check-label" htmlFor="radioDisabled">Disabled radio</label>
            </div>
            <div className="htmlForm-check mb-3">
              <input className="htmlForm-check-input" type="radio" name="radioDisabled" id="radioCheckedDisabled" checked disabled />
              <label className="htmlForm-check-label" htmlFor="radioCheckedDisabled">Disabled checked radio</label>
            </div>
          </Col>
          <Col md={4}>
            <h3 className="mb-3">Toggle Buttons</h3>
            <div className="form-check form-switch mb-3">
              <input className="form-check-input" type="checkbox" role="switch" id="switchCheckDefault" />
              <label className="form-check-label" htmlFor="switchCheckDefault">Default Un-checked Toggle Buttons</label>
            </div>
            <div className="form-check form-switch mb-3">
              <input className="form-check-input" type="checkbox" role="switch" id="switchCheckChecked" checked />
              <label className="form-check-label" htmlFor="switchCheckChecked">Checked Toggle Buttons</label>
            </div>
            <div className="form-check form-switch mb-3">
              <input className="form-check-input" type="checkbox" role="switch" id="switchCheckDisabled" disabled />
              <label className="form-check-label" htmlFor="switchCheckDisabled">Disabled Un-checked Toggle Buttons</label>
            </div>
            <div className="form-check form-switch mb-3">
              <input className="form-check-input" type="checkbox" role="switch" id="switchCheckCheckedDisabled" checked disabled />
              <label className="form-check-label" htmlFor="switchCheckCheckedDisabled">Disabled checked Toggle Buttons</label>
            </div>
          </Col>
        </Row>

        {/* 1st navbar */}
        <nav class="navbar bg-body-tertiary bg-primary mt-3">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">Navbar</a>
          </div>
        </nav>


        <nav class="navbar bg-body-tertiary mt-3">
          <div class="container-fluid">
            <span class="navbar-brand mb-0 h1">Navbar</span>
          </div>
        </nav>

        {/* 2 navbar */}
        <nav class="navbar bg-body-tertiary mt-3">
          <div class="container-fluid">
            <form class="d-flex" role="search">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </nav>

        <nav class="navbar bg-dark border-bottom border-body text-white" data-bs-theme="dark">
       <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" aria-disabled="true">Disabled</a>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
        </nav>
        <Row>
          <Col md={4}>
            <h3 className="mt-5 mb-5">RoundedCircle</h3>
            <Image src="https://img.freepik.com/premium-photo/morskie-oko-tatry_1045114-186.jpg?semt=ais_hybrid&w=740" width="100%" roundedCircle />
          </Col>
          <Col md={4}>
            <h3 className="mt-5 mb-5">Rounded</h3>
            <Image src="https://img.freepik.com/premium-photo/morskie-oko-tatry_1045114-186.jpg?semt=ais_hybrid&w=740" width="100%" rounded />
          </Col>
          <Col md={4}>
            <h3 className="mt-5 mb-5">Thumbnail</h3>
            <Image src="https://img.freepik.com/premium-photo/morskie-oko-tatry_1045114-186.jpg?semt=ais_hybrid&w=740" width="100%" thumbnail />
          </Col>
        </Row>

        <Row className="mb-5">
          <h2 className="col-2 mb-4">Notifications</h2>
          <div className="text-bg-primary mt-4 p-3 d-flex"><h1 className="me-5">Primary with contrasting color. </h1>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span className="ms-5 pt-3">✖️</span>
          </div>
          <div className="text-bg-success mt-4 p-3 d-flex"><h1 className="me-5">Success with contrasting color </h1>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span className="ms-5 pt-3">✖️</span>
          </div>
          <div className="text-bg-danger mt-4 p-3 d-flex"><h1 className="me-5">Danger with contrasting color. </h1>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span className="ms-5 pt-3">✖️</span>
          </div>
          <div className="text-bg-warning mt-4 p-3 "><h1 className="me-5">Warning with contrasting color. </h1>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span className="ms-5 pt-3 justify-content-end">✖️</span>
          </div>
        </Row>
        <Row>
            <div className="login-background">
      <Container className="d-flex justify-content-center align-items-center min-vh-100">
        <Card className="login-card">
          <Card.Header className="text-center text-white bg-gradient">
            <h4 className="text-dark">Login</h4>
            <div className="social-icons mt-2">
              <i className="fab fa-twitter mx-2"></i>
              <i className="fab fa-facebook-f mx-2"></i>
              <i className="fab fa-google-plus-g mx-2"></i>
            </div>
          </Card.Header>
          <Card.Body>
            <p className="text-center text-dark text-muted">Or Be Classical</p>
            <Form>
              <Form.Group className="mb-3 position-relative">
                <Form.Control type="text" placeholder="First Name..." readOnly />
                <i className="fas fa-user icon-right" />
              </Form.Group>
              <Form.Group className="mb-3 position-relative">
                <Form.Control type="email" placeholder="Email..." readOnly />
                <i className="fas fa-envelope icon-right" />
              </Form.Group>
              <Form.Group className="mb-3 position-relative">
                <Form.Control type="password" placeholder="Password" readOnly />
                <i className="fas fa-lock icon-right" />
              </Form.Group>
                <button className="btn btn-primary" >Get Startat</button>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    </div>



 
        </Row>
      </Container>

      {/* Footer */}
      <footer className="bg-dark text-bg-primary text-center py-3">
        <div className="d-flex justify-content-center">
          <p className="ms-0 me-5">
            <span className="me-3">CREATIVE TIM</span>
            <span className="me-3">ABOUT US</span>
            <span className="me-3">BLOG</span>
            <span className="me-5">LICENSES</span>
          </p>
          <p className="ms-5 mb-0"> &copy; Taksh italiya</p>
        </div>
      </footer>
    </>
  );

};


