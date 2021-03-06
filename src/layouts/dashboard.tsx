import { connect } from 'react-redux';

import Dropdown from '../containers/Dropdown/Dropdown';
import Nav from '../components/global/nav';
import SkipLink from '../components/global/skiplink';
import Providers from '../containers/Providers/Providers';
import Sports from '../containers/Sports/Sports';
import Upload from '../containers/Upload/Upload';

export interface ILayoutProps {
	children: React.ReactNode;
	providers: any;
	sports: any;
}

const Dashboard = ({ children, providers, sports }: ILayoutProps) => (
	<div className="md:flex md:min-h-screen text-blue-800">
		<Nav />

		<main className="w-full">
			<div className="border-b border-gray-300">
				<div className="py-4 px-6 md:p-8 md:flex justify-between">
					<div className="space-x-4 flex mb-4 md:mb-0 justify-center">
						<Sports />
						<Upload />
					</div>
					{/* <div className="items-center flex-1 md:ml-56">
						{providers && (
							<>
								{sports.sport && (
									<div className="md:space-x-4  md:flex justify-center">
										<div className="flex-1">
											<Dropdown />
										</div>
									</div>
								)}
							</>
						)}
					</div> */}
				</div>
			</div>

			{children}
		</main>
	</div>
);

const mapStateToProps = ({ providers, sports }) => ({
	providers,
	sports,
});

export default connect(mapStateToProps)(Dashboard);
