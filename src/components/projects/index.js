import styled from "styled-components";
import "./index.css";

const description =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc accumsan arcu et lacinia blandit. Curabitur eleifend mauris vel elit elementum varius. Aliquam non rutrum metus. Donec dapibus tristique rutrum. Sed aliquam mauris at diam aliquam placerat. Vestibulum in augue congue nisl imperdiet pellentesque vel eu ante. ";

const data = [
  {
    id: "project_1",
    preview: "/images/johnengland-thumbs-min.png",
    title: "John England",
    tags: ["Concept", "Bootstrap5", "Wordpress", "Design"],
    desctiption: description,
    live: "https://john-england.netlify.app/",
  },
  {
    id: "project_2",
    preview: "/images/storefront-thumbnail-min.png",
    title: "Shopify Storefront Store",
    tags: ["Shopify Storefront", "CRA", "Reactjs", "API"],
    desctiption: description,
    live: "https://park-storefront.netlify.app/",
  },
  {
    id: "project_3",
    preview: "/images/ilp-thumbs-min.png",
    title: "Irish Linen Properties",
    tags: ["Shopify", "Themekit", "Design"],
    desctiption: description,
    live: "https://irish-linen-properties.myshopify.com/",
  },
];

const PreviewContainer = () => (
  <>
    {data.map(
      (p) =>
        p &&
        p.preview && (
          <img
            key={p.id}
            id={p.id}
            className="imageToShow"
            src={p.preview}
            alt={p.title}
          />
        )
    )}
  </>
);

const ContentContainer = () => (
  <>
    {data.map(
      (p) =>
        p && (
          <div className="contentMarker" data-marker-content={p.id} key={p.id}>
            <div className="contentMarker__inner">
              <img className="md-only" src={p.preview} alt={p.title} />
              <h2>{p.title}</h2>
              <ul className="product-tags">
                {p.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
              <p>{p.desctiption}</p>
              <p>{p.desctiption}</p>
              <p>{p.desctiption}</p>
              <a
                className="link"
                href={p.live}
                target="_blank"
                rel="noreferrer"
              >
                Live Website
              </a>
            </div>
          </div>
        )
    )}
  </>
);

const Projects = () => {
  return (
    <ProjectsContainer className="projects" id="projects">
      <div className="content-container">
        <div className="left-content">
          <PreviewContainer />
        </div>
        <div className="right-content">
          <ContentContainer />
        </div>
      </div>
    </ProjectsContainer>
  );
};

export default Projects;

const ProjectsContainer = styled.div`
  .contentMarker {
    min-height: 150vh;
  }

  .product-tags {
    display: flex;
    flex-wrap: wrap;
    margin: 1rem auto 0;
    li {
      padding: 4px 10px;
      border: 2px solid transparent;
      background: var(--light-background-color);
      margin: 0 10px 10px 0;
      border-radius: 4px;
      cursor: pointer;
    }
    li:hover {
      border: 2px solid var(--dark-background-color);
    }
  }
`;
