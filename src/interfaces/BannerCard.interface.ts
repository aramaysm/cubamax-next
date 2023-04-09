import { CardProps } from "./Card.interface";


export interface BannerCardProps{
    title?: string;
    description?: string;
    cardsArray: Array<CardProps>;
}