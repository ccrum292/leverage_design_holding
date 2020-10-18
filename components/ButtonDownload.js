import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

export default function ButtonDownload(props) {
	return (
		<div className="flex justify-center">
			<a
				href={props.route}
				download={props.fileName}
				className="flex flex-row justify-around items-center text-white bg-gray-700 shadowClass mx-2 mb-2 cursor-pointer py-2 px-2 w-1/2 self-center transition duration-700 ease-in-out transform duration-700 hover:text-black hover:font-black hover:bg-gray-500 hover:scale-105"
			>
				<FontAwesomeIcon
					className="cursor-pointer ml-1 opacity-75"
					style={{ color: '#ecc94b' }}
					size="2x"
					icon={faDownload}
				/>
				<h4 className="text-center">{props.text}</h4>
			</a>
		</div>
	);
}
