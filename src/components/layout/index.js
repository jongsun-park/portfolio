import styled from "styled-components";
import resume from "../../assets/jongsun_park_resume.pdf";

const Header = () => (
  <HeaderContainer className="header">
    <h1 className="site-title">Jongsun Park</h1>
    <nav>
      <ul>
        <li>
          <a href="/">Contact me</a>
        </li>
        <li>
          <a href="#projects">My works</a>
        </li>
        <li>
          <a href={resume} download>
            Download Resume
          </a>
        </li>
      </ul>
    </nav>
  </HeaderContainer>
);

const HeaderContainer = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  .site-title {
    font-size: 1rem;
    text-transform: uppercase;
    margin: 0;
    cursor: pointer;
  }

  nav ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
  }

  li + li {
    margin-left: 1rem;
  }
`;

const Footer = () => (
  <FooterContainer className="footer">
    Jongsun Park © {new Date().getFullYear()}
  </FooterContainer>
);

const Layout = ({ children }) => {
  return (
    <LayoutContainer className="layout">
      <Header />
      <main>{children}</main>
      <Footer />
    </LayoutContainer>
  );
};

export default Layout;

const LayoutContainer = styled.div`
  max-width: var(--bp-xxl);
  margin: var(--gutter-sm) auto;
  padding: var(--gutter-sm);
`;

const FooterContainer = styled.footer``;
