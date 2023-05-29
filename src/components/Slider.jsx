import styled from "styled-components";
import ArrowLeft from "@mui/icons-material/ArrowLeftOutlined";
import ArrowRight from "@mui/icons-material/ArrowRightOutlined";
import image1 from "../images/elvis.png";

const Container = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;
`;

const Arrow = styled.div`
	width: 50px;
	height: 50px;
	background-color: #fff7f7;
	border-radius: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
	position: absolute;
	top: 0;
	bottom: 0;
	left: ${(props) => props.direction === "left" && "10px"};
	right: ${(props) => props.direction === "right" && "10px"};
	margin: auto;
	cursor: pointer;
	opacity: 0.5;
`;

const Wrapper = styled.div`
	height: 100%;
`;

const Slide = styled.div`
	width: 100vw;
	height: 100vh;
	display: flex;
	align-items: center;
`;
const ImgContainer = styled.div`
	height: 100%;
	flex: 1;
`;

const Image = styled.img`
	height: 80%;
`;
const InfoContainer = styled.div`
	flex: 1;
	padding: 50px;
`;

const Slider = () => {
	return (
		<Container>
			<Arrow direction="left">
				<ArrowLeft />
			</Arrow>
			<Wrapper>
				<Slide>
					<ImgContainer>
						<Image src={image1} />
					</ImgContainer>
					<InfoContainer></InfoContainer>
				</Slide>
			</Wrapper>
			<Arrow direction="right">
				<ArrowRight />
			</Arrow>
		</Container>
	);
};

export default Slider;
