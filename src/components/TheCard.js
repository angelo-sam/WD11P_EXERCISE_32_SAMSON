import "../css/style.css";
import image1 from "../images/erica.jpeg";
import image2 from "../images/catleya.jpg";
import image3 from "../images/iris.png";
import image4 from "../images/violet.jpeg";
const TheCard = () => {
  return (
    <div className="row">
      <h1 className="character"> Characters in Violet Evergarden</h1>
      <div className="column">
        <div className="card">
          <img src={image1} alt="" className="card" />
          <p>
            Violet Evergarden is the protagonist of the Violet Evergarden
            series. Violet is a former soldier who was enlisted in the
            Leidenschaftlich army and fought in the war, where she was treated
            as nothing more than a weapon. Violet became an Auto Memories Doll
            at the CH Postal Company after the war
          </p>
          <h4> Erica Brown</h4>
          <button className="favorite styled" type="button">
            See More
          </button>
        </div>
      </div>

      <div className="column">
        <div className="card">
          <img src={image2} alt="" className="card" />
          <p>
            Cattleya Baudelaire is a character in the Violet Evergarden series.
            Being a figurehead Auto Memories Doll who works for the CH Postal
            Company, Cattleya never stops being requested and often takes on
            clients with love troubles inventore porro blanditiis.
          </p>
          <h4> Cattleya Baudelaire</h4>
          <button className="favorite styled" type="button">
            See More
          </button>
        </div>
      </div>

      <div className="column">
        <div className="card">
          <img src={image3} alt="" className="card" />
          <p>
            Iris Cannary is a character in the Violet Evergarden series. A
            rookie Auto Memories Doll with an unyielding spirit who works at CH
            Postal Company, Iris admires young working women and is enthusiastic
            about quickly making a name for herself in the industry.
          </p>
          <h4> Iris Cannary</h4>
          <button className="favorite styled" type="button">
            See More
          </button>
        </div>
      </div>

      <div className="column">
        <div className="card">
          <img src={image4} alt="" className="card" />
          <p>
            Violet Evergarden is the protagonist of the Violet Evergarden
            series. Violet is a former soldier who was enlisted in the
            Leidenschaftlich army and fought in the war, where she was treated
            as nothing more than a weapon. Violet became an Auto Memories Doll
            at the CH Postal Company after the war
          </p>
          <h4> Violet Evergarden</h4>
          <button className="favorite styled" type="button">
            See More
          </button>
        </div>
      </div>
    </div>
  );
};

export default TheCard;
