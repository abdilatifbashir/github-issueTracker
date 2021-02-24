import { Component } from "react"
import styled from "styled-components";

export const CardContainer = styled.div`
.card{
    width: 348px;
height: 200px;
// display:flex;
// flex-direction:colum;
}
.card .card-header{
background: #2088FF;
span:nth-child(1){
    padding-top:4px;
    height: 25px;
    width: 25px;
    border-radius: 50%;
    border: 2px solid #FFFFFF;
    color:#FFFFFF;
    display: inline-block;
    text-align:center;
    font-size:10px;

    
}
span:nth-child(2){
    color:white;
    a{
        color:white;
       
    }
}
p{
    margin-left:80px;
    a{
        color:5FF180;
        font-family: Lato;
font-style: normal;
font-weight: bold;
font-size: 16px;
line-height: 14px;
    }
}
}

// card body style
.card-body{
    span:nth-child(1){
        font-family: Lato;
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 19px;
color: #2F2F2F;

    }
    // width: 364px;
    // height: 80px;
    .state-open{
        color:green;
    }
    .state-closed{
        color:red;
    }

    .comments{
        font-family: Lato;
         font-style: normal;
     font-weight:normal;
        font-size:13px;
        line-height:16px;
     color: #888888;
    }
    .more{
        font-family: Lato;
font-style: normal;
font-weight: normal;
font-size: 13px;
line-height: 16px;
color: #2351AA;
float:right;
    }

}


`

// export const commentStyle = {
//     fontFamily: "Lato",
// fontStyle: "normal",
// fontWeight:"normal",
// fontSize:"13px",
// lineHeight:"16px",
// color: "#888888"

// }