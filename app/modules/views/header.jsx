/*
    Created by Exerra on 24/04/2022
*/


import {useEffect, useState} from "react";
import {discord, github, music, twitter} from "../icons";

class Button extends React.Component {
	render() {
		return (
			<button>
				<a href={this.props.href} target={"_blank"} className={"fill-gray-500 hover:fill-selected-text"}>
					{this.props.icon}
				</a>
			</button>
		)
	}
}


export default function header() {
	const [state, setState] = useState(null)

	useEffect(() => {
		setState(window.outerWidth)
	})

	return (
		<div className={"container mt-16 justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full pt-52 lg:pt-16"}>
			<div className={"lg:ml-20 justify-center md:justify-start max-w-xl mt-0 md:my-36"}>
				<h1 className={"font-bold text-7xl lg:text-9xl text-center md:text-left"}>Amelia</h1><br/>

				<h3 className={"font-bold text-2xl lg:text-3xl text-center md:text-left"}>Full-stack developer <span className={"opacity-40 animate-pulse"}>•</span> she/her</h3><br/>

				<div className="bg-theme text-gray-400 font-bold text-center items-center md:text-left fill-blue-400 space-x-5">
					<Button href={"https://twitter.com/Exerra"} icon={twitter(48)} />
					<Button href={"https://github.com/Exerra"} icon={github(48)} />
					<Button href={"https://guild.exerra.xyz"} icon={discord(48)} />
				</div>
			</div>
		</div>
	)
}