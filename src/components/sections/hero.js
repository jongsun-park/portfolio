import { useEffect } from "react";
import styled from "styled-components";

const transitionDuration = 700;

export const Hero = () => {
  useEffect(() => {
    const marks = document.querySelectorAll("mark");
    marks.forEach((mark, index) => {
      setTimeout(() => {
        mark.classList.add("mark");
      }, transitionDuration * index);
    });
  }, []);
  return (
    <Container className="row">
      <div className="col">
        <h2 className="section-title">
          Hi, I’m Park, <mark>Web Designer</mark> and <mark>Web Developer</mark>
        </h2>
        <p className="section-description">
          I design and build beautiful websites for businesses around the globe.
          If you need a modern and powerful website, send me an email. If we are
          a good fit, I will give you a time and cost estimate.
        </p>
        <a href="#projects" className="cta section-cta projects">
          see my work
        </a>
      </div>
      <div className="col img-container">
        <img
          src="/images/profile-remove-bg.png"
          alt="profile"
          className="profile"
          draggable="false"
        />
      </div>
    </Container>
  );
};

const Container = styled.div`
  min-height: 60vh;
  flex-direction: row;
  align-items: center;
  // background-color: var(--light-background-color);
  padding: 30px 30px 0;
  border-radius: 1rem;
  position: relative;
  margin-top: 1rem;

  &::after {
    content: "";
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    position: absolute;
    background-color: var(--light-background-color);
    transition: all ease-out 300ms;
    z-index: -2;
    border-radius: 4px;
  }

  &:hover::after {
    background-color: var(--dark-background-color);
  }

  .col {
    flex: 1;
  }

  .img-container {
    display: flex;
    align-self: flex-end;
    margin-left: -10%;
    img {
      max-width: 100%;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;

    .section-title {
      font-size: 2rem;
    }

    .profile {
      max-width: 70%;
      margin: 1rem auto 0;
    }
  }

  a.cta {
    font-weight: bold;
    border-bottom: 2px solid;
    padding-bottom: 4px;

    &:hover .mark::before {
      width: 0;
    }
  }
`;
