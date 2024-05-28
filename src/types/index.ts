export type TCourse = {
	name: string;
	id: string;
	image: string;
	bgColor: string;
	tags: string[]
}

export type THandleThemeClick = (theme: string) => () => void