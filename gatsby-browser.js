/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */
// Configure custom domain for Cognito
//config.oauth.domain = "auth.simplysay.co";

import 'bootstrap/dist/css/bootstrap.css';
import Amplify from "aws-amplify"
import awsConfig from "./src/aws-exports"
Amplify.configure(awsConfig)
