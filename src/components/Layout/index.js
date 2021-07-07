import React from "react"
import PropTypes from "prop-types"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebookF } from "@fortawesome/free-brands-svg-icons"
import { faInstagram } from "@fortawesome/free-brands-svg-icons"
import HeaderNavBar from './HeaderNavBar'
import GetitemNo from '../MultiStepFormNew/Snipcart/GetItemNo'
import * as Styles from "./styles"

const Layout = ({ children }) => {    
  return (
    <> 
      <Styles.screenLayout>        
        <Styles.pageLayout>
          <Styles.headerLayout>
            <HeaderNavBar/>             
          </Styles.headerLayout>            
          <Styles.bodyLayout>                      
            <Styles.bodyInnerLayout>              
               {children}              
            </Styles.bodyInnerLayout>
          </Styles.bodyLayout>          
          <Styles.footerLayoutClear/>          
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12">
              <Styles.footerLayoutMenu>
                <span>About</span><span>Privacy</span><span>Contact</span><span>Recycle</span><span>&nbsp;</span>
                <span><FontAwesomeIcon icon={faFacebookF} /></span><span><FontAwesomeIcon icon={faInstagram} /></span>
              </Styles.footerLayoutMenu>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12">
              <Styles.footerLayoutCopyright>
                <span>© {new Date().getFullYear()} Simply Say Pte Ltd.</span>
              </Styles.footerLayoutCopyright>
            </div>
          </div>  
        </Styles.pageLayout>
      </Styles.screenLayout>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
