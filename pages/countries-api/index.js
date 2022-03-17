// Components
import Home from "../../components/countries-api/Home";
// React
import Head from "next/head";

export default function index({ data }) {
	return (
		<>
			<Head>
				<title>Discover Countries</title>
			</Head>
			<Home data={data} />
		</>
	);
}

export async function getServerSideProps() {
	let data;

	try {
		const query = await fetch("https://restcountries.com/v2/all");
		data = await query.json();
	} catch (error) {
		alert("Error while retrieving countries");
		window.location.reload();
	}

	return {
		props: {
			data,
		},
	};
}
