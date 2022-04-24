import {eye, github, twitter} from "../modules/icons";
import header from "../modules/views/header";
import {useLoaderData} from "@remix-run/react";
import {useEffect, useState} from "react";
import navbar from "../modules/views/navbar";

export let loader = () => {
	let work = [
		{
			date: "2022",
			name: "eklase",
			description: "Wrapper and scraper for E-Klase",
			url: "https://docs.exerra.xyz/docs/eklase-wrapper/intro"
		},
		{
			date: "2022",
			name: "Mod viewer",
			description: "Every game mod Exerra has published resides here",
			url: "https://mods.exerra.xyz"
		},
		{
			date: "2022",
			name: "Phishing API",
			description: "API for checking if links are known phishing attempts",
			url: "https://rapidapi.com/Amiichu/api/exerra-phishing-check"
		},
		{
			date: "2022",
			name: "Statty",
			description: "API for checking the status of various services",
			url: "https://rapidapi.com/Amiichu/api/statty"
		},
		{
			date: "Since 2019",
			name: "Karen Bot",
			description: "Multi-purpose Discord bot featuring commands for: moderation, reddit, profile, spotify and more",
			url: "https://karen.exerra.xyz"
		}
	]

	return {work}
}

class Work extends React.Component {
	render() {
		return (
			<div className={"w-full basis-1/1 grow lg:basis-1/3 shadow-2xl bg-white rounded-lg p-10"}>
				<h2 className="font-sm font-bold text-purple-400">{this.props.date}</h2>
				<h2 id="work" className="text-3xl font-bold">{this.props.name}</h2>
				<p className="section-paragraph">{this.props.description}</p>
				<br />
				{this.props.href != null ? <a href={this.props.href} target={"_blank"} className={"text-gray-400 hover:text-selected-text after:content-['_↗']"}>Visit the project</a> : null}
			</div>
		)
	}
}

export default function Index() {
	let data = useLoaderData()
	let workView = []

	for (let work of data.work) {
		workView.push(<Work key={work.name} date={work.date} name={work.name} description={work.description} href={work.url != "" ? work.url : null}/>)
	}

	return (
		<div>
			<div style={{ backgroundImage: "url('https://cdn.exerra.xyz/svg/slider_gradient.svg')" }} className={"h-screen bg-no-repeat bg-cover"}>
				{navbar()}

				{header()}
			</div>

			<div className={"container mt-64 justify-between mx-auto px-8 md:px-14 lg:px-24 w-full h-screen"}>
				<h2 className="text-5xl font-bold pb-10">Some of my work</h2>
				<div className={"flex flex-wrap gap-6"}>
					{workView}
				</div>
			</div>
		</div>
	);
}
