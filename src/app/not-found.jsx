import Link from 'next/link';
import React from 'react';

const NotFoundPage = () => {
    return (
        <div>
            <h2>This page is not found</h2>
            <Link href='/' className='btn'>Back to home</Link>
        </div>
    );
};

export default NotFoundPage;