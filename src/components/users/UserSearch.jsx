import React, { useState, useContext } from "react";
import GithubContext from "../../context/github/GithubContext";
import { searchUsers } from "../../context/github/GithubActions";
import { toast } from "react-toastify";

const UserSearch = () => {
	const [search, setSearch] = useState("");

	const { users, dispatch } = useContext(GithubContext);

	const onSubmit = async (e) => {
		e.preventDefault();
		if (search === "") {
			toast.error("Please enter something");
		} else {
			dispatch({ type: "SET_LOADING", payload: true });
			const users = await searchUsers(search);
			dispatch({ type: "FETCH_USERS", payload: users });
			setSearch("");
		}
	};

	return (
		<div className='grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8'>
			<div>
				<form onSubmit={onSubmit}>
					<div className='form-control'>
						<div className='relative'>
							<input
								type='text'
								className='w-full pr-40 bg-gray-200 input input-lg text-black'
								placeholder='Search for a user'
								value={search}
								onChange={(e) => setSearch(e.target.value)}
							/>
							<button
								type='submit'
								className='absolute top-0 right-0 rounded-l-none w-36 btn btn-lg btn-accent'>
								Search
							</button>
						</div>
					</div>
				</form>
			</div>
			{users?.length > 0 && (
				<div>
					<button
						className='btn btn-ghost btn-lg'
						onClick={() => dispatch({ type: "CLEAR_USERS" })}>
						Clear
					</button>
				</div>
			)}
		</div>
	);
};

export default UserSearch;
