import React from 'react';

interface ApplyOfferModalProps {
  isOpen: boolean;
  onClose: () => void;
  onApply: () => void;
  offers: any[];
  selectedOffer: any;
  onSelectOffer: (offer: any) => void;
}

const ApplyOfferModal: React.FC<ApplyOfferModalProps> = ({ isOpen, onClose, onApply, offers, selectedOffer, onSelectOffer }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-4 rounded-lg shadow-lg w-full max-w-md">
        <h3 className="text-xl font-semibold mb-4">Apply Offer</h3>
        <div className="mb-4">
          {offers.map((offer) => (
            <div key={offer.id} className="flex items-center mb-2">
              <input
                type="radio"
                id={`offer-${offer.id}`}
                name="offer"
                checked={selectedOffer?.id === offer.id}
                onChange={() => onSelectOffer(offer)}
              />
              <label htmlFor={`offer-${offer.id}`} className="ml-2 cursor-pointer">{offer.offerName} - {offer.discount}% off</label>
            </div>
          ))}
        </div>
        <div className="flex justify-end">
          <button className="bg-gray-300 px-4 py-2 rounded mr-2" onClick={onClose}>Cancel</button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={onApply}>Apply Offer</button>
        </div>
      </div>
    </div>
  );
};

export default ApplyOfferModal;
