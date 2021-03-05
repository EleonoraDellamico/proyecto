import DatosPortfolio from '../../assets/data/DatosPortfolio.json';
import Portfolio from '../../components/Portfolio/Portfolio';

const Home = () => {
	return (
		<div>
			<Portfolio data={DatosPortfolio} />
		</div>
	);
};
export default Home;
