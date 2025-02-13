import styled from "styled-components";




export const StyledFooter = styled.footer`

background-color:${({theme})=>theme.colors.footer};
color:#fff;
padding:100px 40px 60px;

ul{
list-style-type:none;
}

ul li{

margin-bottom:20px;
cursor:pointer;
}

ul li:hover{

color:lightblue;

}



@media(max-width:${({theme})=>theme.mobile}){

ul {
padding:0;
}

ul li{
font-size:12px;
}

p{

text-align:center;
}




}


`