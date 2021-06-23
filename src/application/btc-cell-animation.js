import styled, { keyframes } from "styled-components";

const changeIncrease = keyframes`
  from {
    background-color: green;
  }

  to {
    background-color: #353535;
  }
  `;

const changeDecrease = keyframes`
	from {
		background-color: red;
	}

	to {
		background-color: #353535;
	}
`;

export const BTCCellContainer = styled.div`
  animation: ${(props) =>
      props.change === "decrease" ? changeDecrease : changeIncrease}
    0.6s forwards;
`;
