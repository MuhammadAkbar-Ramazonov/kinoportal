import React, { useEffect, useState } from "react";
import { Link, NavLink, useParams } from "react-router-dom";
import { api, BASE_IMG_URL } from "../../API/API";
import {
	StyledDesc,
	StyledDiv,
	StyledHeading,
	StyledImg,
	StyledItem,
	StyledItemInner,
	StyledLink,
	StyledLinkInner,
	StyledList,
	StyledListWrapper,
	StyledListWrapperInner,
	StyledText,
	StyledTitle,
	StyledWrapper,
	StyledWrapperInner,
} from "./single-wrapper.styled";
export const SingleWrapper = ({ data }) => {
	const { id } = useParams();
	const [actors, setActors] = useState([]);
	const [similar, setSimilar] = useState([]);
	const getMovieActors = async (movieId) => {
		const data = await api.getActorsMovies(movieId);
		setActors(data.data);
	};
	const getSimilarMovie = async (movieId) => {
		const data = await api.getSimilarMovie(movieId);
		setSimilar(data.data.results);
	};

	useEffect(() => {
		getMovieActors(id);
		getSimilarMovie(id);
	}, [id]);
	return (
		<StyledWrapper>
			<StyledWrapperInner>
				<StyledImg
					src={`${BASE_IMG_URL}${data.backdrop_path}`}
					alt={data.name}
				/>
				<StyledDiv>
					<StyledTitle>{data.original_title}</StyledTitle>
					<StyledText>
						{data.release_date} ({data.original_language})
					</StyledText>
					<StyledText>
						Genres:
						{data.genres?.map((item) => " " + item.name + " ")}
					</StyledText>
					<StyledText>Budget: {data.budget}</StyledText>
					<StyledText>Overview: {data.overview}</StyledText>
					<StyledLink href={`${data.homepage}`} target={"blank"}>
						Home Page
					</StyledLink>
					<StyledLink
						href={`https://www.imdb.com/title/${data.imdb_id}`}
						target={"blank"}
					>
						View Treller
					</StyledLink>
				</StyledDiv>
			</StyledWrapperInner>

			<StyledListWrapper>
				<StyledHeading>Credits movies</StyledHeading>

				{actors?.cast?.length ? (
					<StyledList>
						{actors.cast.map((item) => (
							<StyledItem>
								<StyledLinkInner to={`/person/${item.id}`}>
									<StyledImg
										width={200}
										height={50}
										src={`${BASE_IMG_URL}${item?.profile_path}`}
										alt={item.title}
									/>
									<StyledHeading>{item.name}</StyledHeading>
								</StyledLinkInner>
							</StyledItem>
						))}
					</StyledList>
				) : (
					""
				)}
			</StyledListWrapper>

			<StyledListWrapper>
				<StyledHeading>Similar movies</StyledHeading>
				<StyledList>
					{similar.map((item) => (
						<StyledItemInner>
							<StyledLinkInner to={`/single/${item.id}`}>
								<StyledImg
									width={200}
									height={112}
									src={`${BASE_IMG_URL}${item.backdrop_path}`}
									alt={item.title}
								/>
								<StyledHeading>{item.title}</StyledHeading>
							</StyledLinkInner>
						</StyledItemInner>
					))}
				</StyledList>
			</StyledListWrapper>
		</StyledWrapper>
	);
};
