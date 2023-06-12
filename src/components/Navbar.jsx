import React from "react";
import styled from "styled-components";
import Search from "@mui/icons-material/Search";
import Badge from "@mui/material/Badge";
import CartIcon from "@mui/icons-material/ShoppingCartOutlined";
import { mobile } from "../responsive";

const Container = styled.div`
	height: 60px;
	overflow: hidden;
	${mobile({
		height: "50px",
	})}
`;

const Wrapper = styled.div`
	padding: 10px 20px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	${mobile({
		padding: "10px 0px",
	})}
`;

const Left = styled.div`
	flex: 1;
	display: flex;
	align-items: center;
`;
const Language = styled.div`
	font-size: 14px;
	cursor: pointer;
	${mobile({
		display: "none",
	})}
`;

const SearchContainer = styled.div`
	border: 0.5px solid lightgray;
	display: flex;
	align-items: center;
	margin-left: 25px;
	padding: 5px;
	${mobile({
		marginLeft: "10px",
	})}
`;

const Input = styled.input`
	border: none;
	${mobile({
		width: "50px",
	})}
`;
const Center = styled.div`
	flex: 1;
	text-align: center;
`;
const Logo = styled.h1`
	font-weight: bold;
	${mobile({
		fontSize: "20px",
	})}
`;
const Right = styled.div`
	flex: 1;
	display: flex;
	align-items: center;
	justify-content: flex-end;
	${mobile({
		justifyContent: "center",
		flex: 1.5,
	})}
`;

const MenuItem = styled.div`
	font-size: 14px;
	cursor: pointer;
	margin-left: 20px;
	${mobile({
		fontSize: "11px",
		marginLeft: "5px",
	})}
`;

const Navbar = () => {
	return (
		<Container>
			<Wrapper>
				<Left>
					<Language>EN</Language>
					<SearchContainer>
						<Input placeholder="Search"></Input>
						<Search style={{ color: "gray", fontSize: 16 }} />
					</SearchContainer>
				</Left>
				<Center>
					<Logo>GEAR&GARM</Logo>
				</Center>
				<Right>
					<MenuItem>REGISTER</MenuItem>
					<MenuItem>SIGN IN</MenuItem>
					<MenuItem>
						<Badge badgeContent={1} color="primary">
							<CartIcon color="action" />
						</Badge>
					</MenuItem>
				</Right>
			</Wrapper>
		</Container>
	);
};

export default Navbar;
