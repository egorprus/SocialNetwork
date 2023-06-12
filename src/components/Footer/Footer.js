import React from "react";
import "./style.scss";
import github from "../../assets/icons/github.svg";
import linkedin from "../../assets/icons/linkedin.svg";
import mail from "../../assets/icons/mail.svg";

const SOCIALS_LIST = [
    {
        name: 'githab',
        link: 'https://github.com/egorprus',
        icon: github
    },
    {
        name: 'linkedin',
        link: 'https://www.linkedin.com/in/egor-prus-nik/',
        icon: linkedin
    },
    {
        name: 'email',
        link: 'prus.egor.nik@gmail.com',
        icon: mail
    }
];

export const Footer = () => {
    return (
        <footer className="footer container">
            <div className="footer__itemn">
                <ul className="socials">
                    {SOCIALS_LIST.map((item, index) => (
                        <li className="socials__item" key={index}>
                            <a className="socials__link" href={item.link} target="_blanck">
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