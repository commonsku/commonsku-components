import styled from 'styled-components'
import React from 'react'
import { Row, Col } from './FlexboxGrid'
import { H2 } from './Headings'
import { SharedStyles, SharedStyleTypes } from './SharedStyles';

const StyledBox = styled.div<{borderless?: boolean, padded?: boolean}&SharedStyleTypes>`
  background: white;
  margin-top: 20px;
  box-shadow: ${props => props.borderless ? 0 : `0 2px 4px rgba(0, 0, 0, 0.07)`};
  border-radius: 5px;
  padding: 20px ${props => props.padded ? 20 : 0}px;
  ${SharedStyles}
`

const Box = (props: React.PropsWithChildren<{borderless?: boolean,
                                             padded?    : boolean,
                                             title?     : string | React.ReactNode,
                                             controls?  : React.ReactNode } & SharedStyleTypes>) => {

  return ( <StyledBox padded={props.padded} borderless={props.borderless} {...props}>
           {props.title || props.controls ?
	     <Row>
	       <Col xs={8}>
                 { props.title ? <H2>{props.title}</H2> : null} 
	       </Col>
	       <Col xs style={{ textAlign: "right" }}>
                 {props.controls ? props.controls : null} 
	       </Col>
	     </Row>
	   : null}
           {props.children}
	 </StyledBox>
	 )
}

export { Box }
