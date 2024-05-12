import { useState } from "react";

function Eco() {
	const [activeCategory, setActiveCategory] = useState('fruits');

	return (
		<section id="our-product">
			<div className="container">
				<div className="our-product-content">
					<h2>Our Product</h2>

					<div className="our-product-categories">
						<span className={`${activeCategory === 'fruits' ? 'active' : ''}`} onClick={() => setActiveCategory('fruits')}>
							Fruits
						</span>
						<span className={`${activeCategory === 'vegetables' ? 'active' : ''}`} onClick={() => setActiveCategory('vegetables')}>
							Vegetables
						</span>
						<span className={`${activeCategory === 'driedFruits' ? 'active' : ''}`} onClick={() => setActiveCategory('driedFruits')}>
							Dried fruits
						</span>
						<span className={`${activeCategory === 'driedVegetables' ? 'active' : ''}`} onClick={() => setActiveCategory('driedVegetables')}>
							Dried vegetables
						</span>
					</div>

					<div className="our-product-items">
						<div className={`${activeCategory === 'fruits' ? 'active' : ''}`}>
							<div className="our-product-item">
								<div className="our-product-item-img">
									<div className="our-product-item-img-bg">
										<i className="fa-solid fa-magnifying-glass"></i>
									</div>
									<img src="./images/rich-may.png" alt="" />
								</div>
								<h3>Rich May</h3>
							</div>
							<div className="our-product-item">
								<div className="our-product-item-img">
									<div className="our-product-item-img-bg">
										<i className="fa-solid fa-magnifying-glass"></i>
									</div>
									<img src="./images/summer-sweet.png" alt="" />
								</div>
								<h3>Summer Sweat</h3>
							</div>
							<div className="our-product-item">
								<div className="our-product-item-img">
									<div className="our-product-item-img-bg">
										<i className="fa-solid fa-magnifying-glass"></i>
									</div>
									<img src="./images/white-fresh.png" alt="" />
								</div>
								<h3>White Fresh</h3>
							</div>
							<div className="our-product-item">
								<div className="our-product-item-img">
									<div className="our-product-item-img-bg">
										<i className="fa-solid fa-magnifying-glass"></i>
									</div>
									<img src="./images/peach-flat.png" alt="" />
								</div>
								<h3>Peach Flat</h3>
							</div>
						</div>
						<div className={`${activeCategory === 'vegetables' ? 'active' : ''}`}>
							<div className="our-product-item">
								<div className="our-product-item-img">
									<div className="our-product-item-img-bg">
										<i className="fa-solid fa-magnifying-glass"></i>
									</div>
									<img src="./images/tomato.jpg" alt="" />
								</div>
								<h3>Tomato</h3>
							</div>
							<div className="our-product-item">
								<div className="our-product-item-img">
									<div className="our-product-item-img-bg">
										<i className="fa-solid fa-magnifying-glass"></i>
									</div>
									<img src="./images/basilica.jpg" alt="" />
								</div>
								<h3>Basilica</h3>
							</div>
							<div className="our-product-item">
								<div className="our-product-item-img">
									<div className="our-product-item-img-bg">
										<i className="fa-solid fa-magnifying-glass"></i>
									</div>
									<img src="./images/garlic.jpg" alt="" />
								</div>
								<h3>Garlic</h3>
							</div>
							<div className="our-product-item">
								<div className="our-product-item-img">
									<div className="our-product-item-img-bg">
										<i className="fa-solid fa-magnifying-glass"></i>
									</div>
									<img src="./images/dill.jpg" alt="" />
								</div>
								<h3>Dill</h3>
							</div>
						</div>
						<div className={`${activeCategory === 'driedFruits' ? 'active' : ''}`}>
							<div className="our-product-item">
								<div className="our-product-item-img">
									<div className="our-product-item-img-bg">
										<i className="fa-solid fa-magnifying-glass"></i>
									</div>
									<img src="./images/dried-apricot.jpg" alt="" />
								</div>
								<h3>Dried Appricot</h3>
							</div>
							<div className="our-product-item">
								<div className="our-product-item-img">
									<div className="our-product-item-img-bg">
										<i className="fa-solid fa-magnifying-glass"></i>
									</div>
									<img src="./images/nut.jpg" alt="" />
								</div>
								<h3>Nut</h3>
							</div>
							<div className="our-product-item">
								<div className="our-product-item-img">
									<div className="our-product-item-img-bg">
										<i className="fa-solid fa-magnifying-glass"></i>
									</div>
									<img src="./images/walnut.jpg" alt="" />
								</div>
								<h3>Walnut</h3>
							</div>
							<div className="our-product-item">
								<div className="our-product-item-img">
									<div className="our-product-item-img-bg">
										<i className="fa-solid fa-magnifying-glass"></i>
									</div>
									<img src="./images/dried-apple.jpg" alt="" />
								</div>
								<h3>Dried Apple</h3>
							</div>
						</div>
						<div className={`${activeCategory === 'driedVegetables' ? 'active' : ''}`}>
							<div className="our-product-item">
								<div className="our-product-item-img">
									<div className="our-product-item-img-bg">
										<i className="fa-solid fa-magnifying-glass"></i>
									</div>
									<img src="./images/dried-spinach.jpg" alt="" />
								</div>
								<h3>Dried Spinach</h3>
							</div>
							<div className="our-product-item">
								<div className="our-product-item-img">
									<div className="our-product-item-img-bg">
										<i className="fa-solid fa-magnifying-glass"></i>
									</div>
									<img src="./images/dried-dill.jpg" alt="" />
								</div>
								<h3>Dried Dill</h3>
							</div>
							<div className="our-product-item">
								<div className="our-product-item-img">
									<div className="our-product-item-img-bg">
										<i className="fa-solid fa-magnifying-glass"></i>
									</div>
									<img src="./images/dried-mint.jpg" alt="" />
								</div>
								<h3>Dried Mint</h3>
							</div>
							<div className="our-product-item">
								<div className="our-product-item-img">
									<div className="our-product-item-img-bg">
										<i className="fa-solid fa-magnifying-glass"></i>
									</div>
									<img src="./images/dried-parsley.jpg" alt="" />
								</div>
								<h3>Dried Parsley</h3>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Eco;
