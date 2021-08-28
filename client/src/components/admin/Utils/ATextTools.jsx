import React, { useEffect, useState } from 'react'

function ATextTools(children) {
    const [rows, setRows] = useState([[]]);
    useEffect(() => {

    }, []);

    function defineRows() {
        let currentIndex = 0;
        
        function checkNewRow() {
            if(rows[currentIndex].length > 2) {
                rows.push([]);
                currentIndex++
            }
        }

        const arr = React.Children.toArray(children);
        arr.map(it => {
            rows[currentIndex].push(it);
            checkNewRow()
        })

        return rows.map(row => {
            return <div className="admin-edit-post__tools-row">
                { row.map(item => defineItem(item)) }
            </div>
        })
    }

    function defineItem(data) {
        return <div className='admin-edit-post__tools-item'>{ data }</div>
    }

    return (
        <div className='admin-edit-post__tools'>
            { React.Children.map(children, (item, index) => {
                if(index % 3 === 0) {
                    return (
                        <div>

                        </div>
                    )
                }
            }) }
        </div>
    )
}

export default ATextTools;