import BaseIcon, { IIconProps } from "./BaseIcon"

const RedditFilled = ({ size, path }: IIconProps) => {
	return <BaseIcon
		size={size}
		path={
			path || <g fill="#FFF" fillRule="nonzero">
				<path d="M13.07 15.059c-.336.336-1.055.456-1.569.456s-1.232-.12-1.568-.456a.202.202 0 0 0-.287 0 .202.202 0 0 0 0 .286c.533.533 1.556.575 1.855.575.3 0 1.322-.042 1.856-.575a.205.205 0 0 0 0-.286.202.202 0 0 0-.287 0zM10.563 13.282a.783.783 0 0 0-.782-.782.783.783 0 0 0-.782.782.783.783 0 0 0 1.563 0z" />
				<path d="M11.5 5a7.5 7.5 0 1 0 .002 15.002A7.5 7.5 0 0 0 11.5 5zm4.352 8.5c.016.108.025.218.025.329 0 1.683-1.959 3.047-4.376 3.047-2.416 0-4.375-1.364-4.375-3.047a2.2 2.2 0 0 1 .025-.332 1.093 1.093 0 1 1 1.203-1.786c.76-.547 1.81-.897 2.978-.927 0-.015.546-2.616.546-2.616a.192.192 0 0 1 .231-.15l1.818.387a.777.777 0 0 1 .697-.437.781.781 0 1 1 0 1.564.779.779 0 0 1-.776-.744L12.22 8.44l-.498 2.345c1.148.04 2.178.388 2.925.928a1.093 1.093 0 0 1 1.852.786c0 .447-.268.83-.647 1z" />
				<path d="M13.219 12.5a.783.783 0 0 0-.781.782c0 .43.35.781.781.781.43 0 .782-.351.782-.781a.783.783 0 0 0-.782-.782z" />
			</g>
		}
	/>
}

export default RedditFilled