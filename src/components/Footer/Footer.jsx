import React from 'react';
import styled from 'styled-components';

const FooterStyle = styled.p`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: 0;
    width: 100%;
`;

function Footer() {
  return (
    <FooterStyle>
        © 2023 - PortoSeguro / GFV Corp.
    </FooterStyle>
  );
}

export default Footer;