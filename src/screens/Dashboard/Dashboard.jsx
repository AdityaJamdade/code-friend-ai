/* eslint-disable react/prop-types */
import RepositoryCard from './RepositoryCard';
import { dummyRepositories } from '../../../dummy.js'
import './Dashboard.css'

const Dashboard = ({ user }) => {
    let repos;
    const handlePlus = async () => {
        try {
            const response = await fetch(`https://api.github.com/users/${user?.username}/repos`);
      
            if (!response.ok) {
              throw new Error(`GitHub API request failed: ${response.statusText}`);
            }
      
            repos = await response.json();
            console.log(repos);
          } catch (error) {
            console.error('Error fetching repositories:', error.message);
          }
    }
    return (
        <>
            <h1 className="repositories-title">Your Repositories</h1>
            <div className="dashboard-container">
                {dummyRepositories.map((repo) => (
                    <RepositoryCard key={repo.id} repo={repo} />
                ))}
                <div className="add-new-container repository-card" onClick={handlePlus}>
                    <div className="plus">+</div>
                </div>
            </div>
        </>
    );
};

export default Dashboard;

