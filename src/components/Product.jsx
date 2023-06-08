import styled from "styled-components";
import CartIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchIcon from "@mui/icons-material/SearchOutlined";
import HeartIcon from "@mui/icons-material/FavoriteBorderOutlined";

const Container = styled.div`
	flex: 1;
	margin: 5px;
	min-width: 280px;
	height: 350px;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const Circle = styled.div``;

const Image = styled.img`
	height: 75%;
`;
const Info = styled.div``;
const Icon = styled.div``;

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
