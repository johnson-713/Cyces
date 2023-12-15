import { Card, Container } from "react-bootstrap";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import "./Blog.css";
import { useNavigate } from "react-router-dom";

const TruncatedText = ({ text, maxLength }) => {
  // Check if the text is longer than the specified maxLength
  if (text.length > maxLength) {
    // Truncate the text using the slice method
    const truncatedText = text.slice(0, maxLength) + '...';

    return <span>{truncatedText}</span>;
  }

  // If the text is shorter than or equal to maxLength, display the original text
  return <span>{text}</span>;
};

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
      <Container className="blogCard-container">
        <div className="blogCard-innerContainer">
        <Card className="blogCard">
          <Card.Title className="blogCard-title">
            <a href="/blogpage1">
              {/* <h3>
                {truncate("How To Choose The Right Colour For A Call-To-Action Button Hello World Hello hello hello Button Hello World Hello hello hello hello hello hello hello hello")}
              </h3> */}
              <TruncatedText text={"How To Choose The Right Colour For A Call-To-Action Button Hello World Hello hello hello Button Hello World Hello hello hello hello hello hello hello hello"} maxLength={30} />
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
