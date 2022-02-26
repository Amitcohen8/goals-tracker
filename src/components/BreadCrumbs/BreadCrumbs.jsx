import * as React  from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import styled from 'styled-components'


const BreadCrumbs = props => {

    const [currCategory,setCurrentCategory] = React.useState()
    const handleClick = (event) => {
        event.preventDefault()
        setCurrentCategory(event.target.textContent)
        console.info('You clicked a breadcrumb.',event);
    }

    const breadCrumbsContent = ["משפחה","פיננסי","קריירה","חברתי","בריאות","התפתחות אישית","רוחני"].map(category => <Link underline="hover"
    color={category === currCategory ? 'black' : 'inherit'}
    href={`/${category}`}
    key={category}
    >
    {category}
        
        </Link>)

    return (
        <Header>
            <Breadcrumbs aria-label="breadcrumb" onClick={handleClick}>
            {breadCrumbsContent}
            </Breadcrumbs>
        </Header>
    )
}

const Header = styled.header`
margin:2em;
display:flex;
justify-content:flex-end;
`

BreadCrumbs.propTypes = {}


export default BreadCrumbs