import { connect } from 'react-redux';

import PlayersFromSameTeam from './Rules.playersFromSameTeam';
import NumberOfSpecificPositions from './Rules.numberOfSpecificPositions';
import MinimumSalary from './Rules.minimumSalary';
import MaximumRepeatingSalaries from './Rules.maxRepeatingPlayers';
import ProjectedOwnship from './Rules.projectedOwnership';
import NumberOfGenerations from './Rules.numberOfGenerations';

const RulesContainer = ({ players }: any) =>
	players ? (
		<div className="container mx-auto px-8 my-8 flex flex-col md:flex-row">
			<div className="flex-1">
				<div>
					<NumberOfGenerations />
				</div>
				<div className="mt-8">
					<PlayersFromSameTeam />
				</div>
				<div className="mt-8">
					<NumberOfSpecificPositions />
				</div>
			</div>
			<div className="flex-1 md:ml-8">
				<div className="mt-8 md:mt-0">
					<MinimumSalary />
				</div>
				<div className="mt-8">
					<MaximumRepeatingSalaries />
				</div>
				<div className="mt-8">
					<ProjectedOwnship />
				</div>
			</div>
		</div>
	) : (
		<></>
	);

const mapStateToProps = ({ table }) => ({
	players: table.players,
});

export default connect(mapStateToProps)(RulesContainer);
