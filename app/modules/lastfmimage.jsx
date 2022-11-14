/*
    Created by Exerra on 14/11/2022
*/

import { emptyImage } from "../util/lastfm";

const lastfmimage = (track) => {
	if (track?.image?.[2]["#test"] == emptyImage || !track?.["@attr"]?.nowplaying) {
		return <></>
	}

	return <img className={"w-auto h-auto ml-auto float-right aspect-square hidden sm:inline-block lg:hidden xl:block"} src={track?.image[2]["#text"]} />
}

export default lastfmimage