import { useParams } from 'react-router-dom';
import itemsArray from '../assetts/items';
import { Link } from 'react-router-dom';
import { IoIosArrowBack } from 'react-icons/io';
import { IconContext } from 'react-icons';
import { BsCartPlus } from 'react-icons/bs';

export default function ItemDetails(props) {
  const itemId = useParams().id;
  // console.log(useParams());
  // console.log(props);
  let domElement;
  const handleAddToCartClick = props.handleAddToCartClick;
  {
    itemsArray.map((item) => {
      if (item.id == itemId) {
        domElement = (
          <div className="itemDetails" data-id={itemId}>
            <IconContext.Provider value={{ className: 'goBackIcon' }}>
              <Link id="goBackLink" to={`/shop`}>
                <IoIosArrowBack></IoIosArrowBack>
              </Link>
            </IconContext.Provider>
            <img className="detailsImg" src={item.img} />
            <div className="textCont">
              <h2 className="itemName"> {item.name}</h2>
              <h2>
                {item.price}
                {item.currency}
                <IconContext.Provider value={{ className: 'addToCartIcon' }}>
                  <BsCartPlus onClick={handleAddToCartClick} data-id={itemId} id="addToCartBtn"></BsCartPlus>
                </IconContext.Provider>
              </h2>

              <p> {item.description}</p>
            </div>
          </div>
        );
      }
    });
  }

  return domElement;
}
