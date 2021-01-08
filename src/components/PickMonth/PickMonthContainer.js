import React from 'react'
import {PickMonth} from "./PickMonth";


export const PickMonthContainer = () => {
    const defaultData = {
        date: new Date(),
        years: [2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021],
        monthNames: ["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь", "Ноябрь","Декабрь"],
        weekDayNames: ["ПН","ВТ","СР","ЧТ","ПТ","СБ","ВС"],
        onChange: Function.prototype
    }
    const  defaultDMonthData = [
        [undefined, undefined, new Date() , new Date(),new Date(), new Date(), new Date()],
        [new Date(), new Date(), new Date(), new Date(),new Date(), new Date(), new Date()],
        [new Date(), new Date(), new Date(), new Date(),new Date(), new Date(), new Date()],
        [new Date(), new Date(), new Date(), new Date(),new Date(), new Date(), new Date()],
        [new Date(), new Date(), new Date(), new Date(),undefined, undefined, undefined]
    ]


    return (
        <div>
            <PickMonth
                defaultData={defaultData}
                defaultDMonthData={defaultDMonthData}/>
        </div>
    )
}
