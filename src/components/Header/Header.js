import React from "react";
import { Container } from "../../assets/styles/app-styles";
import {
	StyledForm,
	StyledHeader,
	StyledInput,
	StyledItem,
	StyledList,
	StyledLogo,
	StyledNav,
	StyledNavLink,
	StyledWrapper,
} from "./header.setyled";
export const Header = () => {
	return (
		<>
			<StyledHeader>
				<Container>
					<StyledWrapper>
						<StyledLogo to='/'>TMDB</StyledLogo>
						<StyledForm>
							<StyledInput />
						</StyledForm>
						<StyledNav>
							<StyledList>
								<StyledItem>
									<StyledNavLink to={"/"}>Top Rated</StyledNavLink>
								</StyledItem>
								<StyledItem>
									<StyledNavLink to={"/popular"}>Popular</StyledNavLink>
								</StyledItem>
								<StyledItem>
									<StyledNavLink to={"/upcoming"}>Upcoming</StyledNavLink>
								</StyledItem>
							</StyledList>
						</StyledNav>
					</StyledWrapper>
				</Container>
			</StyledHeader>
		</>
	);
};
