import React from "react";
import './style.scss';
import github from '../../assets/icons/github.svg';
import linkedin from '../../assets/icons/linkedin.svg';
import mail from '../../assets/icons/mail.svg';

const SOCIALS_LIST = [
    {
        name: 'githab',
        link: '/',
        icon: github
    },
    {
        name: 'linkedin',
        link: '/',
        icon: linkedin
    },
    {
        name: 'email',
        link: '/',
        icon: mail
    }
];

export const Footer = () => {
    return (
        <footer className="footer container">
            <div className="footer__itemn">
                <ul className="socials">
                    {SOCIALS_LIST.map(item => (
                        <li className="socials__item">
                            <a className="socials__link" href={item.link}>
                                <img className="socials__icon" src={item.icon} alt={`link to ${item.name}`} />
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="footer__item">
                Created by Egor Prus
            </div>
        </footer>
    );
};