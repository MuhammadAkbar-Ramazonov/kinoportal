import { NavLink, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { api, BASE_IMG_URL } from "../../API/API";
import { Container } from "../../assets/styles/app-styles";

import {
	StyledListWrapper,
	StyledList,
	StyledImg,
	StyledItem,
	StyledLink,
	StyledText,
	StyledWrapper,
	StyledImgMain,
	StyledDiv,
	StyledTitle,
	StyledDesc,
	StyledDescinner,
} from "./person-wrapper.styled";
export const Person = () => {
	const { id } = useParams();

	const [person, setPerson] = useState({
		isLoading: true,
		data: [],
		isError: false,
	});

	const [actorMovies, setActorMovies] = useState([]);

	const getMovies = async (movieId) => {
		const data = await api.getPerson(movieId);
		setPerson(data);
	};

	const getActorsMovies = async (movieId) => {
		const data = await api.getPersonActorsMovies(movieId);
		setActorMovies(data.data.cast);
	};

	useEffect(() => {
		getMovies(id);
		getActorsMovies(id);
	}, [id]);

	console.log(actorMovies);

	return (
		<Container className='container pt-3'>
			<StyledWrapper>
				<StyledImgMain
					width={400}
					height={400}
					src={`${BASE_IMG_URL}${person.data.profile_path}`}
					alt={"Photos"}
				/>

				<StyledDiv>
					<StyledTitle>{person.data.name}</StyledTitle>
					<StyledDesc>
						Place of Birth:
						<StyledDescinner>{person.data.place_of_birth}</StyledDescinner>
					</StyledDesc>
					<StyledDesc>
						Popularity:
						<StyledDescinner> {person.data.popularity}</StyledDescinner>
					</StyledDesc>
					<StyledDesc>
						Known Department:
						<StyledDescinner>
							{person.data.known_for_department}
						</StyledDescinner>
					</StyledDesc>
				</StyledDiv>
			</StyledWrapper>
			<StyledDiv>
				<StyledDesc>{person.data.biography}</StyledDesc>

				<StyledListWrapper>
					<p>Movies: </p>
					<StyledList>
						{actorMovies.map((item) => (
							<StyledItem>
								<StyledLink to={`/single/${item.id}`}>
									<StyledImg
										width={200}
										height={100}
										src={
											item.backdrop_path
												? `${BASE_IMG_URL}${item.backdrop_path}`
												: "https://picsum.photos/100/56"
										}
										alt={item.name}
									/>
									<StyledText>{item.original_title}</StyledText>
								</StyledLink>
							</StyledItem>
						))}
					</StyledList>
				</StyledListWrapper>
			</StyledDiv>
		</Container>
	);
};
