import React from 'react';
import './Success.scss';
import { Button } from 'react-bootstrap';

export default class Success extends React.Component {
    render() {
        return (
            <div className="success">
                <span className="success__icon text-success">
                    {/* <i class="fas fa-check-circle"></i> */}
                    {/* <i class="fas fa-check"></i> */}
                    <i class="fas fa-thumbs-up"></i>
                </span>
                <h3>Отлично</h3>                
                <p>Где вам удобнее получать статьи?</p>
                <div className="success__buttons">
                    <a href="" className="success__button success__button--tg" title="telegram"><i className="fab fa-telegram-plane"></i></a>
                    <a href="" className="success__button success__button--vk" title="vk"><i className="fab fa-vk"></i></a>           
                </div>                
            </div>
        );
    }
}