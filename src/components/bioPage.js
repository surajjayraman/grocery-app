import { useState, useEffect } from 'react';
import { fetchBio } from './api.js';

export default function BioPage() {
    const [person, setPerson] = useState('Alice');
    const [bio, setBio] = useState(null);

    useEffect(() => {
        let ignore = false;
        setBio(null);
        fetchBio(person).then(result => {
            if (!ignore) {
                setBio(result);
            }
        });
        return () => {
            ignore = true;
        }
    }, [person]);

    return (
        <>
            <p className='highlighted'>Shows the biography for the selected person</p>
            <select value={person} onChange={e => {
                setPerson(e.target.value);
            }}>
                <option value="Alice">Alice</option>
                <option value="Bob">Bob</option>
                <option value="Taylor">Taylor</option>
            </select>
            <hr />
            <p><i>{bio ?? 'Loading...'}</i></p>
        </>
    );
}
