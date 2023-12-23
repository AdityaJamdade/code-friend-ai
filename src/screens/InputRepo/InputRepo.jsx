// InputRepo.jsx
import { useState } from 'react';
import './InputRepo.css';

const InputRepo = (
    // { onSubmit }
) => {
    const [repoUrl, setRepoUrl] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(repoUrl)
        // onSubmit({ repoUrl, question });
    };

    return (
        <div className="input-repo-box">
            <h2>Input GitHub Repository</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="repoUrl">GitHub Repository URL:</label>
                    <input
                        type="text"
                        id="repoUrl"
                        name="repoUrl"
                        value={repoUrl}
                        onChange={(e) => setRepoUrl(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Search</button>
            </form>
        </div>
    );
};

export default InputRepo;
