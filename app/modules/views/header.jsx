/*
    Created by Exerra on 24/04/2022
*/

import {discord, github, music, twitter} from "../icons";
import {Divider} from "../components";

class Button extends React.Component {
	render() {
		return (
			<button aria-label={this.props.label}>
				<a href={this.props.href} target={"_blank"} className={"fill-gray-500 hover:fill-selected-text"}>
					{this.props.icon}
				</a>
			</button>
		)
	}
}


export default function header() {
	return (
		<div className={"container mt-16 justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full pt-52 lg:pt-16"}>
			<div className={"lg:ml-20 justify-center md:justify-start max-w-xl mt-0 md:my-36"}>
				<h1 className={"font-bold text-7xl lg:text-9xl text-center md:text-left"}>Exerra</h1><br/>

				<h3 className={"font-bold text-2xl lg:text-3xl text-center md:text-left"}>Full-stack developer <Divider /> Latvia</h3><br/>

				<div className="bg-theme text-gray-400 font-bold text-center items-center md:text-left fill-blue-400 space-x-5">
					<Button href={"https://twitter.com/Exerra"} icon={twitter(48)} label={"Link to twitter"} />
					<Button href={"https://github.com/Exerra"} icon={github(48)} label={"Link to github"} />
					<Button href={"https://s.exerra.xyz/discord"} icon={discord(48)} label={"Link to discord"} />
				</div>
			</div>
		</div>
	)
}
