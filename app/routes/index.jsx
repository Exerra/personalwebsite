import {checkmark, eye, github, twitter} from "../modules/icons";
import header from "../modules/views/header";
import {useLoaderData} from "@remix-run/react";
import navbar from "../modules/views/navbar";
import React, { useEffect, useState } from "react";
import {Section, Knowledge, Work} from "../modules/components";
import KonamiCode from "konami-code-js" // very needed

export let loader = async () => {

	let apiKey = `6aed96567bff1137f593099e9134b3d0` // maybe bad, maybe not. It will be public in network requests anyways lol so

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
			description: "API for checking the status of various services (SHUT DOWN)",
			url: "https://rapidapi.com/Amiichu/api/statty"
		},
		{
			date: "Since 2019",
			name: "Karen Bot",
			description: "Multi-purpose Discord bot featuring commands for: moderation, reddit, profile, spotify and more",
			url: "https://karen.exerra.xyz"
		}
	]

	let knowledge = [
		{
			type: "Language",
			name: "HTML"
		},
		{
			type: "Language",
			name: "CSS"
		},
		{
			type: "Language",
			name: "Javascript"
		},
		{
			type: "Framework",
			name: "NodeJS"
		},
		{
			type: "Language",
			name: "Swift"
		},
		{
			type: "Framework",
			name: "React"
		},
		{
			type: "Framework",
			name: "Remix"
		},
		{
			type: "Framework",
			name: "Express"
		},
	]

	let currentDate = new Date() // I cannot be arsed to update the website every year so I made this to basically auto calc the time between when I started web and full-stack dev
	let currentYear = currentDate.getFullYear()

	let dates = {
		startedWebDev: currentYear - 2019,
		startedFullStackDev: currentYear - 2020
	}

	return {work, knowledge, dates, apiKey}
}

