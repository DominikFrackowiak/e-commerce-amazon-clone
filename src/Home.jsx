import Product from './Product'

import './Home.css'

const Home = () => {
	return (
		<div className='home'>
			<div className='home-container'>
				<img
					src='https://www.x-cart.com/wp-content/uploads/2019/01/ecommerce.jpg'
					alt='home site background image'
					className='home__image'
				/>

				<div className='home__row'>
					<Product
						id='1'
						title='Elegant and comfortable high-quality jeans perfect for any occasion'
						price={40}
						rating={4}
						image='https://cdn.shopify.com/s/files/1/0564/3223/0552/products/7bf280980d5bca3b69da5f7f9f8207e4fbfaf579_1512x1890_crop_center.jpg?v=1673540204'
					/>
					<Product
						id='2'
						title='Modern and minimalist pendant light with adjustable brightness - add style to your interior'
						price={80}
						rating={5}
						image='https://mobileimages.lowes.com/productimages/041d9ba2-d297-4722-b24c-232298fb4cc3/62400719.jpg'
					/>
				</div>
				<div className='home__row'>
					<Product
						id='3'
						title='Innovative wireless headphones with excellent sound quality and long battery life - enjoy music without limits'
						price={120}
						rating={4}
						image='https://m.media-amazon.com/images/I/71DIVD2sTNL._AC_UF1000,1000_QL80_.jpg'
					/>
					<Product
						id='4'
						title='Stylish and practical hiking backpack with large capacity and waterproof construction'
						price={60}
						rating={5}
						image='https://seatosummit.es/media/amasty/webp/catalog/product/cache/872c55e7bda5fbc68684ec8dced6af97/a/h/ahydbhs65yw-_4__1_jpg.webp'
					/>
					<Product
						id='5'
						title='Gentle and natural skincare range with flower extract - nourish your skin in a natural way'
						price={25}
						rating={4}
						image='https://m.media-amazon.com/images/I/514yHJ5-KwL._AC_UF1000,1000_QL80_.jpg'
					/>
				</div>
				<div className='home__row'>
					<Product
						id='6'
						title='Durable and designer phone case with shock resistance and full access to all functions - protection in style'
						price={15}
						rating={4}
						image='https://www.popsockets.eu/dw/image/v2/BFSM_PRD/on/demandware.static/-/Sites-popsockets-master-catalog/default/dwe794a3ef/images/hi-res/je-rabbitpaw-iphone13pro-1.png?sw=800&sh=800'
					/>
				</div>
			</div>
		</div>
	)
}

export default Home
