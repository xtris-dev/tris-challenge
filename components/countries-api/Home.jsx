import Navbar from "../../components/countries-api/Navbar";
import Filter from "../../components/countries-api/Filter";
import Search from "../../components/countries-api/Search";
import HomeCountry from "../../components/countries-api/HomeCountry";
// React
import { useState } from "react";

const Home = ({ data }) => {
	const [filter, setFilter] = useState("");
	const [search, setSearch] = useState("");

	function capitalize(value) {
		const finalSentence = value.replace(/(^\w{1})|(\s+\w{1})/g, (letter) =>
			letter.toUpperCase()
		);
		return finalSentence;
	}

	return (
		<div className="bg-zinc-100 dark:bg-[#181818] pb-20 min-h-screen">
			<Navbar />
			<div className="max-w-[1440px] mx-auto px-8">
				<div className="mt-10 flex flex-col lg:flex-row lg:items-center justify-between">
					<Search setSearch={setSearch} />
					<Filter setFilter={setFilter} />
				</div>
				<div className="mt-14">
					<div className="grid grid-cols-1 lg:grid-cols-4 gap-20">
						{data
							.filter((filterCountry) =>
								filterCountry.region.includes(filter)
							)
							.filter((searchName) =>
								searchName.name.includes(capitalize(search))
							)
							.map((country, id) => (
								<HomeCountry
									key={id}
									alpha={country.alpha3Code}
									img={country.flags.svg}
									country={country.name}
									pop={country.population}
									region={country.region}
									capital={country.capital}
								/>
							))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
