import { useState } from 'react'

function Search({cb = Function.prototype}) {
    const [value, setValue] = useState('');

    const handleKey = (e) => {
        if(e.key === 'Enter') {
            handleSubmit();
        }
    }

    const handleSubmit = () => {
        cb(value);
    }

    return(
        <div className="row" style={{position: 'relative'}}>
            <div className="input-field col s12">
                <input type="search"
                id='seatch-field'
                placeholder='serch'
                onKeyDown={handleKey}
                onChange={(e) => setValue(e.target.value)}
                value={value}
                />
            </div>
            <button className='btn'
                style={{
                    position:'absolute',
                    top: 17,
                    right: 15,
                }}
                onClick={handleSubmit}
            >Serch</button>
        </div>
    )
}

export {Search}