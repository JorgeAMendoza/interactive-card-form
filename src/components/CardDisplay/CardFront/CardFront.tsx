import cardLogo from '../../../assets/card-logo.svg';

const CardFront = () => {
  return (
    <div>
      <div>
        <div>
          <img src={cardLogo} alt="Card display logo" />
        </div>
      </div>

      <div>
        <p>0000 0000 0000 0000</p>
      </div>

      <div>
        <p>Jane Appleseed</p>
        <p>00/00</p>
      </div>
    </div>
  );
};

export default CardFront;
