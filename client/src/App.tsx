import styled from "styled-components";
import { sections } from "./utils/sections";

const Container = styled.div`
  margin-bottom: 20px;
  border-bottom: 10px dashed blue;
  padding-bottom: 10px;
`;

const App = () => {
  return (
    <>
      {sections.map((section, ind) => {
        return (
          <Container key={ind}>
            <h2>{section.title}</h2>
            {section?.component && <section.component />}
          </Container>
        );
      })}
    </>
  );
};

export default App;
