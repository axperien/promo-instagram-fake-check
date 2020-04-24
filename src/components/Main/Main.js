import React from 'react';
import './Main.scss';
import { Container, Row, Col, Button } from 'react-bootstrap';

export default class Main extends React.Component {
    render() {
        const { changeStep } = this.props;
        return (
            <Container fluid className="main">
                <Row>
                    <Col md={5} className="aside">
                        <div className="aside__content">
                            <h1><b>Получи бесплатные материалы</b></h1>
                            <div className="aside__text">
                            <p className="text-left">Я&#160;написал 6&#160;статей, которые помогут осознать, как правильно организовывать работу отдела продаж.</p>
                            <p className="text-left">Эти знания помогут вам вывести отдел продаж на&#160;новый уровень!</p>
                                <p className="text-left">Статьи полезны для:</p>
                                <ul>
                                    <li><i class="fas fa-check-circle"></i> предпринимателей, у которых отдел продаж - это "я сам";</li>
                                    <li><i class="fas fa-check-circle"></i> руководителей отделов продаж;</li>
                                    <li><i class="fas fa-check-circle"></i> коммерческих директоров;</li>
                                    <li><i class="fas fa-check-circle"></i> генеральных директоров;</li>
                                    <li><i class="fas fa-check-circle"></i> владельцев малого и среднего бизнеса;</li>
                                </ul>
                                <p>Скачивай и улучшай свой отдел</p>
                                <Button className="btn-custom" onClick={() => {changeStep('check')}}>Получить материалы</Button>
                            </div>
                        </div>
                    </Col>
                    <Col md={7} className="background"></Col>
                </Row>
            </Container>
        )
    }
}