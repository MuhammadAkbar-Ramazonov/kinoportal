import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";

export const StyledHeader = styled.header`
	padding: 20px;
	background-color: darkcyan;
`;
export const StyledLogo = styled(Link)`
	color: #000;
	text-decoration: none;
	font-size: 20px;
`;
export const StyledForm = styled.form`
	max-width: 300px;
	width: 100%;
`;
export const StyledInput = styled.input`
	width: 100%;
	height: 25px;
	border: 0;
	background-color: #fff;
	border-radius: 8px;
`;

export const StyledNav = styled.nav``;
export const StyledList = styled.ul`
	display: flex;
	align-items: center;
	justify-content: space-between;
	list-style: none;
	gap: 15px;
`;
export const StyledItem = styled.li``;
export const StyledNavLink = styled(NavLink)`
	color: #000;
	text-decoration: none;
	font-size: 17px;
`;
export const StyledWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;
