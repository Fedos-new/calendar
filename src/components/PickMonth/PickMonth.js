import React, {useRef, useState} from 'react'
import style from './PickMonth.module.css'

const ref = React.createRef();

export const PickMonth = (props) => {

    const [selectedDate, setSelectedDate] = useState(null)
    const [date, setDate] = useState(props.defaultData.date)
    const yearSelect = useRef(date)
    const monthSelect = useRef(date)

    const {years, monthNames, weekDayNames} = props.defaultData

    const handlePrevMonthButtonClick = () => {
        const prevDate = new Date(date.getFullYear(), date.getMonth() - 1)
        setDate(prevDate)
        console.log(prevDate)
    }
    const handleNextMonthButtonClick = () => {
        const nextDate = new Date(date.getFullYear(), date.getMonth() + 1)
        setDate(nextDate)
        console.log(nextDate)

    }


    const handleSelectChange = () => {
        debugger

        // const date = new Date(yearSelect.value, monthSelect.value)
        // setSelectedDate(date)
        // console.log(date);
    }

    const handleDayClick = (date) => {
        setSelectedDate(date)
        props.defaultData.onChange(date)
    }


    return (
        <div className={style.wrap}>
            <header>
                <button className={style.btn}
                        onClick={handlePrevMonthButtonClick}>
                    {'<'}
                </button>
                <select className={style.select}
                        onChange={handleSelectChange}
                        ref={ref}
                >
                    {monthNames.map((name, index) =>
                        <option key={name} value={index}>{name}</option>
                    )}
                </select>

                <select className={style.select}
                        onChange={handleSelectChange}
                        ref={ref}
                >
                    {years.map((name, index) =>
                        <option key={name} value={index}>{name}</option>
                    )}
                </select>
                <button className={style.btn}
                        onClick={handleNextMonthButtonClick}>
                    {'>'}
                </button>
            </header>

            <table className={style.tableData}>
                <thead>
                <tr>
                    {weekDayNames.map((day) =>
                        <th key={day}>{day}</th>
                    )}
                </tr>
                </thead>
                <tbody>
                {props.defaultDMonthData.map((week, index) =>
                    <tr key={index} className={style.week}>
                        {week.map((date, index) =>
                            <td key={index}>{
                                date
                                    ? <th
                                        key={index}
                                        className={style.day}
                                        onClick={() => handleDayClick(date)}>{date.getDate()} </th>
                                    : <th/>
                            }</td>
                        )}
                    </tr>
                )}
                </tbody>
            </table>
        </div>
    )
}
