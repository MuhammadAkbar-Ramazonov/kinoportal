import { Route, Routes } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { GlobalStyles } from "./assets/styles/global-styles";
import { Home } from "./pages/Home";
import { Popular } from "./pages/Popular";
import { Upcoming } from "./pages/Upcoming";
import { Single } from "./pages/Single";
import { Person } from "./pages/Person/Person";

export function App() {
	return (
		<>
			<Header />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/popular/' element={<Popular />} />
				<Route path='/upcoming/' element={<Upcoming />} />
				<Route path='/single/:id' element={<Single />} />
				<Route path='/person/:id' element={<Person />} />
			</Routes>
			<GlobalStyles />
		</>
	);
}
