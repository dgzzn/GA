import styled from 'styled-components'
import { Link } from 'react-router-dom';

export const Container = styled.div`
width: 100%;
max-width: 991px;
margin: 0 auto;
`

export const Title = styled.h1`
text-align: center;
font-size: 2rem;
font-family: sans-serif;
color: #333;
`;

export const List = styled.ul`
list-style: none;
padding: 10px;
fontf-family: sans-serif;
`;

export const ListItem = styled.li`
margin: .5rem 0;
background-color: black;
color: white;
padding: 10px;
`;

export const LinkHome = styled(Link)`
border: 1px black;
margin: auto;
display: block;
background-color: darkgrey;
width: 100px;
height: 50px;
text-align: center;
padding-top: 25px;
margin-bottom: 5px;
text-decoration: none;
`
