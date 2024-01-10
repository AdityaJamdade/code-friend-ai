import RepositoryCard from './RepositoryCard';
import { dummyRepositories } from '../../../dummy.js'
import './Dashboard.css'

const Dashboard = () => {

    return (
        <>
            <h1 className="repositories-title">Your Repositories</h1>
            <div className="dashboard-container">
                {dummyRepositories.map((repo) => (
                    <RepositoryCard key={repo.id} repo={repo} />
                ))}
            </div>
        </>
    );
};

export default Dashboard;
