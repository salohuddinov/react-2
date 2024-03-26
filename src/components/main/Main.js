import React, { useState } from 'react'
import "./Main.css"
import { RiDeleteBin6Line } from "react-icons/ri";



function Main() {

    const [search, setSearch] = useState("")
    const [date, setDate] = useState([])


    const handleSubmit = (e) => {
        e.preventDefault()
        let newToggle = {
            id: `toggle-${new Date().getTime()}`,
            search
        }
        setDate(p => [...p, newToggle])
        setSearch("")
    }

    const handleDelete = (id) => {
        let filteredData = date?.filter(toggle => toggle.id !== id)
        setDate(filteredData)
    }

    let cards = date?.map((toggle) =>
        <div className='togle__const' key={toggle.id}>
            <div className="title">
                <h2>{toggle.search}</h2>
            </div>
            <button className='toggle__btn' onClick={() => handleDelete(toggle.id)}> <RiDeleteBin6Line className='btn__svg' /> </button>
        </div>)

    return (
        <div className='main'>
            <form className='search' onSubmit={handleSubmit} action="">
                <input required value={search} onChange={(e) => setSearch(e.target.value)} type="text" placeholder="today's plans" />
                <button>add</button>
            </form>
            <div className='wrapper'>
                {cards}
                <div className='togle__const'>
                    <div className="title">
                        <h2>I will wake up at 8 in the morning</h2>
                    </div>
                    <button className='toggle__btn'> <RiDeleteBin6Line className='btn__svg' /> </button>
                </div>
                <div className='togle__const'>
                    <div className="title">
                        <h2>I will practice html for 1 hour</h2>
                    </div>
                    <button className='toggle__btn'> <RiDeleteBin6Line className='btn__svg' /> </button>
                </div>
                <div className='togle__const'>
                    <div className="title">
                        <h2>I will give time for 2 hour css</h2>
                    </div>
                    <button className='toggle__btn'> <RiDeleteBin6Line className='btn__svg' /> </button>
                </div>
                <div className='togle__const'>
                    <div className="title">
                        <h2>then I will have breakfast</h2>
                    </div>
                    <button className='toggle__btn'> <RiDeleteBin6Line className='btn__svg' /> </button>
                </div>
            </div>
            {
                date.length === 0 ? <div className='empty'>

                </div> :
                    <></>
            }
        </div>
    )
}

export default Main