import { BASE_IMG_URL } from "../../API/API";
import {
	StyledItem,
	StyledLink,
	StyledTitle,
	StyledImg,
	StyledSpan,
	StyledTime,
    StyledWrapper,
} from "./item.styled";
import {} from "./item.styled";

export const Item = ({ id, img, title, time, rate }) => {
	return (
		<StyledItem>
			<StyledLink to={`/single/${id}`}>
				<StyledImg src={`${BASE_IMG_URL}/${img}`} width={192} height={288} />
				<StyledWrapper>
					<StyledTitle>{title}</StyledTitle>
					<StyledTime>{time}</StyledTime>
					<StyledSpan>{rate}</StyledSpan>
				</StyledWrapper>
			</StyledLink>
		</StyledItem>
	);
};
