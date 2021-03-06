/*
    Created by Exerra on 24/04/2022
*/

export default function navbar() {
	return (
		<header className={"py-6"}>
			<div className={"container flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full"}>
				<div className={"text-lg font-bold"}>Exerra</div>
				<div className={"hidden md:flex space-x-12 items-center"} id={"navbar"}>
					<a href={"#"} className={"text-selected-text font-bold"}>Home</a>
					<a href={"https://blog.exerra.xyz"} className={"hover:text-selected-text"}>Blog</a>
				</div>
				<div className="md:hidden" onClick={() => {
					let classList = document.getElementById("navbar").classList
					if (classList.contains("hidden")) classList.remove("hidden")
					else classList.add("hidden")
				}}>
					<svg width="26" height="18" viewBox="0 0 26 18" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path
							d="M13 17.5H0.25V14.6667H13V17.5ZM25.75 10.4167H0.25V7.58333H25.75V10.4167ZM25.75 3.33333H13V0.5H25.75V3.33333Z"
							fill="black"/>
					</svg>
				</div>
			</div>
		</header>
	)
}