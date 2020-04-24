import React from 'react';
import './Check.scss';
import { Container, Row, Col, Button } from 'react-bootstrap';

import Instagram from '../Instagram/Instagram';
import Success from '../Success/Success';

export default class Check extends React.Component {
    constructor() {        
        super();
        this.state = {
            subscribed: false,
            spinner: false,
            checkComplete: false
        };
    }
    onClickSubscribe = (e) => {
        setTimeout(() => {
            this.setState({
                subscribed: true
            });
        }, 2500);
    }
    onClickChecked = (e) => {
        this.setState({
            spinner: true
        });
        setTimeout(() => {
            this.setState({
                subscribed: false,
                spinner: false,
                checkComplete: true
            });
        }, 5000);
    }
    render() {
        const { subscribed, spinner, checkComplete } = this.state;
        return (
            <>                
                <Container fluid className="header">
                    <Row>
                        <Col>
                            <h3>6 основ построения отдела продаж</h3>                            
                        </Col>
                    </Row>
                </Container>
                {!checkComplete && (
                    <>
                        <Container fluid className="intro">
                            <Row>
                                <Col>
                                    <h4 className="text-center">Подпишись на мой инстаграм <br/> и ссылка на материалы станет доступна</h4>
                                </Col>
                            </Row>
                        </Container>
                        <Instagram onClickSubscribe={this.onClickSubscribe} onClickChecked={this.onClickChecked} subscribed={subscribed} spinner={spinner} checkComplete={checkComplete} />
                    </>
                )}
                {checkComplete && <Success />}
            </>
        )
    }
}