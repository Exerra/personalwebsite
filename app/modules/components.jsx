/*
    Created by Exerra on 26/04/2022
*/

import React from "react";

export class Work extends React.Component {
	render() {
		return (
			<div className={"w-full basis-1/1 grow lg:basis-1/3 shadow-2xl bg-white rounded-lg p-10"}>
				<h2 className="font-sm font-bold text-highlight">{this.props.date}</h2>
				<h2 id="work" className="text-3xl font-bold">{this.props.name}</h2>
				<p className="section-paragraph">{this.props.description}</p>
				<br />
				{this.props.href != null ? <a href={this.props.href} target={"_blank"} className={"text-gray-400 hover:text-selected-text after:content-['_↗']"}>Visit the project</a> : null}
			</div>
		)
	}
}

export class Knowledge extends React.Component {
	render() {
		return (
			<div className={"w-full basis-1/3 grow lg:basis-1/5 shadow-2xl bg-white rounded-lg p-10"}>
				<h2 className="font-sm font-bold text-highlight">{this.props.type}</h2>
				<h3 className={"text-3xl font-bold"}>{this.props.name}</h3>
			</div>
		)
	}
}

export class Title extends React.Component {
	render() {
		return (
			<h2 className="text-5xl font-bold pb-10">{this.props.children}</h2>
		)
	}
}

export class Section extends React.Component {
	render() {
		return (
			<div className={"container mt-32 justify-between mx-auto px-8 md:px-14 lg:px-24 w-full"}>
				<Title>{this.props.name}</Title>
				{this.props.children}
			</div>
		)
	}
}