import * as S from './styles'
import { getIconMarkerByPopulation, getPopulation } from 'utils/helpers'
import { Marker } from 'react-map-gl'
import { useAtom } from 'jotai'
import { selectedYearAtom } from 'utils/Atoms'

const MarkerMaps = ({ data, item, index, latitude, longitude }) => {
	const [selectedYear, setSelectedYear] = useAtom(selectedYearAtom)
	return (
		<Marker
			key={`marker-${index}`}
			latitude={latitude}
			longitude={longitude}
			offsetLeft={-20}
			offsetTop={-10}
		>
			<S.MarkerIconContainer>
				<S.MarkerIcon
					Source={getIconMarkerByPopulation(
						getPopulation(data, item.properties.id, selectedYear)
					)}
				/>
			</S.MarkerIconContainer>
		</Marker>
	)
}

export default MarkerMaps
