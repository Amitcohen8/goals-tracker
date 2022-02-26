import React from 'react'
import PropTypes from 'prop-types'
import MuiList from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';



const List = ({ items }) => {

    const list = items.map(item => <ListItem>
        <ListItemText primary={item.text} />
    </ListItem>)

    return (
        <div>
            <MuiList>
                {list}
            </MuiList>
        </div>
    )
}

List.propTypes = {}

export default List