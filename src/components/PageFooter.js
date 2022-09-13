import "../css/style.css";
const PageFooter = (author) => {
  if (author.name) {
    return (
      <footer>
        <p>
          Author: {author.name} <br />
          <a href="auto.com">VioletEvergarden@automemorydoll.com</a>
        </p>
        ;
      </footer>
    );
  } else {
    return (
      <footer>
        <p>
          No Author <br />
          <a href="auto.com">VioletEvergarden@automemorydoll.com</a>
        </p>
        ;
      </footer>
    );
  }
};

export default PageFooter;
