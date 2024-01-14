import styled from "styled-components";
import UncontrolledForm from "./UncontrolledForm";
import ControlledForm from "./ControlledForm";
import Modal from "../Section2/Modal/Modal";
import ControlledModal from "./ControlledModal";
import { useState } from "react";
import UfContainer from "./UfContainer";
import CfContainer from "./CfContainer";

const Container = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
`;

const Child = styled.div`
  border: 1px solid black;
  padding: 10px;
`;

const Section4 = () => {
  const [isControlledModalOpen, setIsControlledModalOpen] = useState(false);
  return (
    <Container>
      <div>
        Uncontrolled form
        <Child>
          <UncontrolledForm />
        </Child>
      </div>
      <div>
        Controlled form
        <Child>
          <ControlledForm />
        </Child>
      </div>
      <div>
        Uncontrolled Modal
        <Child>
          <Modal>
            <h3>Uncontrolled modal content.</h3>
          </Modal>
        </Child>
      </div>
      <div>
        Controlled Modal
        <Child>
          <button onClick={() => setIsControlledModalOpen(true)}>
            simple modal
          </button>
          <ControlledModal
            isOpen={isControlledModalOpen}
            onClose={() => setIsControlledModalOpen(false)}
          >
            <h3>Controlled modal content.</h3>
          </ControlledModal>
        </Child>
      </div>
      <div>
        Uncontrolled Flow
        <Child>
          <UfContainer />
        </Child>
      </div>
      <div>
        Controlled Flow
        <Child>
          <CfContainer />
        </Child>
      </div>
    </Container>
  );
};

export default Section4;
