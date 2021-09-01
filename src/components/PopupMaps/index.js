import { Popup } from 'react-map-gl'
import { useState } from 'react'
import { getPopulation } from 'utils/helpers'
import { useAtom } from 'jotai'
import { selectedYearAtom } from 'utils/Atoms'

const PopupMaps = ({ data, item, index, latitude, longitude }) => {
	const [showPopup, togglePopup] = useState(true)
	const [selectedYear, setSelectedYear] = useAtom(selectedYearAtom)

	return (
		<>
			{showPopup && (
				<Popup
					key={`popup-${index}`}
					latitude={latitude}
					longitude={longitude}
					closeButton={false}
					closeOnClick={false}
					anchor="bottom"
				>
					<div>
						{item.properties.name} -{' '}
						{getPopulation(data, item.properties.id, selectedYear)}
					</div>
				</Popup>
			)}
		</>
	)
}

export default PopupMaps