export default function Index() {
	let data = useLoaderData()

	let { dates, apiKey } = data

	let trackNotState = []

	const [track, setTrack] = useState(trackNotState)

	useEffect(async () => {
		setInterval(async () => { // refreshes the "listening to" every 10s
			let scrobbler = await (await fetch(`https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=Exerra&api_key=${apiKey}&format=json&limit=1`)).json()

			setTrack(scrobbler.recenttracks.track?.[0])
		}, 10000)

		let scrobbler = await (await fetch(`https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=Exerra&api_key=${apiKey}&format=json&limit=1`)).json()

		setTrack(scrobbler.recenttracks.track?.[0])

		new KonamiCode(() => { // we do some mild trolling
			alert("youre a nerd, like, really??? do you just randomly type the konami code in websites for fun??? get a life\n\n but thank u for visiting my website 💜")
		})
	}, [1])

	return (
		<div>
			<div style={{ backgroundImage: `url("data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg xmlns='http://www.w3.org/2000/svg' width='1920' height='893' viewBox='0 0 1920 893' fill='none'%3E%3Cg filter='url(%23filter0_f)'%3E%3Cellipse cx='630' cy='474.072' rx='510' ry='218.52' fill='%23CCF2FF'%3E%3C/ellipse%3E%3C/g%3E%3Cg filter='url(%23filter1_f)'%3E%3Cellipse cx='1290' cy='474.072' rx='510' ry='218.52' fill='%23E6FFCC'%3E%3C/ellipse%3E%3C/g%3E%3Cg filter='url(%23filter2_f)'%3E%3Cellipse cx='1468.95' cy='371.297' rx='331.053' ry='171.297' fill='%23FFE6EE'%3E%3C/ellipse%3E%3C/g%3E%3Cg filter='url(%23filter3_f)'%3E%3Cellipse cx='449.895' cy='371.297' rx='329.895' ry='171.297' fill='%23EEE6FF'%3E%3C/ellipse%3E%3C/g%3E%3Cg filter='url(%23filter4_f)'%3E%3Cellipse cx='960' cy='538.888' rx='580' ry='142.594' fill='%23FFEECC'%3E%3C/ellipse%3E%3C/g%3E%3Cdefs%3E%3Cfilter id='filter0_f' x='-80' y='55.5518' width='1420' height='837.04' filterUnits='userSpaceOnUse' color-interpolation-filters='sRGB'%3E%3CfeFlood flood-opacity='0' result='BackgroundImageFix'%3E%3C/feFlood%3E%3CfeBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape'%3E%3C/feBlend%3E%3CfeGaussianBlur stdDeviation='100' result='effect1_foregroundBlur'%3E%3C/feGaussianBlur%3E%3C/filter%3E%3Cfilter id='filter1_f' x='580' y='55.5518' width='1420' height='837.04' filterUnits='userSpaceOnUse' color-interpolation-filters='sRGB'%3E%3CfeFlood flood-opacity='0' result='BackgroundImageFix'%3E%3C/feFlood%3E%3CfeBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape'%3E%3C/feBlend%3E%3CfeGaussianBlur stdDeviation='100' result='effect1_foregroundBlur'%3E%3C/feGaussianBlur%3E%3C/filter%3E%3Cfilter id='filter2_f' x='937.895' y='0' width='1062.11' height='742.595' filterUnits='userSpaceOnUse' color-interpolation-filters='sRGB'%3E%3CfeFlood flood-opacity='0' result='BackgroundImageFix'%3E%3C/feFlood%3E%3CfeBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape'%3E%3C/feBlend%3E%3CfeGaussianBlur stdDeviation='100' result='effect1_foregroundBlur'%3E%3C/feGaussianBlur%3E%3C/filter%3E%3Cfilter id='filter3_f' x='-80' y='0' width='1059.79' height='742.595' filterUnits='userSpaceOnUse' color-interpolation-filters='sRGB'%3E%3CfeFlood flood-opacity='0' result='BackgroundImageFix'%3E%3C/feFlood%3E%3CfeBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape'%3E%3C/feBlend%3E%3CfeGaussianBlur stdDeviation='100' result='effect1_foregroundBlur'%3E%3C/feGaussianBlur%3E%3C/filter%3E%3Cfilter id='filter4_f' x='180' y='196.294' width='1560' height='685.188' filterUnits='userSpaceOnUse' color-interpolation-filters='sRGB'%3E%3CfeFlood flood-opacity='0' result='BackgroundImageFix'%3E%3C/feFlood%3E%3CfeBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape'%3E%3C/feBlend%3E%3CfeGaussianBlur stdDeviation='100' result='effect1_foregroundBlur'%3E%3C/feGaussianBlur%3E%3C/filter%3E%3C/defs%3E%3C/svg%3E ")` }} className={"h-screen bg-no-repeat bg-cover"}>
				{navbar()}

				{header()}
			</div>

			<Section name={"About me"}>

				<div className={"flex flex-wrap gap-6 transition ease-in-out"}>
					<div className={"w-full basis-1/1 grow lg:basis-1/3 shadow-2xl bg-white rounded-lg p-10"}>
						<h2 id="work" className="text-3xl font-bold">Bio 🤔</h2>
						<p className="text-lg">I am a full-stack developer from <a href="https://www.latvia.travel/en" target={"_blank"} className={"inline-block transition duration-150 ease-in-out text-red-800 decoration-red-800 hover:font-bold link link-underline link-underline-black hover:after:content-['🇱🇻']"}>Latvia</a> with {dates.startedWebDev} years of experience as a web developer and {dates.startedFullStackDev} years as a full-stack developer</p>
					</div>

					<div className={"w-full basis-1/1 grow lg:basis-1/3 shadow-2xl bg-white rounded-lg p-10"}>
						<h2 id="work" className="text-3xl font-bold">Education 🎓️</h2>
						<p className="text-lg">I am entirely self-taught from various resources such as: W3Schools, friends and massive amounts of StackOverflow</p>
					</div>

					<div className={"w-full basis-1/1 grow lg:basis-1/3 shadow-2xl bg-white rounded-lg p-10"}>
						<h2 id="work" className="text-3xl font-bold">Hobbies 🎮️️</h2>
						<p className="text-lg">Apart from coding itself, I also enjoy playing various video games (don't ask me to code one though, anything but that)</p>
					</div>

					<div className={"w-full flex basis-1/1 grow lg:basis-1/3 shadow-2xl bg-white rounded-lg pl-10 overflow-hidden"}>
						<div className={"py-10"}>
							<h2 id="work" className="text-3xl font-bold">Listening to 🎵️️</h2>
							<p className="text-lg">{track?.["@attr"]?.nowplaying ? `${ track?.name } by ${ track?.artist?.["#text"] }` : "Well, nothing really"}</p>
							{track?.["@attr"]?.nowplaying ? <a href={track?.url} target={"_blank"} className={"text-gray-400 hover:text-selected-text after:content-['_↗']"}>Listen yourself</a> : <></>}
						</div>
						{
							track?.image?.[2]["#text"] == "https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png" // This is the image that gets used when Last.fm doesn't have album cover art
							|| !track?.["@attr"]?.nowplaying
								? <></>
								: <img className={"w-auto h-auto ml-auto float-right aspect-square hidden sm:inline-block lg:hidden xl:block"} src={track?.image[2]["#text"]} />
						}
					</div>
				</div>
			</Section>

			<Section name={"Showcase"}>
				<div className={"flex flex-wrap gap-6"}>
					{data.work.map(work => (
						<Work key={work.name} date={work.date} name={work.name} description={work.description} href={work.url !== "" ? work.url : null}/>
					))}
				</div>
			</Section>

			<Section name={"My knowledge"}>
				<div className={"flex gap-6 flex-wrap"}>
					{data.knowledge.map(knowledge => (
						<Knowledge key={knowledge.name} name={knowledge.name} type={knowledge.type} />
					))}
				</div>
			</Section>
		</div>
	);
}
