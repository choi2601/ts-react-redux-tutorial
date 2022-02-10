import React from 'react';
import './GithubProfileInfo';

type GithubProfileInfoProps = {
    name: string;
    thumbnail: string;
    bio: string | null;
    blog: string;
}

function GithubProfileInfo({ name, thumbnail, bio, blog }: GithubProfileInfoProps) {
    return (
        <div className="GithubProfileInfo">
            <div className="profile-head">
                <img src={thumbnail} alt="user thumbnail"/>
                <div>{name}</div>
            </div>
            <p>
                {bio}
            </p>
            <div>{blog !== '' && <a href={blog}>블로그</a>}</div>
        </div>
    )
}

export default GithubProfileInfo;