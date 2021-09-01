import { Bar } from "react-chartjs-2";
import * as S from "./styles";

const HorizontalBarChart = ({ dataChart }) => {

	const options = {
		indexAxis: 'y',
		elements: {
			bar: {
				borderWidth: 2
			}
		},
		responsive: true,
		plugins: {
			legend: {
				position: 'right'
			},
			title: {
				display: true,
				text: 'Gráfico de evolução populacional de árvores ao longo do tempo'
			}
		}
	}

	return (
		<>
			{dataChart ? (
				<Bar data={dataChart} options={options} />
			) : (
				<S.ChartTitle>
					Clique nas áreas acima para visualizar os gráficos
				</S.ChartTitle>
			)}
		</>
	)
}

export default HorizontalBarChart;
