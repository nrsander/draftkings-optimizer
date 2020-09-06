import { connect } from 'react-redux';
import { useRef } from 'react';
import { RULE, setRule, removeRule } from './Rules.actions';

interface IRule {
	teams: string[];
	rules: any;
	setRule: (rule: string, key: string | undefined, value: number) => void;
	removeRule: (rule: string, value: number) => void;
}

const Rule = (props: IRule) => {
	const { teams, rules } = props;

	const playersFromSameTeamSelectRef = useRef<HTMLSelectElement>(null);
	const playersFromSameTeamInputRef = useRef<HTMLInputElement>(null);

	const handleNumberOfPlayersFromTeamClick = () => {
		if (!playersFromSameTeamSelectRef && !playersFromSameTeamInputRef) {
			return;
		}

		const team = playersFromSameTeamSelectRef.current?.value;
		const value = playersFromSameTeamInputRef.current?.value;

		if (team && value) {
			props.setRule(
				RULE.NUMBER_OF_PLAYERS_FROM_SAME_TEAM,
				team,
				parseInt(value)
			);
		}
	};

	const handleRemoveRule = (e: React.MouseEvent<HTMLButtonElement>) => {
		const { value } = e.currentTarget;
		const rule = e.currentTarget.getAttribute('data-rule');

		if (!value || !rule) {
			return;
		}

		props.removeRule(rule, parseInt(value));
	};

	return (
		<div className="input-group">
			Number of players from same team
			<div className="input input-group__input">
				<label htmlFor="team">
					<span className="u-hidden">Number of generations</span>
					<select ref={playersFromSameTeamSelectRef} id="team">
						<option value="" disabled selected>
							Select team
						</option>
						{teams?.map((team, i) => (
							<option value={team} key={i}>
								{team}
							</option>
						))}
					</select>
				</label>
				<label htmlFor="numberOfPlayersPerTeam">
					<span className="u-hidden">Number of players</span>
					<input
						ref={playersFromSameTeamInputRef}
						id="numberOfPlayersPerTeam"
						placeholder="Number of players"
						type="number"
						min={0}
						max={8}
					/>
				</label>

				<button
					type="submit"
					onClick={handleNumberOfPlayersFromTeamClick}
				>
					Add
				</button>
			</div>
			{rules.NUMBER_OF_PLAYERS_FROM_SAME_TEAM &&
				rules.NUMBER_OF_PLAYERS_FROM_SAME_TEAM.map(
					({ key, value }, i) => (
						<div key={i}>
							<span>{key}</span>
							{' '}
							-
							<span>{value}</span>
							<button
								type="button"
								onClick={handleRemoveRule}
								value={key}
								data-rule={
									RULE.NUMBER_OF_PLAYERS_FROM_SAME_TEAM
								}
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									width="24"
									height="24"
								>
									<g data-name="Layer 2">
										<g data-name="close">
											<rect
												width="24"
												height="24"
												transform="rotate(180 12 12)"
												opacity="0"
											/>
											<path d="M13.41 12l4.3-4.29a1 1 0 1 0-1.42-1.42L12 10.59l-4.29-4.3a1 1 0 0 0-1.42 1.42l4.3 4.29-4.3 4.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l4.29-4.3 4.29 4.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42z" />
										</g>
									</g>
								</svg>
							</button>
						</div>
					)
				)}
		</div>
	);
};

const mapStateToProps = ({ rules }) => ({
	rules,
});

const mapDispatchToProps = (dispatch) => ({
	setRule: (rule, key, value) => dispatch(setRule(rule, key, value)),
	removeRule: (rule, key) => dispatch(removeRule(rule, key)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Rule);
