const Twemoji = ({ emoji }: { emoji: string }) => {
	let arr = [...emoji]

	let image = "https://cdn.exerra.xyz/svg/twemoji/"

	arr.forEach(u => {
		image += `${u.codePointAt(0)?.toString(16)}-`
	})

	image = image.slice(0, -1)
	image += ".svg"

	return (
		<>
			<img draggable={false} src={image} style={{ width: "1.2em" }} />
		</>
	)
}

export default Twemoji