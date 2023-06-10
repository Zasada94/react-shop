import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import popularProduct1 from "../images/popularProduct1.png";

const Container = styled.div``;

const Wrapper = styled.div`
	padding: 50px;
	display: flex;
`;

const ImgContainer = styled.div`
	flex: 1;
`;

const Image = styled.img`
	width: 100%;
	height: 90vh;
	object-fit: contain;
`;

const InfoContainer = styled.div`
	flex: 1;
	padding: 0px 50px;
`;

const Title = styled.h1`
	font-weight: 200;
`;

const Desc = styled.p`
	margin: 20px 0px;
`;

const Price = styled.span`
	font-weight: 100;
	font-size: 40px;
`;

const Product = () => {
	return (
		<Container>
			<Navbar />
			<Announcement />
			<Wrapper>
				<ImgContainer>
					<Image src={popularProduct1} />
				</ImgContainer>
				<InfoContainer>
					<Title>Dyed t-shirt</Title>
					<Desc>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam
						numquam maiores mollitia animi molestiae illo tempora quaerat quas
						praesentium qui laudantium consectetur quo, quis fugiat dolores sunt
						explicabo dicta odio!
					</Desc>
					<Price>80 PLN</Price>
				</InfoContainer>
			</Wrapper>
			<Newsletter />
			<Footer />
		</Container>
	);
};

export default Product;
