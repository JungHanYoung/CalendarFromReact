import React from 'react';
import styled from 'styled-components'
import { Calendar } from 'calendar'

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
    color: ${props => props.sat
        ? '#1C94FF'
        : props.sun
            ? '#FF5559'
            : '#444'}
`



export default function Calender({ year, month }) {



    const calendar = new Calendar();
    const rows = calendar.monthDays(year, month)
    // console.log(rows)
    const offset = rows[0].findIndex(col => col !== 0)

    let flag = false

    return (
        <div className="container">

            {rows.map((row, index) => (
                <React.Fragment key={`${year}-${month}-${index + 1}`}>
                    {row.map((col, index) => {
                        if (!col) {
                            // console.log(col)
                            flag = true
                            return null
                        } else {
                            if (flag) {
                                flag = false
                                return index === 6 ?
                                    <DateDiv sat key={`${year}-${month}-${col}`} offset={offset} >{col}</DateDiv>
                                    : index === 0 ?
                                        <DateDiv sun key={`${year}-${month}-${col}`} offset={offset} >{col}</DateDiv>
                                        : <DateDiv key={`${year}-${month}-${col}`} offset={offset} >{col}</DateDiv>
                                // if (index === 6) {
                                //     return <DateDiv sat key={`${year}-${month}-${col}`} offset={offset} >{col}</DateDiv>
                                // } else if (index === 0) {
                                //     return <DateDiv sun key={`${year}-${month}-${col}`} offset={offset} >{col}</DateDiv>
                                // } else {
                                //     return <DateDiv key={`${year}-${month}-${col}`} offset={offset} >{col}</DateDiv>
                                // }
                            } else {
                                return index === 6 ?
                                    <DateDiv sat key={`${year}-${month}-${col}`} >{col}</DateDiv>
                                    : index === 0 ?
                                        <DateDiv sun key={`${year}-${month}-${col}`} >{col}</DateDiv>
                                        : <DateDiv key={`${year}-${month}-${col}`} >{col}</DateDiv>
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

