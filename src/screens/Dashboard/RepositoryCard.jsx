/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import './Dashboard.css'

const RepositoryCard = ({ repo }) => {
    const { name, description, owner, stars, forks, link } = repo;

    return (
        <div className="repository-card">
            <div className="repo-header">
                <h3 className="name">{name}</h3>
                <Link className="github-repo-pointer" to={link} target="_blank" rel="noopener noreferrer">GitHub</Link>
            </div>
            <p>Owner: {owner}</p>
            <p>{description.slice(0, 50)}...</p>

            <div className="repo-numbers">
                <p>Stars: {stars}</p>
                <p>Forks: {forks}</p>
            </div>
        </div>
    );
}

export default RepositoryCard;
