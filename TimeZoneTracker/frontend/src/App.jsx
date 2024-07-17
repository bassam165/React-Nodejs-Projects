import { useState } from "react";
import ClockList from "./components/clock-list";
import LocalClock from "./components/local-clock";

import { generate } from "shortid";

const LOCAL_CLOCK_INIT = {
	title: 'My Clock',
	timezone: '',
	offset: 0,
	date: null,
};

function App() {
	const [localClock, setLocalClock] = useState({ ...LOCAL_CLOCK_INIT });
	const [clocks, setClocks] = useState([]);

	const updateLocalClock = (data) => {
		setLocalClock({
			...localClock,
			...data,
		});
	};

	const createClock = (clock) => {
		clock.id = generate();
		setClocks([...clocks, clock]);
	};

	const updateClock = (updatedClock) => {
		const updatedClocks = clocks.map((clock) => {
			if (clock.id === updatedClock.id) return updatedClock;
			return clock;
		});
		setClocks(updatedClocks);
	};

	const deleteClock = (id) => {
		const updatedClocks = clocks.filter((clock) => clock.id !== id);
		setClocks(updatedClocks);
	};

	return (
		<div className="main">
			<h1>Time Zone Tracker</h1>
			<LocalClock
				clock={localClock}
				updateClock={updateLocalClock}
				createClock={createClock}
			/>
			<ClockList
				localClock={localClock.date}
				clocks={clocks}
				updateClock={updateClock}
				deleteClock={deleteClock}
			/>
		</div>
	);
}

export default App;