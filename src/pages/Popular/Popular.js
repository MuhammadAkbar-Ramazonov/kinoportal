import { useEffect, useState } from "react";
import { Container } from "../../assets/styles/app-styles";
import { StyledList, StyledSection, StyledWrapper } from "./popular.styled";
import { api } from "../../API/API";
import { Item } from "../../components/Item";
import ReactPaginate from "react-paginate";

export const Popular = () => {
	const [page, setPage] = useState(1);

	const [movies, setMovies] = useState({
		isLoading: true,
		data: [],
		isError: false,
	});

	const getMovies = async () => {
		const data = await api.getPopularMovies(page);
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
	}, [page]);

	return (
		<StyledSection>
			<Container>
				{movies.isLoading ? <h1>Loading</h1> : null}
				{movies.isError ? <h1>Error</h1> : null}

				<StyledWrapper>
					{movies.data.results ? (
						<StyledList>
							{movies.data.results.map((item) => (
								<Item
									key={item.id}
									id={item.id}
									img={item.poster_path}
									title={item.original_title}
									time={item.release_date}
									rate={item.vote_average}
								/>
							))}
						</StyledList>
					) : null}
					<ReactPaginate
						className='pagination gap-3 my-5 justify-content-center list-unstiled'
						forcePage={page === 1 ? 0 : page - 1}
						previousLinkClassName='btn btn-primary'
						nextLinkClassName='btn btn-primary'
						pageClassName='page-item'
						pageLinkClassName='page-link'
						activeClassName='active'
						pageCount={movies.data?.total_pages}
						previousLabel='prev'
						nextLabel='next'
						onPageChange={(data) => {
							console.log(data);
							setPage(data.selected + 1);
						}}
					/>
				</StyledWrapper>
			</Container>
		</StyledSection>
	);
};
