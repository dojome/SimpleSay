// Global CSS for pages
import styled from "styled-components"

export const FrontPageBanner = styled.div`    
  @media (min-width: 1152px) and (max-width: 1920px) {    
    margin-left: -100px;
    img { 
    float: left;  
    width: 100%;
  }
  }
  @media (min-width: 1921px) {
    margin-left: -200px;
    img { 
    float: left;  
    width: 1140px;
  }
  }  
  @media (min-width: 375px) and (max-device-width: 812px) and (orientation: portrait) {

  }
  @media (min-width: 812px) and (max-device-width: 375px) and (orientation: landscape) {
    img { 
    width: 100px;
  }
  }
  @media (min-width: 768px) and (max-device-width: 1024px) and (orientation: portrait) {

  }
  @media (min-width: 1024px) and (max-device-width: 768px) and (orientation: landscape) {

  }
`

export const FrontPageSubBanner = styled.div`  
  margin: 0 auto;
  text-align: center;
  width: 100%;
  max-width: 250px;
  margin-bottom: 15px;
`

export const ScrollArea = styled.div`
  margin-right: -10px;  
`
export const FrontPageTitle = styled.div`
  margin-top: 10px;      
  h1 {
  	text-align: center;	
  	font-size: 1.8vw;
  }

  // Small Mobile Device (360px)
  @media (min-device-width: 360px) and (orientation: portrait) { 
    h1 {
      text-align: center; 
      font-size: 25px;
    }
  } 

  // iPhoneX + (375px)  
  @media (min-device-width: 375px) and (orientation: portrait) { 
    h1 {
      text-align: center; 
      font-size: 25px;
    }
  }

`

export const SubPageTitle = styled.div`

// Small Mobile Device (360px)
@media (min-device-width: 360px) and (orientation: portrait) { 
  h2 {
    text-align: center; 
    font-size: 18px;
  }
} 

// iPhoneX + (375px)  
@media (min-device-width: 375px) and (orientation: portrait) { 
  h2 {
    text-align: center; 
    font-size: 18px;
  }
}

  h2 {
  	text-align: center;	
    font-weight: normal;
    color: #5C5C5C;
    opacity: 0.4;
  }
`

export const FrontPageText = styled.div`	    
  margin-left: 5px;
  margin-right: 5px;
  margin-top: 25px;    
  text-align: center;
  float: center;

  span {
    margin: 0;
    padding: 0;
    font-weight: bold;
    font-size: 14px;    
  }
  p {
    padding-bottom: 15px;
    font-size: 12px;   
  }
`
export const FrontPageIntroText = styled.div`
	font-size: 14px;
  font-style: italic;
	text-align: center;
  padding: 30px;
}
`

export const FrontPageStartBtn = styled.div`	  	
  text-align: center;
`

export const backBtn = styled.div`
  float: left;
  margin: 0 auto;
  padding-bottom: 10px;
`

export const searchBtn = styled.div`
  float: right;
  padding-right: 10px;  
`

// Sign-In / Register / Password Reset
export const SignInRegister = styled.div` 
 float: right;
 position: relative;
 margin-right: 10px; 
`

export const SignInRegisterAdvert = styled.div`  
 width: 100%;
 height: 100%;
 margin: 10px;
 background-color: white;
 opacity: 0.5;  

 p {
   margin: 10px;
 }
`

export const GoogleAdvert = styled.div` 
 width: 100%;
 height: 100%;
 margin-top: 25px;
 margin-left: 10px;
 background-color: white;
 opacity: 0.5;  

 p {
  margin: 10px;
}
`

export const SearchProducts = styled.div` 
margin: 0 auto;
padding-bottom: 50px; 
padding-right: 10px;

// XXS Small devices Galaxy Android S9 (phones, 375px and up)
@media (min-width: 360px) { 
  display: grid;
  grid-template-columns: repeat(2, minmax(128px, 1fr));
  grid-gap: 1em;
 }

// XS Small devices iPhone (phones, 375px and up)
@media (min-width: 375px) { 
  display: grid;
  grid-template-columns: repeat(2, minmax(128px, 1fr));
  grid-gap: 1em;
 }

// Small devices (landscape phones, 576px and up)
@media (min-width: 576px) and (orientation: landscape) { 
  display: grid;
  grid-template-columns: repeat(4, minmax(128px, 1fr));
  grid-gap: 1em;
 }

// Medium devices (tablets, 768px and up)
@media (min-width: 768px) { 
  display: grid;
  grid-template-columns: repeat(5, minmax(128px, 1fr));
  grid-gap: 1em;
 }

 // Medium devices (landscape tablets, 1024px and up)
 @media (min-width: 1024px) and (orientation: landscape) { 
   display: grid;
   grid-template-columns: repeat(5, minmax(128px, 1fr));
   grid-gap: 1em;
 }

// Large devices (desktops, 1200px and up)
@media (min-width: 1200px) {
  display: grid;
  grid-template-columns: repeat(7, minmax(128px, 1fr));
  grid-gap: 1em; 
  margin-left: 50px;
  margin-right: 40px;
 }

// Extra large devices (large desktops, 2100px and up)
@media (min-width: 2100px) { 
  display: grid;
  grid-template-columns: repeat(7, minmax(128px, 1fr));
  grid-gap: 1em; 
  margin-left: 10px;
  margin-right: 10px;
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
