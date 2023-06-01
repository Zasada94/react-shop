import styled from "styled-components";
import ArrowLeft from "@mui/icons-material/ArrowLeftOutlined";
import ArrowRight from "@mui/icons-material/ArrowRightOutlined";
import image1 from "../images/banner1.png";
import image2 from "../images/banner2.png";
import image3 from "../images/banner3.png";

const Container = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;
	overflow: hidden;
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
	display: flex;
`;

const Slide = styled.div`
	width: 100vw;
	height: 100vh;
	display: flex;
	align-items: center;
	background-color: #${(props) => props.bg};
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
const Title = styled.h1`
	font-size: 70px;
`;
const Description = styled.p`
	margin: 50px 0;
	font-size: 20px;
	font-weight: 500;
	letter-spacing: 3px;
`;
const Button = styled.button`
	padding: 10px;
	font-size: 20px;
	background-color: rgba(0, 0, 0, 0);
	cursor: pointer;
`;

const Slider = () => {
	return (
		<Container>
			<Arrow direction="left">
				<ArrowLeft />
			</Arrow>
			<Wrapper>
				<Slide bg="f5fafd">
					<ImgContainer>
						<Image src={image1} />
					</ImgContainer>
					<InfoContainer>
						<Title>SUMMER SALE</Title>
						<Description>
							DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.
						</Description>
						<Button>SHOW NOW</Button>
					</InfoContainer>
				</Slide>
				<Slide bg="fcf1ed">
					<ImgContainer>
						<Image src={image2} />
					</ImgContainer>
					<InfoContainer>
						<Title>WINTER SALE</Title>
						<Description>
							AMPLIFY YOUR STYLE WITH 15% PRICE-CUT ON NOT DISCOUNTED STUFF.
						</Description>
						<Button>SHOW NOW</Button>
					</InfoContainer>
				</Slide>
				<Slide bg="fbf0f4">
					<ImgContainer>
						<Image src={image3} />
					</ImgContainer>
					<InfoContainer>
						<Title>ACCESORRIES SALE</Title>
						<Description>
							UNLEASH YOUR STYLE WITH CONFIDENCE! ENJOY 10% OFF ACCESSORIES!
						</Description>
						<Button>SHOW NOW</Button>
					</InfoContainer>
				</Slide>
			</Wrapper>
			<Arrow direction="right">
				<ArrowRight />
			</Arrow>
		</Container>
	);
};

export default Slider;
