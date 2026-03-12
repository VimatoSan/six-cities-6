import OfferCard from './OfferCard.tsx';
import {Offer} from '../../types/offer.ts';

type CardListProps = {
  offers: Offer[];
}


export default function OffersList({offers} : CardListProps) {
  return (
    <>
      {offers.map((offer) => <OfferCard key={offer.id} offer={offer} />)}
    </>
  );
}
