import styled from "styled-components";
import { ControlledModalPropType } from "../../Types";
import { createPortal } from "react-dom";

const ModalBackground = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  overflow: auto;
  background-color: #00000070;
  width: 100%;
  height: 100vh;
`;

const ModalContent = styled.div`
  margin: 12% auto;
  padding: 24px;
  background-color: wheat;
  width: 50%;
`;

const ModelInPortal = ({
  isOpen,
  onClose,
  children,
}: ControlledModalPropType) => {
  const modelHolder = document.querySelector("#model-holder");
  return (
    <>
      {isOpen &&
        modelHolder &&
        createPortal(
          <ModalBackground onClick={onClose}>
            <ModalContent onClick={(e) => e.stopPropagation()}>
              <button onClick={onClose}>close</button>
              {children}
            </ModalContent>
          </ModalBackground>,
          modelHolder
        )}
    </>
  );
};

export default ModelInPortal;
