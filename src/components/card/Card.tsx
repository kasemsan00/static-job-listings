import Image from "next/image";

export default function Card ( ) {
	return (
		<div className="flex flex-row items-center gap-2 bg-white p-6 rounded-md border-l-black">
			<div>
				Image
				{/*<Image src={} alt={}*/}
			</div>
			<div>
				<div>
					<span>
					Photosnap
					</span>
					<span>NEW!</span>
					<span>FEATURED</span>
				</div>
				<div>Senior Frontend Developer</div>
				<div>
					<span>1d ago</span>
					<span>
						Full Time
					</span>
					<span>
						USA only
					</span>
				</div>
			</div>
			<div>
				<span>Frontend</span>
				<span>Senior</span>
				<span>HTML</span>
			</div>
		</div>
	)
}