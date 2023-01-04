import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledItem = styled.li`
	display: flex;
	position: relative;
	width: 23%;
	height: 550px;
	background-color: darkcyan;
	padding: 16px;
	border-radius: 8px;
`;
export const StyledLink = styled(Link)`
	display: flex;
	flex-direction: column;
	justify-content: start;
	width: 100%;
	height: 100%;
	text-decoration: none;
`;
export const StyledWrapper = styled.div`
`;
export const StyledTitle = styled.h3`
	color: #fff;
`;
export const StyledImg = styled.img`
	width: 100%;
`;
export const StyledSpan = styled.span`
	position: absolute;
	top: 16px;
	right: 16px;
	padding: 5px;
	color: #fff;
	background-color: darkcyan;
	border-radius: 12px 0 0 12px;
`;
export const StyledTime = styled.time`
	color: #fff;
`;
