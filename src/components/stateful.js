import React from 'react';

const Stateful = () => {
	const [count, setCount] = React.useState(0);
	const [previousCount, setPreviousCount] = React.useState(0);

	const handleClick = () => {
		setCount((prev) => {
			setPreviousCount(prev);
			setCount(count + 1);
		});
	};
	return (
		<div>
			<p>Count: {count}</p>
			<p>Previous Count: {previousCount}</p>
			<button onClick={handleClick}>Click Me</button>
		</div>
	);
};

export default Stateful;
