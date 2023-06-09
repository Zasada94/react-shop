import styled from "styled-components";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";
import PlaceIcon from "@mui/icons-material/Place";
import PhoneIcon from "@mui/icons-material/Phone";
import MailIcon from "@mui/icons-material/MailOutline";
import paymentImage from "../images/payment.png";

const Container = styled.div`
	display: flex;
`;

const Left = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	padding: 20px;
`;

const Logo = styled.h1``;

const Desc = styled.p`
	margin: 20px 0px;
`;

const SocialContainer = styled.div`
	display: flex;
`;

const SocialIcon = styled.div`
	width: 40px;
	height: 40px;
	border-radius: 50%;
	color: white;
	background-color: #${(props) => props.color};
	display: flex;
	align-items: center;
	justify-content: center;
	margin-right: 20px;
`;

const Center = styled.div`
	flex: 1;
	padding: 20px;
`;

const Title = styled.h3`
	margin-bottom: 30px;
`;

const List = styled.ul`
	margin: 0;
	padding: 0;
	list-style: none;
	display: flex;
	flex-wrap: wrap;
`;

const ListItem = styled.li`
	width: 50%;
	margin-bottom: 10px;
`;

const Right = styled.div`
	flex: 1;
	padding: 20px;
`;

const ContactItem = styled.div`
	margin-bottom: 20px;
	display: flex;
	align-items: center;
`;

const Payment = styled.img`
	width: 50%;
`;

const Footer = () => {
	return (
		<Container>
			<Left>
				<Logo>GEAR&GARM</Logo>
				<Desc>Reach us through our social media!</Desc>
				<SocialContainer>
					<SocialIcon color="3B5999">
						<FacebookIcon />
					</SocialIcon>
					<SocialIcon color="E4405F">
						<InstagramIcon />
					</SocialIcon>
					<SocialIcon color="55acee">
						<TwitterIcon />
					</SocialIcon>
					<SocialIcon color="e60023">
						<PinterestIcon />
					</SocialIcon>
				</SocialContainer>
			</Left>
			<Center>
				<Title>Useful Links</Title>
				<List>
					<ListItem>Home</ListItem>
					<ListItem>T-shirts</ListItem>
					<ListItem>Overwear</ListItem>
					<ListItem>Accessories</ListItem>
					<ListItem>My account</ListItem>
					<ListItem>Order tracking</ListItem>
					<ListItem>Wishlist</ListItem>
					<ListItem>Terms</ListItem>
				</List>
			</Center>
			<Right>
				<Title>Contact</Title>
				<ContactItem>
					<PlaceIcon style={{ marginRight: "10px" }} />
					Solidarity Alley 157, 0-0-877 Warsaw, Poland
				</ContactItem>
				<ContactItem>
					<PhoneIcon style={{ marginRight: "10px" }} />
					+48 512 834 555
				</ContactItem>
				<ContactItem>
					<MailIcon style={{ marginRight: "10px" }} />
					gearngarm@gmail.com
				</ContactItem>
				<Payment src={paymentImage} />
			</Right>
		</Container>
	);
};

export default Footer;
