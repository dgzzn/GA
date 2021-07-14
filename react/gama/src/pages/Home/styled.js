import styled  from "styled-components";

export const Input = styled.input`
border: 1px solid black;
height: 50px;
border-radius: 2px

input:focus
input:active {
    outline:none;
    box-shadow: 0
}
`

export const Button = styled.button`
height: 50px;
border-radius: 0 6px 6px 0;
color: white;
background: black;
`

export const HomeContainer = styled.div`
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`

export const Container = styled.div`
width: 100vw;
display: flex;
justify-content: center;
align-items: center;
`

export const ErrorMsg = styled.span`
color: red;
display:flex;
font-size: 15px;
font-weight: bold;
margin-top: 7px;
`
