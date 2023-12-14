import { Card, Container } from "react-bootstrap";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import "./Blog.css";
import { useNavigate } from "react-router-dom";

const Blog = () => {
    const navigate = useNavigate()

    const handleBlogPage = () => {
        navigate('/blogpage1')
    }
  return (
    <div>
      <Header className="blogHeader" />
      <Container
        fluid
        className="d-flex align-items-center justify-content-center blog_HB"
      >
        <h1>Blog</h1>
      </Container>
      <Container fluid className="blogCard-container">
        <div className="blogCard-innerContainer">
        <Card className="blogCard">
          <Card.Title className="blogCard-title">
            <a href="/blogpage1">
              <h3>
                How To Choose The Right Colour For A Call-To-Action Button
              </h3>
            </a>
          </Card.Title>
          <Card.Text className="blogCard-text">
            <p>
              Does button CTA colour play a role in getting clicks? An
              eye-catching, high-contrast button is key to getting your users’
              attention, but that’s not all. The colour of the button is
              actually an important consideration in driving users to click.
              One..
            </p>
            <button className="blogButton" onClick={handleBlogPage}>More Details</button>
          </Card.Text>
        </Card>
        <Card className="blogCard">
          <Card.Title className="blogCard-title">
            <a href="/blogpage1">
              <h3>
                How To Choose The Right Colour For A Call-To-Action Button
              </h3>
            </a>
          </Card.Title>
          <Card.Text className="blogCard-text">
            <p>
              Does button CTA colour play a role in getting clicks? An
              eye-catching, high-contrast button is key to getting your users’
              attention, but that’s not all. The colour of the button is
              actually an important consideration in driving users to click.
              One..
            </p>
            <button className="blogButton" onClick={handleBlogPage}>More Details</button>
          </Card.Text>
        </Card>
        <Card className="blogCard">
          <Card.Title className="blogCard-title">
            <a href="/blogpage1">
              <h3>
                How To Choose The Right Colour For A Call-To-Action Button
              </h3>
            </a>
          </Card.Title>
          <Card.Text className="blogCard-text">
            <p>
              Does button CTA colour play a role in getting clicks? An
              eye-catching, high-contrast button is key to getting your users’
              attention, but that’s not all. The colour of the button is
              actually an important consideration in driving users to click.
              One..
            </p>
            <button className="blogButton" onClick={handleBlogPage}>More Details</button>
          </Card.Text>
        </Card>
        <Card className="blogCard">
          <Card.Title className="blogCard-title">
            <a href="/blogpage1">
              <h3>
                How To Choose The Right Colour For A Call-To-Action Button
              </h3>
            </a>
          </Card.Title>
          <Card.Text className="blogCard-text">
            <p>
              Does button CTA colour play a role in getting clicks? An
              eye-catching, high-contrast button is key to getting your users’
              attention, but that’s not all. The colour of the button is
              actually an important consideration in driving users to click.
              One..
            </p>
            <button className="blogButton" onClick={handleBlogPage}>More Details</button>
          </Card.Text>
        </Card>
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export default Blog;
