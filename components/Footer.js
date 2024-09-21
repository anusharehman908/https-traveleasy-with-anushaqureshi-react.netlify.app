import "./Footer.css";
import { Link } from "react-router-dom";

export const Footer = () => {
  const branchLoc ="https://www.bing.com/maps/geoplat/REST/v1/Imagery/Map/RoadVibrant/24.867599,67.032776/11?ms=646,144&ml=Basemap,LandCover,Landmarks,OsmBuildings&key=AnTcaqBi2ypp0xI-OZNi4W_ik2KhjgpqioTAtXLC8GzkMBQRMlyxvxyTnd5b73im&c=en-US&ur=pk&fmt=jpeg&od=1&shading=hill&logo=n&da=ro&pp=24.889357,67.028709;dfp;Turtle+Beach+Karachi&pp=24.845842,67.031006;dfp;Karachi+Marriott+Hotel&pp=24.875069,67.036842;dfp;Karachi+X-Rays&pp=24.894108,67.077477;dfp.ms&pp=24.879145,67.041298;dfp.ms"
  return (
    
    <>
      <div className="footer">
        <div className="fbox">
          <div className="aboutus">
            <h2>
              <span id="fdiff">A</span>bout us
            </h2>
            <p>

🙂About Us

Our team consists of a talented web developer dedicated 
to delivering innovative solutions for the digital world.
 We prioritize understanding our clients' needs and vision, 
 allowing us to create unique and user-friendly websites.
  In every project, we integrate quality, creativity, and 
  functionality to ensure our clients achieve outstanding results.
   Your dream is our mission🙂






            </p>
          </div>
          <div className="branch">
            <h2>
              <span id="fdiff">B</span>ranch Location
            </h2>
            <iframe
              src={branchLoc}
              style={{ border: 0 }}
              id="map"
              allowFullScreen=""
              loading="lazy"
              title="Brach Location"
            ></iframe>
          </div>
          <div className="quicklinks">
            <h2>
              <span id="fdiff">Q</span>uick Links
            </h2>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/book">Book</Link>
              </li>
              <li>
                <Link to="/locations">Locations</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="follow">
            <h2>
              <span id="fdiff">F</span>ollow us
            </h2>
            <ul>
              <li>
                <Link to="/" id="instagram">
                  <i className="fab fa-instagram"></i>
                </Link>
              </li>
              <li>
                <Link to="/" id="facebook">
                  <i className="fab fa-facebook"></i>
                </Link>
              </li>
              <li>
                <Link to="/" id="twitter">
                  <i className="fab fa-twitter"></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="copy">
          <h2>
            Copyright &copy; <span id="fdiff">T</span>ravel easy with ANUSHA 2024 | All
            Rights Reserved
          </h2>
        </div>
      </div>
    </>
  );
};
