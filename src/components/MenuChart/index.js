import { useAtom } from 'jotai'
import { selectedAreaAtom, selecteDataChartAtom } from 'utils/Atoms'
import * as S from './styles'
import HorizontalBarChart from '../HorizontalBarChart'
import { chartColors } from 'styles/colors'

const MenuChart = ({ data, years }) => {
	const [selectedArea, setSelectedArea] = useAtom(selectedAreaAtom)
	const [selecteDataChart, setSelecteDataChart] = useAtom(selecteDataChartAtom)

	const dataChartMount = (data, years, area) => {
		area = parseInt(area.replace(/[^0-9]+/, ''))
		let dataChartFinal = []

		data.forEach((item, i) => {
			dataChartFinal.push({
				labels: [...years],
				datasets: [
					{
						label: '# de Árvores',
						data: item.population.map(({ populacao }) => populacao),
						backgroundColor: [...chartColors(0.2)],
						borderColor: [...chartColors(0.8)],
						borderWidth: 1
					}
				]
			})
		})

		return dataChartFinal[area - 1]
	}

	const handleClickDataByArea = (area) => {
		setSelectedArea(area)
		setSelecteDataChart(dataChartMount(data, years, area))
	}

	return (
		<S.ChartContainer>
			<S.Chart>
				<S.ChartBar>
					{data.map((area, i) => {
						area = area.properties.name
						return (
							<S.ChartButton
								key={`menu-button-area-${i}`}
								active={area === selectedArea}
								onClick={() => handleClickDataByArea(area)}
							>
								{area}
							</S.ChartButton>
						)
					})}
				</S.ChartBar>
				<HorizontalBarChart years={years} dataChart={selecteDataChart} />
			</S.Chart>
		</S.ChartContainer>
	)
}

export default MenuChart
