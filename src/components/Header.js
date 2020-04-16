import React from 'react'
import styled from 'styled-components'
import * as strap from 'reactstrap'

const sDiv = styled.div ` 
    background:blue;
    color:white;

` 


export default function Header() {
    return (
        <sDiv>

            <strap.NavbarBrand >
                <h1  >That One Crazy Time on Mars</h1>
            </strap.NavbarBrand>
        </sDiv>

    )
}
