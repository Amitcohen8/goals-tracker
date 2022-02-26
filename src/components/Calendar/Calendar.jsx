import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Calendar as MuiCalendar, MuiPickersUtilsProvider } from '@material-ui/pickers'
import DateFnsUtils from '@date-io/date-fns';
import Button from '@mui/material/Button'
import styled from 'styled-components'
import { useSelector } from 'react-redux';


const Calendar = props => {

    const [selectedDate, setSelectedDate] = useState(new Date())
    const goals = useSelector(state => state.goals.allGoals)
    const handleDateChange = (date) => {
        console.log("da", date)
        setSelectedDate(date);
    };

    console.log(goals)
    return (
        <div>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <CalWrapper>
                    <MuiCalendar date={selectedDate} onChange={handleDateChange} />
                </CalWrapper>
            </MuiPickersUtilsProvider>
            <AddButton>

                <Button variant='contained'>הוסף מטרה</Button>
            </AddButton>
        </div>
    )
}


const CalWrapper = styled.div`
max-width:300px;
margin:1em;
margin-bottom:0; 
box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`


const AddButton = styled.div`
margin:1em;
display:inline-block;

.MuiButton-root {
    padding:0.5em 1em;
    border-radius:3px;
    min-width:300px;
    background-color:#3f51b5;
    color:#fff;
    font-weight:700;

    &:hover {
       
    }
    
    
}


`

Calendar.propTypes = {}

export default Calendar