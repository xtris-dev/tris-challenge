import { AiOutlineSearch } from "react-icons/ai";

const Search = ({ setSearch }) => {
	return (
		<div className="flex items-center dark:bg-[#0c0c0c] bg-white shadow lg:w-[500px] rounded-lg mb-5 lg:mb-0">
			<AiOutlineSearch className="mx-4 text-xl dark:text-white" />
			<input
				type="text"
				placeholder="Search for a country..."
				className="outline-none py-4 px-4 w-full"
				onChange={(e) => setSearch(e.target.value)}
			/>
		</div>
	);
};

export default Search;
