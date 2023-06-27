import styled from "styled-components";
import CartIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchIcon from "@mui/icons-material/SearchOutlined";
import HeartIcon from "@mui/icons-material/FavoriteBorderOutlined";

import popularProduct1 from "../images/popularProduct1.png";
import popularProduct2 from "../images/popularProduct2.png";
import popularProduct3 from "../images/popularProduct3.png";
import popularProduct4 from "../images/popularProduct4.png";
import popularProduct5 from "../images/popularProduct5.png";
import popularProduct6 from "../images/popularProduct6.png";
import popularProduct7 from "../images/popularProduct7.png";

const Info = styled.div`
	opacity: 0;
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0;
	left: 0;
	background-color: rgba(0, 0, 0, 0.2);
	z-index: 3;
	display: flex;
	align-items: center;
	justify-content: center;
	transition: all 0.5s ease;
	cursor: pointer;
`;

const Container = styled.div`
	flex: 1;
	margin: 5px;
	min-width: 280px;
	height: 350px;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: #f5fbfd;
	position: relative;

	&:hover ${Info} {
		opacity: 1;
	}
`;

const Circle = styled.div`
	width: 200px;
	height: 200px;
	border-radius: 50%;
	background-color: white;
	position: absolute;
`;

const Image = styled.img`
	height: 75%;
	z-index: 2;
`;

const Icon = styled.div`
	width: 40px;
	height: 40px;
	border-radius: 50%;
	background-color: white;
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 10px;
	transition: all 0.5s ease;

	&:hover {
		background-color: #e9f5f5;
		transform: scale(1.1);
	}
`;

const Product = ({ item }) => {
	return (
		<Container>
			<Circle />
			<Image src={item.img} />
			<Info>
				<Icon>
					<CartIcon />
				</Icon>
				<Icon>
					<SearchIcon />
				</Icon>
				<Icon>
					<HeartIcon />
				</Icon>
			</Info>
		</Container>
	);
};

export default Product;
