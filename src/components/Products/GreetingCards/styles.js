import styled from "styled-components"

export const backBtn = styled.div`
  float: left;
  margin: 0 auto;
  padding-bottom: 10px;
`

export const GreetingCardsDesktop = styled.div`
.MuiGrid-item {
  margin: auto;
}

// XXS Small devices Galaxy Android S9 (phones, 375px and up)
@media (min-width: 360px) { 
  display: none;
}

// XS Small devices iPhone (phones, 375px and up)
@media (min-width: 375px) { 
  display: none;
}

// Small devices (landscape phones, 576px and up)
@media (min-width: 576px) and (orientation: landscape) { 
  display: none;
}

// Medium devices (tablets, 768px and up)
@media (min-width: 768px) { 
  display: none;
}

// Medium devices (tablets, 768px and up)
@media (min-width: 768px) and (orientation: landscape) { 
  display: none;
}

 // Medium devices (landscape tablets, 1024px and up)
 @media (min-width: 1024px) and (orientation: landscape) { 
  display: none;
}

// Large devices (desktops, 1200px and up)
@media (min-width: 1200px) {
  display: block;
}

// Extra large devices (large desktops, 2100px and up)
@media (min-width: 2100px) { 
  display: block;
}
`

export const GreetingCardsMobile = styled.div`
// XXS Small devices Galaxy Android S9 (phones, 375px and up)
@media (min-width: 360px) { 
  display: block;
}

// XS Small devices iPhone (phones, 375px and up)
@media (min-width: 375px) { 
  display: block;
}

// Small devices (landscape phones, 576px and up)
@media (min-width: 576px) and (orientation: landscape) { 
  display: block;
}

// Medium devices (tablets, 768px and up)
@media (min-width: 768px) { 
  display: block;
}

// Medium devices (tablets, 768px and up)
@media (min-width: 768px) and (orientation: landscape) { 
  display: block;
}

 // Medium devices (landscape tablets, 1024px and up)
 @media (min-width: 1024px) and (orientation: landscape) { 
  display: block;
}

// Large devices (desktops, 1200px and up)
@media (min-width: 1200px) {
  display: none;
}

// Extra large devices (large desktops, 2100px and up)
@media (min-width: 2100px) { 
  display: none;
}
`
export const designYourOwnPortrait = styled.div`
  width: 100%
  height: auto;
  max-width: 160px;
  min-height: 218px;
  margin: auto;
  margin-bottom: 25px;
  
  background-color: #FFF;
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

export const designYourOwnLandscape = styled.div`
  width: 100%
  height: auto;
  max-width: 218px;
  min-height: 150px;
  margin: auto;
  margin-bottom: 25px;
  
  background-color: #FFF;
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


export const borderLine = styled.div`
  margin: auto;
  margin-top: 10px;
  margin-bottom: 10px;
  width: 80%;
  border: 1px solid #E5E5E5;
`
