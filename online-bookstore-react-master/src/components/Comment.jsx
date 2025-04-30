import React from 'react'

const Comment = () => {
    return (
        <>
            <div className="commented-section bg-light my-3 p-4">
                <div className="d-flex flex-row align-items-center commented-user">
                    <h5 className="mr-2">Rafia Nawaz</h5>
                    <span className="dot mb-1"></span>
                    <span className="mb-1 ml-2 small text-secondary">4 hours ago</span>
                </div>
                <div className="comment-text-sm"><span>Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                    nisi ut aliquip ex ea commodo consequat.</span>
                </div>
            </div>
        </>
    )
}

export default Comment