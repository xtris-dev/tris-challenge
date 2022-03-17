import { useState, useEffect } from "react";
// Next theme
import { useTheme } from "next-themes";
// React icons
import { BsMoonFill, BsFillSunFill } from "react-icons/bs";

const ThemeSelector = () => {
	// Light/Dark theme
	const { theme, setTheme } = useTheme();
	const [isMounted, setIsMounted] = useState(false);
	const switchTheme = () => {
		if (isMounted) {
			setTheme(theme === "light" ? "dark" : "light");
		}
	};
	useEffect(() => {
		setIsMounted(true);
	}, []);
	return (
		<>
			{theme === "dark" ? (
				<BsMoonFill
					className="text-white cursor-pointer ml-0.5 hover:rotate-[360deg] duration-300"
					onClick={switchTheme}
				/>
			) : (
				<BsFillSunFill
					className="text-black cursor-pointer ml-0.5 hover:rotate-[360deg] duration-300"
					onClick={switchTheme}
				/>
			)}
		</>
	);
};

export default ThemeSelector;
