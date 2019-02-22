import React from 'react';
import styled from 'styled-components'
import { Calendar } from 'calendar'
import { weeks } from './utils/utils';

// const Container = styled.div`
//     display: flex;
//     flex-
// `

const DateDiv = styled.div`
    ${props => props.offset && `margin-left: ${props.offset * 100 / 7}%`};
    flex-basis: ${100 / 7}%;
    max-width: ${100 / 7}%;
    text-align: center;
    padding: 10px 0;
`



export default function Calender({ startWeek }) {

    const date = new Date()
    const year = date.getFullYear()
    const month = date.getMonth()

    const calendar = new Calendar();
    const rows = calendar.monthDays(year, month)
    // console.log(rows)
    const startIndex = rows[0].findIndex(col => col !== 0)
    const offset = startIndex
    // console.log(startIndex)

    // const offset = weeks.findIndex(week => week === startWeek)

    let flag = false

    return (
        <div className="container">

            {rows.map((row, index) => (
                <React.Fragment key={`${year}-${month}-${index + 1}`}>
                    {row.map(col => {
                        if (!col) {
                            // console.log(col)
                            flag = true
                            return null
                        } else {
                            if (flag) {
                                flag = false
                                return <DateDiv key={`${year}-${month}-${col}`} offset={offset} >{col}</DateDiv>
                            } else {
                                return <DateDiv key={`${year}-${month}-${col}`}>{col}</DateDiv>
                            }
                        }
                    })}
                </React.Fragment>
            ))}
            {/* <DateDiv offset={} />

            <DateDiv offset={offset} >1</DateDiv>
            <DateDiv>2</DateDiv> */}

        </div>
    )
}

