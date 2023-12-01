import './style.css';


const Listing = (props) => {
  const { items } = props;
  return (
    <div className='item-list'>
      {items.length > 0 && items.map(item =>
        <Card key={item.listing_id} item={item} />
      )}
    </div>
  );
};

const Card = (props) => {
  const { item } = props;
  console.log(item);
  return (
    <div className='item' key={item.listing_id}>
      <div className='item-image'>
        <a href={item.url}>
          <img src={item.MainImage.url_570xN} alt={item.alt} />
        </a>
      </div>
      <div className='item-details'>
        <p className='item-title'>{item.title}</p>
        <RenderCode item={item} />
        <RenderLevel item={item} />
      </div>
    </div>
  );
};

function RenderCode(props) {
  const { item } = props;
  if (item.currency_code === 'USD') {
    return (<p className='item-price'>$ {item.price}</p>);
  } else if (item.currency_code === 'EUR') {
    return (<p className='item-price'>€ {item.price}</p>);
  } else {
    return (<p className='item-price'>{item.price} {item.currency_code}</p>);
  }  
}

function RenderLevel (props) {
  const { item } = props;
  if (props > 20) {
    return (<p class="item-quantity level-high">{item.quantity}</p>)
  } else if (props <= 20) {
    return (<p class="item-quantity level-medium">{item.quantity}</p>)
  } else if (props <= 10) {
    return (<p class="item-quantity level-low">{item.quantity}</p>)
  } 
}

export default Listing;