import React from 'react';
import styled from 'styled-components';
import { Container } from "./Layout";

const HeaderWrapper = styled.div`
	height: 340px;
	background: url("/images/header_bg.jpg");
	border-top: 20px solid #e0d500;
`;

const HeaderLayout = styled.div`
	height: 100%;
	display: flex;
`;

const Logo = styled.div`
	height: 100%;
	display: flex;
	align-items: center;
`;

const LogoLink = styled.a`
	
`;

const Header = () => {
	return (
		<header>
			<HeaderWrapper>
				<Container>
					<HeaderLayout>
						<Logo>
							<LogoLink href="/">
								<img src="/images/logo_img.png" alt="Logo" />
							</LogoLink>
						</Logo>
					</HeaderLayout>
				</Container>
			</HeaderWrapper>
		</header>
	)
};

export default Header;