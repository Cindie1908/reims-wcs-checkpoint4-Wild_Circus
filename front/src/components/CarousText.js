import React from "react";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import '../App.css';

export default function CarousText() {
    return (
        <div className="carousel-wrapper">
            <Carousel infiniteLoop useKeyboardArrows autoPlay showIndicators={false} showThumbs={false}>
                <div className="carouselText">
                    <p>Acrobatie fait référence à un ou plusieurs mouvements acrobatiques: jeux dynamiques avec équilibre physique ou agilité effectués avec le corps ...</p>
                </div>
                <div className="carouselText">
                    <p>Le domptage au sens strict se rapporte à la présentation de fauves, en particulier de grands félins (lions, tigres, panthères, etc.), généralement présentés dans une cage métallique pour des raisons de sécurité.</p>
                </div>
                <div className="carouselText">
                    <p>Une femme à barbe est une femme possédant une barbe:)</p>
                </div>
                <div className="carouselText">
                    <p>Assiette tournante, ou assiette chinoise, est un art dans le cirque chinois où une personne fait tourner une assiette, des bols et d’autres objets plats sur des poteaux, sans les faire tomber.</p>
                </div>
                <div className="carouselText">
                    <p>Un clown, pitre ou paillasse est un personnage comique du cirque. Visages disparaissant sous le maquillage, vêtus de façon spectaculaire, les clowns se partagent traditionnellement en augustes et en clowns blancs.</p>
                </div>
                <div className="carouselText">
                    <p>Le principe du lancer de couteaux est de réussir à planter un couteau dans une cible à différentes distances. Pour cela, on donne au couteau une légère rotation ou pas de rotation du tout.</p>
                </div>
                <div className="carouselText">
                    <p>Un mangeur de feu est un amuseur public souvent un artiste de rue ou un artiste dans un spectacle comme le cirque. Il place des objets enflammés dans sa bouche et les éteint.</p>
                </div>
                <div className="carouselText">
                    <p>La marche sur les mains est une forme inhabituelle de locomotion humaine consistant pour une personne à se déplacer de façon verticalement inversée, en faisant reposer tout le poids du corps sur ses mains, les jambes pouvant être complètement tendues ou non.</p>
                </div>
                <div className="carouselText">
                    <p>Un avaleur de sabre est un artiste de spectacle de tradition ancienne, dont le numéro consiste à introduire une lame (épée, sabre, couteau) dans la bouche  et de la faire descendre.</p>
                </div>
                <div className="carouselText">
                    <p>La pole dance est une discipline qui mêle danse et acrobaties autour de barre. Cette danse, pratiquée dans les cirques forains itinérants où des artistes en tenue légère dansaient autour des poteaux soutenant le chapiteau pour distraire les spectateurs</p>
                </div>
            </Carousel>
        </div>
    );
}
