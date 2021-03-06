import React from "react"
import styled from "styled-components"
import Background from "../images/books3.jpg"
import withSimpleErrorBoundary from "../util/withSimpleErrorBoundary"

const BannerWrapper = styled.header`
  height: 30rem;
  max-height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
  background-color: #c0392b;
  background-image: url(${Background});
  background-size: cover;
  text-align: center;
  h1 {
  }
  h2 {
  }
`

const Heading = styled.div`
  font-family: "Roboto Slab", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, Noto Sans, sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-weight: 500;
  font-size: 2rem;
  color: #6e3c1b;
  background: white;
  padding: 0.5rem;
  margin: 1rem;
  text-align: center;
  @media only screen and (min-width: 720px) {
    font-size: 3rem;
  }
`

const SubHeading = styled.div`
    font-family: 'Roboto Slab', -apple-system, BlinkMacSystemFont, 'Segoe UI',
      Roboto, 'Helvetica Neue', Arial, Noto Sans, sans-serif, 'Apple Color Emoji',
      'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
    font-weight: 500;
    color: #6E3C1B;
    background: white;
    padding .5rem;
    font-size: 1.4rem;
    margin: 0 1rem;
`

const Banner = () => (
  <BannerWrapper>
    <Heading>Tietokantojen perusteet</Heading>
    <SubHeading>
      Digitalisaation kulmakivi tutuksi -- menetelmiä tiedon tallentamiseen ja
      hakemiseen{" "}
    </SubHeading>
  </BannerWrapper>
)

export default withSimpleErrorBoundary(Banner)
