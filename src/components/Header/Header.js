import React from "react"
import {NavLink} from "react-router-dom"
import {PATH} from "../Routes"
import style from "./Header.module.css"
export const Header = () => {
    return (
        <div>
            <div className={style.container} >
                <NavLink className={style.link} to={PATH.ALL_YEAR}>Показать весь год</NavLink>
                <NavLink className={style.link} to={PATH.PICK_MONTH}>Показать конкретный месяц</NavLink>
            </div>
        </div>
    )
}