/* eslint-disable @next/next/no-img-element */
import millify from "millify";
import Link from "next/link";

const HomeCountry = (props) => {
	return (
		<Link href={`/countries-api/${props.alpha}`} passHref>
			<div className="rounded-xl overflow-hidden shadow-md cursor-pointer">
				<img
					src={props.img}
					alt="a"
					className="object-cover h-[200px] w-full"
				/>
				<div className="bg-white dark:bg-[#0c0c0c] py-4 px-5">
					<h2 className="font-bold text-xl mb-4">{props.country}</h2>
					<ul>
						<li>
							<span className={tailwind.links}>Population :</span>{" "}
							{millify(props.pop)}
						</li>
						<li>
							<span className={tailwind.links}>Region :</span>{" "}
							{props.region}
						</li>
						<li>
							<span className={tailwind.links}>Capital :</span>{" "}
							{props.capital}
						</li>
					</ul>
				</div>
			</div>
		</Link>
	);
};

const tailwind = {
	links: "font-semibold",
};

export default HomeCountry;
