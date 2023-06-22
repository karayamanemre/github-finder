import React from "react";
import PropTypes from "prop-types";

const RepoList = ({ repos }) => {
	return (
		<div className='rounded-lg shadow-lg card bg-base-100'>
			<div className='card-body'>
				<h2 className='card-title font-bold'>Latest Repositories</h2>
				{repos?.map((repo) => (
					<h3>{repo.name}</h3>
				))}
			</div>
		</div>
	);
};

RepoList.propTypes = {
	repos: PropTypes.array.isRequired,
};

export default RepoList;
