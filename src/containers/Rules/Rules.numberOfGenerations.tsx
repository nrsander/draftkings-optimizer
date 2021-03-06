import { connect } from 'react-redux';

import { RULE, setRule, removeRule } from './Rules.actions';

const Rule = (props: any) => {
	const max = 20;

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = parseInt(e.currentTarget.value);

		if (value > max) {
			e.currentTarget.value = max.toString();

			return;
		}

		props.setRule(RULE.NUMBER_OF_GENERATIONS, undefined, value);
	};

	return (
		<div>
			<span className="inline-block mb-2 text-xs uppercase font-black">
				Number of generations
			</span>
			<div>
				<label htmlFor="maxRepeatingPlayers">
					<span className="sr-only">Number of generations</span>
					<input
						className="font-bold cursor-pointer shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
						defaultValue={1}
						id="numberOfGenerations"
						min={1}
						max={max}
						placeholder="Number of generations"
						required
						type="number"
						onChange={handleChange}
					/>
				</label>
			</div>
		</div>
	);
};

const mapDispatchToProps = (dispatch) => ({
	setRule: (rule, key, value) => dispatch(setRule(rule, key, value)),
	removeRule: (rule, key) => dispatch(removeRule(rule, key)),
});

export default connect(null, mapDispatchToProps)(Rule);
