import React from 'react';
import './Instagram.scss';
import { Button, Spinner } from 'react-bootstrap';
import Photo from '../../images/photo.jpg';

export default class Instagram extends React.Component {
    constructor() {
        super();
        this.state = {
            name: 'anton.kozloov',
            
        }
    }    
    render() {        
        const { name } = this.state;
        const { subscribed, spinner, checkComplete, onClickChecked, onClickSubscribe } = this.props;
        return (
            <>
                <div className="instagram">
                    <div className="instagram__image">
                        <img src={Photo} alt={name} />
                    </div>
                    <div className="instagram__info">
                        <p><b>{name}</b></p>
                        <p>Антон Козлов 💸 PRO&#160;ПРОДАЖИ</p>
                        <Button onClick={() => onClickSubscribe()} variant="primary" href={'https://www.instagram.com/' + name} target="_blank" size="sm">Подписаться</Button>
                    </div>
                </div>
                {subscribed && (
                    <>
                        <div className="subscribed">
                            <p>После подписки нажми кнопку ниже и&#160;получи ссылку на материалы</p>
                            <Button variant="success" onClick={() => onClickChecked()}>Я подписался</Button>
                        </div>                        
                    </>                    
                )}
                {spinner && (
                    <>
                        <div className="loader">
                            <p className="loader__text">Проверка подписки...</p>
                            <Spinner animation="border" variant="light" />
                        </div>
                    </>
                )}
            </>
        )
    }
}