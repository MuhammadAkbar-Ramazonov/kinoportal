import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledListWrapper = styled.div`
	position: relative;
	margin: 0 auto;
	margin-top: 40px;
	margin-bottom: 50px;
`;

export const StyledWrapper = styled.div`
	display: flex;
	align-items: center;
	margin-bottom: 30px;
`;
export const StyledImg = styled.img`
	margin-bottom: 10px;
	border-radius: 10px;
`;

export const StyledDiv = styled.div``;
export const StyledTitle = styled.h2``;
export const StyledDesc = styled.p`
	margin: 0;
`;
export const StyledDescinner = styled.p`
	display: inline-block;
	font-weight: 500;
	margin: 0;
	font-size: 17px;
`;

export const StyledImgMain = styled.img`
	margin-right: 100px;
	border-radius: 10px;
`;
export const StyledItem = styled.li`
	height: 150px;
	width: 200px;
`;

export const StyledLink = styled(Link)`
	text-decoration: none;
	width: 150px;
`;
export const StyledText = styled.p`
	color: #000;
`;

export const StyledList = styled.ul`
	margin: 0 auto;
	display: flex;
	align-items: center;
	overflow-x: scroll;
	overflow-y: hidden;
	padding-left: 0;
	width: 100%;
	margin: 0;
	list-style: none;
	gap: 15px;
`;
