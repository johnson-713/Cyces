import { Card, Container } from "react-bootstrap";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import "./Blog.css";
import { useNavigate } from "react-router-dom";

const TruncatedText = ({ text, maxLength }) => {
  if (text.length > maxLength) {
    const truncatedText = text.slice(0, maxLength) + "...";

    return <span>{truncatedText}</span>;
  }

  return <span>{text}</span>;
};

const Blog = () => {
  const navigate = useNavigate();

  const handleBlogPage = () => {
    navigate("/blogpage1");
  };

  const cardData = [
    {
      id: 1,
      heading: "How To Choose The Right Colour For A Call-To-Action Button",
      buttonName: "More Details",
      text: "Does button CTA colour play a role in getting clicks? An eye-catching, high-contrast button is key to getting your users’ attention, but that’s not all. The colour of the button is actually an important consideration in driving users to click. One..",
    },
    {
      id: 2,
      heading: "How To Choose The Right Colour For A Call-To-Action Button",
      buttonName: "More Details",
      text: "Does button CTA colour play a role in getting clicks? An eye-catching, high-contrast button is key to getting your users’ attention, but that’s not all. The colour of the button is actually an important consideration in driving users to click. One..",
    },
    {
      id: 3,
      heading: "How To Choose The Right Colour For A Call-To-Action Button",
      buttonName: "More Details",
      text: "Does button CTA colour play a role in getting clicks? An eye-catching, high-contrast button is key to getting your users’ attention, but that’s not all. The colour of the button is actually an important consideration in driving users to click. One..",
    },
    {
      id: 4,
      heading: "How To Choose The Right Colour For A Call-To-Action Button",
      buttonName: "More Details",
      text: "Does button CTA colour play a role in getting clicks? An eye-catching, high-contrast button is key to getting your users’ attention, but that’s not all. The colour of the button is actually an important consideration in driving users to click. One..",
    },
  ];

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
          {cardData.map((items) => {
            return (
              <Card className="blogCard" key={items.id}>
                <Card.Title className="blogCard-title">
                  <p onClick={handleBlogPage}>
                    <TruncatedText text={items.heading} maxLength={50} />
                  </p>
                </Card.Title>
                <Card.Text className="blogCard-text">
                  <p>{items.text}</p>
                  <button className="blogButton" onClick={handleBlogPage}>
                    {items.buttonName}
                  </button>
                </Card.Text>
              </Card>
            );
          })}
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export default Blog;
