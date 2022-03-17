import React from "react";

const Filter = ({ setFilter }) => {
	return (
		<>
			<select
				name="region"
				className="shadow py-4 px-3 outline-none border-none rounded-lg"
				onChange={(e) => setFilter(e.target.value)}
			>
				<option value="" selected>
					All
				</option>
				<option value="Africa">Africa</option>
				<option value="America">America</option>
				<option value="Asia">Asia</option>
				<option value="Europe">Europe</option>
				<option value="Oceania">Oceania</option>
			</select>
		</>
	);
};

export default Filter;
