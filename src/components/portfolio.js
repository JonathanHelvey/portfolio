import React from "react"
//import Img from "gatsby-image"
//import { Link } from "gatsby"

const Card = ({ data }) => {
  return (
    <div>
      <div className="card-inside">
        <div className="techs-card">
          <div className="hvrbox2">
            <img
              className="hvrbox-layer_bottom"
              src={require("../images/gatsby-icon.png")}
              alt="tech"
            />
            <div className="hvrbox-layer_top">
              <h4 className="hvrbox-text">gatsby</h4>
            </div>
          </div>
          <div className="hvrbox2">
            <img
              className="hvrbox-layer_bottom"
              src={require("../images/reactlogo.svg")}
              alt="tech"
            />
            <div className="hvrbox-layer_top">
              <h4 className="hvrbox-text">React</h4>
            </div>
          </div>
          <div className="hvrbox2">
            <img
              className="hvrbox-layer_bottom"
              src={require("../images/GraphQL_Logo.svg.png")}
              alt="tech"
            />
            <div className="hvrbox-layer_top">
              <h4 className="hvrbox-text">Graphql</h4>
            </div>
          </div>
          <div className="hvrbox2">
            <img
              className="hvrbox-layer_bottom"
              src={require("../images/JavaScript-logo.png")}
              alt="tech"
            />
            <div className="hvrbox-layer_top">
              <h4 className="hvrbox-text">ES6</h4>
            </div>
          </div>
          <div className="hvrbox2">
            <img
              className="hvrbox-layer_bottom"
              src={require("../images/css3.jpg")}
              alt="tech"
            />
            <div className="hvrbox-layer_top">
              <h4 className="hvrbox-text">CSS3</h4>
            </div>
          </div>
          <div className="hvrbox2">
            <img
              className="hvrbox-layer_bottom"
              src={require("../images/html5.png")}
              alt="tech"
            />
            <div className="hvrbox-layer_top">
              <h4 className="hvrbox-text">HTML5</h4>
            </div>
          </div>
        </div>
        <div>
          <h6 className="project-title2">Built With</h6>
        </div>

        <div className="hvrbox2">
          <a href="https://github.com/capstone-bluebubbles/Pop-n-Spots">
            <img
              className="hvrbox-layer_bottom"
              src={require("../images/github.png")}
              alt="tech"
            />
            <div className="hvrbox-layer_top">
              <h4 className="hvrbox-text">Source Code</h4>
            </div>
          </a>
        </div>
        <h6 className="project-title2">Source Code</h6>
        <div className="details">
          <h4 className="project-title2">Portfolio Site</h4>
        </div>
      </div>
    </div>
  )
}

export default Card

export const query = graphql`
  query {
    fileName: file(relativePath: { eq: "../images/popnspots.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 400, maxHeight: 250) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
