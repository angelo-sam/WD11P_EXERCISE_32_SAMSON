import "../css/style.css";
<style></style>;
const HeadingPart = () => {
  return (
    <div className="topnav">
      <a className="active" href="#home">
        π±πΎππππ πΈπππππΆππΉππ
      </a>

      <div className="search-container">
        <form action="/action_page.php">
          <input type="text" placeholder="Search.." name="search" />
          <button type="submit">Search</button>
        </form>
      </div>
    </div>
  );
};

export default HeadingPart;
