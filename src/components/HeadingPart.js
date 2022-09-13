import "../css/style.css";
<style></style>;
const HeadingPart = () => {
  return (
    <div className="topnav">
      <a className="active" href="#home">
        𝒱𝒾𝑜𝓁𝑒𝓉 𝐸𝓋𝑒𝓇𝑔𝒶𝓇𝒹𝑒𝓃
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
