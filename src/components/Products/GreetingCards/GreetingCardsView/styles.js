import styled from "styled-components"

export const ProductGreetingCardCategoryLayout = styled.div`
margin: 0 auto;

.MuiGrid-item {
  display: flex;
  flex-direction: column;
  -webkit-justify-content: center;
  text-align: center; 
  padding: 10px;
}

// Added to shadow the image wrappers
.gatsby-image-wrapper {
  background-color: #F9FAFA;
  -o-box-shadow:      12px 12px 29px #555;
  -icab-box-shadow:   12px 12px 29px #555;
  -khtml-box-shadow:  12px 12px 29px #555;
  -moz-box-shadow:    12px 12px 29px #555;
  -webkit-box-shadow: 12px 12px 29px #555;
  box-shadow:         12px 12px 29px #555;
  border-radius: 4px;
  opacity: 0.95;  
}

img {
  &:hover {
  -webkit-filter: brightness(60%);
  -webkit-transition: all 0.5s ease;
  -moz-transition: all 0.5s ease;
  -o-transition: all 0.5s ease;
  -ms-transition: all 0.5s ease;
  }
}
`

export const FrontPageTitle = styled.div`
padding-right: 10px;
  h1 {
    text-align: center;	
    font-weight: normal;
    color: #5C5C5C;
    opacity: 0.4;
  }
  p {    
    text-align: right;
    font-weight: normal;
    color: #5C5C5C;
    opacity: 0.4;
  }
`

export const backBtn = styled.div`
  float: left;
  margin: 0 auto;
  padding-bottom: 10px;
`

export const loadBtn = styled.div`
  text-align: center;
  margin: 10px;
`

export const searchBtn = styled.div`
  float: right;
  padding-right: 10px;  
`

export const SearchBoxPage = styled.div`
text-align: right;
input {
    font-size: 20px;
}
`