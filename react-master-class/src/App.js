import styled from "styled-components";
import { keyframes } from "styled-components";

const Wrapper = styled.div`
	display: flex;
`;

const rotateAnimation = keyframes`
  0%{
    transform: rotate(0deg);
    border-radius: 0px;
  }
  50%{
    border-radius: 100px;
  }
  100%{
    transform: rotate(360deg) ;
    border-radius: 0px;
  }
`;

const Box = styled.div`
	width: 200px;
	height: 200px;
	display: flex;
	background-color: tomato;
	animation: ${rotateAnimation} 5s linear infinite;
	align-items: center;
	justify-content: center;
	span {
		font-size: 36px;
		&:hover {
			font-size: 48px;
		}
		&:active {
			opacity: 0;
		}
	}
`;

function App() {
	return (
		<Wrapper>
			<Box>
				<span>🤩</span>
			</Box>
		</Wrapper>
	);
}

export default App;
