import React from 'react'
import style from './PickMonth.module.css'



export const PickMonth = () => {


    return (
        <div className={style.wrap}>
            <header>
                <button className={style.btn}>{'<'}</button>
                <select className={style.select}></select>

                <select className={style.select}></select>
                <button className={style.btn}>{'>'}</button>
            </header>
            <table>
                <thead>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </thead>
                <tbody>

                </tbody>
            </table>
        </div>
    )
}
