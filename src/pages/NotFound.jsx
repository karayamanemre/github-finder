import React from "react";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

const NotFound = () => {
	return (
		<div className='hero'>
			<div className='hero-content text-center'>
				<div className='max-w-lg'>
					<h1 className='font-bold text-4xl mb-8'>Page Not Found</h1>
					<p className='text-5xl mb-6'>404 </p>
					<Link
						to='/'
						className='hover:shadow-xl btn btn-primary btn-sm'>
						<FaHome />
						Back to home
					</Link>
				</div>
			</div>
		</div>
	);
};

export default NotFound;
