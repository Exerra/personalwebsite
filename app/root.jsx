import {
	Links,
	LiveReload,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
} from "@remix-run/react";

import styles from "./styles/app.css"

export function links() {
	return [
		{rel: "stylesheet", href: styles},
		{
			rel: "icon",
			href: "https://cdn.exerra.xyz/png/pfp.png",
			type: "image/png",
		},
	]
}

export const meta = () => ({
	charset: "utf-8",
	title: "Exerra",
	description: "Exerra's website",
	"og:type": "website",
	"og:title": "Exerra",
	"og:description": "Exerra's website",
	"twitter:card": "summary_large_image",
	"twitter:image": "https://cdn.exerra.xyz/png/pfp.png",
	viewport: "width=device-width,initial-scale=1",
});

export default function App() {
	return (
		<Document>
			<Layout>
				<Outlet/>
			</Layout>
		</Document>
	);
}


function Document({children, title}) {
	return (
		<html lang="en">
		<head>
			<meta charSet="utf-8"/>
			<meta name="viewport" content="width=device-width,initial-scale=1"/>
			{title ? <title>{title}</title> : null}
			<Meta/>
			<Links/>
		</head>
		<body>
		{children}
		<ScrollRestoration/>
		<Scripts/>
		{process.env.NODE_ENV === "development" && <LiveReload/>}
		</body>
		</html>
	);
}

function Layout({children}) {
	return (
		<div>
			<div>
				<div className={"bg-body font-poppins"}>{children}</div>
			</div>
			<footer className={"p-10"}>
				<p className={"text-center"}>&copy; Exerra</p>
			</footer>
		</div>
	);
}


