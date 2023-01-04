import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {  StyledSection } from "./single.styled";
import { Container } from "../../assets/styles/app-styles";
import { api } from "../../API/API";
import { SingleWrapper } from "../../components/Single-wrapper/Single-wrapper";
export const Single = () => {
	const { id } = useParams();

	const [movies, setMovies] = useState({
		isLoading: true,
		data: {},
		isError: false,
	});

	const getMovies = async () => {
		const data = await api.getSinglePageMovies(id);
		if (data) {
			setMovies({
				isError: false,
				data: data.data,
				isLoading: false,
			});
		}
	};

	useEffect(() => {
		getMovies();
	}, [id]);

	return (
		<StyledSection>
			<Container>
				{movies.isLoading ? <h1>Loading</h1> : null}
				{movies.isError ? <h1>Error</h1> : null}
				{movies.data ? <SingleWrapper data={movies.data} /> : null}
			</Container>
		</StyledSection>
	);
};
