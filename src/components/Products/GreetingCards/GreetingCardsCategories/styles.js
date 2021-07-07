import styled from "styled-components"

export const FrontPageProductCategoriesLayout = styled.div` 
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

export const ProductImage = styled.div`        
  background-color: #F9FAFA;
  -o-box-shadow:      12px 12px 29px #555;
  -icab-box-shadow:   12px 12px 29px #555;
  -khtml-box-shadow:  12px 12px 29px #555;
  -moz-box-shadow:    12px 12px 29px #555;
  -webkit-box-shadow: 12px 12px 29px #555;
  box-shadow:         12px 12px 29px #555;
  border-radius: 4px;
  opacity: 0.95;  

  &:hover {
  -webkit-filter: brightness(60%);
  -webkit-transition: all 0.5s ease;
  -moz-transition: all 0.5s ease;
  -o-transition: all 0.5s ease;
  -ms-transition: all 0.5s ease;
  }
`

export const ProductName = styled.div`  
  max-width: 155px;
  margin-top: -6px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;  
  color: #5C5C5C;  
  opacity: 0.7;
  background-color: white; 
  border-top: 1px solid #B4B4B4;

  -o-box-shadow:      12px 12px 29px #555;
  -icab-box-shadow:   12px 12px 29px #555;
  -khtml-box-shadow:  12px 12px 29px #555;
  -moz-box-shadow:    12px 12px 29px #555;
  -webkit-box-shadow: 12px 12px 29px #555;
  box-shadow:         12px 12px 29px #555;

  // Small devices (landscape phones, 576px and up)
  @media (min-width: 576px) { 
    font-size: 12px; 
  }

  // Medium devices (tablets, 768px and up)
  @media (min-width: 768px) { 
    font-size: 14px; 
  }

  // Large devices (desktops, 992px and up)
  @media (min-width: 992px) {
    font-size: 16px; 
  }
  
 `