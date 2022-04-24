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
			<div style={{ backgroundImage: `url("data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg xmlns='http://www.w3.org/2000/svg' width='1920' height='893' viewBox='0 0 1920 893' fill='none'%3E%3Cg filter='url(%23filter0_f)'%3E%3Cellipse cx='630' cy='474.072' rx='510' ry='218.52' fill='%23CCF2FF'%3E%3C/ellipse%3E%3C/g%3E%3Cg filter='url(%23filter1_f)'%3E%3Cellipse cx='1290' cy='474.072' rx='510' ry='218.52' fill='%23E6FFCC'%3E%3C/ellipse%3E%3C/g%3E%3Cg filter='url(%23filter2_f)'%3E%3Cellipse cx='1468.95' cy='371.297' rx='331.053' ry='171.297' fill='%23FFE6EE'%3E%3C/ellipse%3E%3C/g%3E%3Cg filter='url(%23filter3_f)'%3E%3Cellipse cx='449.895' cy='371.297' rx='329.895' ry='171.297' fill='%23EEE6FF'%3E%3C/ellipse%3E%3C/g%3E%3Cg filter='url(%23filter4_f)'%3E%3Cellipse cx='960' cy='538.888' rx='580' ry='142.594' fill='%23FFEECC'%3E%3C/ellipse%3E%3C/g%3E%3Cdefs%3E%3Cfilter id='filter0_f' x='-80' y='55.5518' width='1420' height='837.04' filterUnits='userSpaceOnUse' color-interpolation-filters='sRGB'%3E%3CfeFlood flood-opacity='0' result='BackgroundImageFix'%3E%3C/feFlood%3E%3CfeBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape'%3E%3C/feBlend%3E%3CfeGaussianBlur stdDeviation='100' result='effect1_foregroundBlur'%3E%3C/feGaussianBlur%3E%3C/filter%3E%3Cfilter id='filter1_f' x='580' y='55.5518' width='1420' height='837.04' filterUnits='userSpaceOnUse' color-interpolation-filters='sRGB'%3E%3CfeFlood flood-opacity='0' result='BackgroundImageFix'%3E%3C/feFlood%3E%3CfeBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape'%3E%3C/feBlend%3E%3CfeGaussianBlur stdDeviation='100' result='effect1_foregroundBlur'%3E%3C/feGaussianBlur%3E%3C/filter%3E%3Cfilter id='filter2_f' x='937.895' y='0' width='1062.11' height='742.595' filterUnits='userSpaceOnUse' color-interpolation-filters='sRGB'%3E%3CfeFlood flood-opacity='0' result='BackgroundImageFix'%3E%3C/feFlood%3E%3CfeBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape'%3E%3C/feBlend%3E%3CfeGaussianBlur stdDeviation='100' result='effect1_foregroundBlur'%3E%3C/feGaussianBlur%3E%3C/filter%3E%3Cfilter id='filter3_f' x='-80' y='0' width='1059.79' height='742.595' filterUnits='userSpaceOnUse' color-interpolation-filters='sRGB'%3E%3CfeFlood flood-opacity='0' result='BackgroundImageFix'%3E%3C/feFlood%3E%3CfeBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape'%3E%3C/feBlend%3E%3CfeGaussianBlur stdDeviation='100' result='effect1_foregroundBlur'%3E%3C/feGaussianBlur%3E%3C/filter%3E%3Cfilter id='filter4_f' x='180' y='196.294' width='1560' height='685.188' filterUnits='userSpaceOnUse' color-interpolation-filters='sRGB'%3E%3CfeFlood flood-opacity='0' result='BackgroundImageFix'%3E%3C/feFlood%3E%3CfeBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape'%3E%3C/feBlend%3E%3CfeGaussianBlur stdDeviation='100' result='effect1_foregroundBlur'%3E%3C/feGaussianBlur%3E%3C/filter%3E%3C/defs%3E%3C/svg%3E ")` }} className={"h-screen bg-no-repeat bg-cover"}>
				{navbar()}

				{header()}
			</div>

			<div className={"container mt-64 justify-between mx-auto px-8 md:px-14 lg:px-24 w-full"}>
				<h2 className="text-5xl font-bold pb-10">Some of my work</h2>
				<div className={"flex flex-wrap gap-6"}>
					{workView}
				</div>
			</div>
		</div>
	);
}
