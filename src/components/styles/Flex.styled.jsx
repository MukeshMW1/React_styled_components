import styled from "styled-components";


export const Flex = styled.div`

display: flex;
align-items: center;
gap:60px;

& > div,
& > ul{
flex:1;
}


@media(max-width:${({theme})=>theme.mobile}){
h1{
font-size:24px;
}

p{
font-size:12px;
}

}

`