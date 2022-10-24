import React from 'react'
import './style.css';

export const ChangelogMarkdown = () => {
    return (
        <div className='markdown-body' style={{
            boxSizing: 'border-box',
            minWidth: 200,
            maxWidth: 980,
            margin: '0 auto',
            padding: 15
          }}>
            <h1>Version 0.6.0</h1>
<ul>
<li>Add Menu to navigate to other pages.</li>
<li>Add changelog to keep track of version releases.</li>
</ul>

        </div>
    )
}
