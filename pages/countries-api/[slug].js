import Navbar from "../../components/countries-api/Navbar";
// next
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
// react icons
import { MdOutlineArrowBack } from "react-icons/md";
// millify
import millify from "millify";

const Slug = ({ data }) => {
	return (
		<div className="bg-zinc-100 dark:bg-[#181818] pb-20  min-h-screen">
			<Head>
				<title>{data.name} - Discover Countries</title>
			</Head>
			<Navbar />
			<div className="max-w-[1440px] px-8 mx-auto">
				<div className="mt-20">
					<Link href="/countries-api" passHref>
						<button className="bg-white dark:bg-[#0c0c0c] px-10 py-2 shadow-lg flex items-center">
							<MdOutlineArrowBack className="mr-2" />
							Back
						</button>
					</Link>
					<div className="flex flex-col lg:flex-row lg:items-center mt-20">
						<div className="lg:basis-[60%]">
							<Image
								src={data.flags.svg}
								alt="e"
								width={640}
								height={360}
								layout="intrinsic"
							/>
						</div>
						<div className="lg:basis-[40%] mt-10 lg:mt-0">
							<h2 className="text-3xl font-bold">{data.name}</h2>
							<div className="flex flex-col lg:flex-row lg:justify-between mt-8">
								<div>
									<ul>
										<li className={tailwind.links}>
											<span className={tailwind.span}>
												Native name:
											</span>{" "}
											{data?.nativeName}
										</li>
										<li className={tailwind.links}>
											<span className={tailwind.span}>
												Population:
											</span>{" "}
											{millify(data?.population)}
										</li>
										<li className={tailwind.links}>
											<span className={tailwind.span}>
												Region:
											</span>{" "}
											{data?.region}
										</li>
										<li className={tailwind.links}>
											<span className={tailwind.span}>
												Sub Region:
											</span>{" "}
											{data?.subregion}
										</li>
										<li className={tailwind.links}>
											<span className={tailwind.span}>
												Capital:
											</span>{" "}
											{data?.capital}
										</li>
									</ul>
								</div>
								<div>
									<ul>
										<li className={tailwind.links}>
											<span className={tailwind.span}>
												Top Level Domain:
											</span>{" "}
											{data?.topLevelDomain}
										</li>
										<li className={tailwind.links}>
											<span className={tailwind.span}>
												Currencies:
											</span>{" "}
											{data?.currencies[0]?.name}
										</li>
										<li className={tailwind.links}>
											<span className={tailwind.span}>
												Languages:
											</span>{" "}
											<p>
												{data.languages.map(
													(language) => (
														<>{language?.name} </>
													)
												)}
											</p>
										</li>
									</ul>
								</div>
							</div>
							<div className="mt-16 flex flex-col lg:flex-row lg:items-center">
								<p className={tailwind.span}>
									Border Countries:
								</p>
								<div>
									{data.borders &&
										data.borders.map((country, id) => (
											<>
												<Link href={country} passHref>
													<button
														key={id}
														className="bg-white dark:bg-[#0c0c0c] shadow-lg px-6 py-0.5 my-2 mx-4"
													>
														{country}
													</button>
												</Link>
											</>
										))}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

const tailwind = {
	span: "font-semibold",
	links: "my-2",
};

export default Slug;

export async function getServerSideProps(ctx) {
	const pageSlug = ctx.query.slug;
	let data;

	try {
		const request = await fetch(
			`https://restcountries.com/v2/alpha/${pageSlug}`
		);
		data = await request.json();
	} catch (error) {
		window.location.reload();
	}

	return {
		props: {
			data,
		},
	};
}
