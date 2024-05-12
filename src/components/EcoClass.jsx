import { Component } from "react";

class EcoClass extends Component {
	constructor() {
		super();

		this.state = {
			activeCategory: "fruits",
		};
	}

	render() {
		return (
			<section id="our-product">
				<div className="container">
					<div className="our-product-content">
						<h2>Our Product</h2>

						<div className="our-product-categories">
							<span
								className={`${this.state.activeCategory === "fruits" ? "active" : ""}`}
								onClick={() => this.setState({ activeCategory: "fruits" })}
							>
								Fruits
							</span>
							<span
								className={`${this.state.activeCategory === "vegetables" ? "active" : ""}`}
								onClick={() => this.setState({ activeCategory: "vegetables" })}
							>
								Vegetables
							</span>
							<span
								className={`${this.state.activeCategory === "driedFruits" ? "active" : ""}`}
								onClick={() => this.setState({ activeCategory: "driedFruits" })}
							>
								Dried fruits
							</span>
							<span
								className={`${this.state.activeCategory === "driedVegetables" ? "active" : ""}`}
								onClick={() => this.setState({ activeCategory: "driedVegetables" })}
							>
								Dried vegetables
							</span>
						</div>

						<div className="our-product-items">
							<div className={`${this.state.activeCategory === "fruits" ? "active" : ""}`}>
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
							<div className={`${this.state.activeCategory === "vegetables" ? "active" : ""}`}>
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
							<div className={`${this.state.activeCategory === "driedFruits" ? "active" : ""}`}>
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
							<div className={`${this.state.activeCategory === "driedVegetables" ? "active" : ""}`}>
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
}

export default EcoClass;
