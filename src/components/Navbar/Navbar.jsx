import React, { useState } from 'react'
import './Navbar.css'
function Navbar() {
    // state for changing document name
    const [pageData, setData] = useState({
        docName: 'Untitled document'
    })

    return (
        <div className='navbar'>
            <div id='navbar-left'>
                <img
                    alt='docs-logo'
                    src='docs.png'
                    width={40} height={40} />

                <div>
                    <div>
                        <input
                            value={pageData.docName}
                            onChange={(e) => setData({ docName: e.target.value })} />
                    </div>
                    <div>
                        <div className='options'>
                            <a href='#'>File</a>
                            <a href='#'>Edit</a>
                            <a href='#'>View</a>
                            <a href='#'>Insert</a>
                            <a href='#'>Format</a>
                            <a href='#'>Tools</a>
                            <a href='#'>Extension</a>
                            <a href='#'>Help</a>
                        </div>
                    </div>
                </div>
            </div>

            <div id='navbar-end'>
                <button className='share-button'>
                    <div>Share</div>
                </button>
            </div>
        </div >
    )
}

export default Navbar;