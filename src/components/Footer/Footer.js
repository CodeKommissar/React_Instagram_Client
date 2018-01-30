import React from "react";
import "./Footer.css"
import {
    Container,
    Content,
    Columns,
    Column
} from "bloomer";

const FooterPage = () => {
    return (
        <Container className="Footer">
            <Content>
                <Columns isVCentered>
                    <Column className="FooterLinks" isSize="3/4">
                        <p>
                            <a href="">About Us</a>
                            <a href="">Support</a>
                            <a href="">Blog</a>
                            <a href="">Press</a>
                            <a href="">API</a>
                            <a href="">Jobs</a>
                            <a href="">Privacy</a>
                            <a href="">Terms</a>
                            <a href="">Language</a>
                        </p>
                    </Column>
                    <Column className="Copyright" isSize="1/4">
                        <Content isSize='small'>
                            <p>© 2018 INSTAGRAM</p>
                            
                        </Content>
                    </Column>
                </Columns>
            </Content>
        </Container>
    );
};

export default FooterPage;