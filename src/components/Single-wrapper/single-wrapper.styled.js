import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledListWrapper = styled.div`
	position: relative;
	margin: 0 auto;
	margin-top: 40px;
`;

export const StyledWrapper = styled.div`
	margin-top: 50px;
	margin-bottom: 50px;
`;
export const StyledWrapperInner = styled.div`
	display: flex;
	justify-content: space-between;
`;
export const StyledImg = styled.img`
	margin-right: 50px;
	border-radius: 10px;
`;
export const StyledText = styled.p``;
export const StyledTitle = styled.h2``;
export const StyledDiv = styled.div``;

export const StyledLink = styled.a`
	display: inline-block;
	text-decoration: none;
	margin-top: 10px;
	margin-right: 10px;
	padding: 10px;
	border-radius: 10px;
	color: #fff;
	background-color: darkcyan;
`;

export const StyledList = styled.ul`
	position: relative;
	margin: 0 auto;
	display: flex;
	align-items: center;
	overflow-x: scroll;
	padding-left: 0;
	width: 100%;
	margin: 0;
	list-style: none;
	gap: 15px;
`;
export const StyledItem = styled.li``;
export const StyledLinkInner = styled(Link)`
	text-decoration: none;
	color: #000;
	margin-bottom: 50px;
`;

export const StyledItemInner = styled.li`
	height: 200px;
`;

export const StyledHeading = styled.h4``;
