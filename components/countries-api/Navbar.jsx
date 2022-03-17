import ThemeSelector from "./ThemeSelector";
import Link from "next/link";

const Navbar = () => {
	return (
		<nav className=" px-10 py-5 shadow-md bg-white dark:bg-[#3a3939]">
			<div className="max-w-[1440px] mx-auto flex items-center justify-between">
				<Link href="/countries-api" passHref>
					<h1 className="font-bold lg:text-3xl cursor-pointer">
						Where in the world
					</h1>
				</Link>
				<div className="flex items-center">
					<ThemeSelector />
					<p className="font-semibold ml-3">Dark mode</p>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
