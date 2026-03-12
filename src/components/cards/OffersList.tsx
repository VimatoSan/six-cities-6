import OfferCard from './OfferCard.tsx';
import {Offer} from '../../types/offer.ts';
import {useState} from 'react';

type CardListProps = {
  offers: Offer[];
}


export default function OffersList({offers} : CardListProps) {
  // Пока состояние нигде не используется
  const [, setActiveOfferId] = useState<string>();

  return (
    <>
      {offers.map((offer) => <OfferCard key={offer.id} offer={offer} onHover={() => setActiveOfferId(offer.id)} />)}
    </>
  );
}
