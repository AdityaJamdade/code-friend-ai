// InputRepo.jsx
import { useEffect, useRef, useState } from 'react';
import './InputRepo.css';

const InputRepo = (
    // { onSubmit }
) => {
    const [repoUrl, setRepoUrl] = useState('');
    const inputRef = useRef(null);

    useEffect(() => {
        // Set focus on the input when the component mounts
        inputRef.current.focus();
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        // Regular expression to match GitHub repository URLs
        const githubRepoPattern = /^https:\/\/github\.com\/[a-zA-Z0-9-]+\/[a-zA-Z0-9-]+$/;

        // Check if the input matches the GitHub repository pattern
        const isValidInput = githubRepoPattern.test(repoUrl);

        if (isValidInput) {
            console.log(repoUrl);
            // onSubmit({ repoUrl, question });
        } else {
            alert('Hello there, You are missing something!')
        }
        inputRef.current.focus();
    };

    return (
        <div className="input-repo-box">
            <h2>Input GitHub Repository</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="repoUrl">GitHub Repository URL:</label>
                    <input
                        ref={inputRef}
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
