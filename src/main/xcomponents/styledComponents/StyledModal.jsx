
import Modal  from "styled-react-modal";

const StyledModal = Modal.styled`
  width: 800px;
  height: 400px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: white;
  opacity: ${props => props.opacity};
  transition: opacity ease 500ms;
`;
export default StyledModal;
