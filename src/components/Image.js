import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

const Image = props => (
  <StaticQuery
    query={graphql`
      query {
        images: allFile {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                fluid(maxHeight: 1000) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `}
    render={data => {
      const image = data.images.edges.find(n => {
        return n.node.relativePath.includes(props.src);
      });
      console.log(image)
      if (!image) return null;
      return (
        <Img
          alt={props.alt}
          fluid={image.node.childImageSharp.fluid}
          style={
            props.style || {
              position: "relative",
              marginLeft: "auto",
              marginRight: "auto",
              display: "block",
              borderRadius: "8px"
            }
          }
        />
      );
    }}
  />
);

export default Image;
