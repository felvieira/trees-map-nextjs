import MarkerMaps from 'components/MarkerMaps'
import PopupMaps from 'components/PopupMaps'
import SourceMaps from 'components/SourceMaps'

const WrapperMaps = ({ data, item, index, latitude, longitude }) => {
	return (
		<>
			<MarkerMaps
				data={data}
				item={item}
				index={index}
				latitude={latitude}
				longitude={longitude}
			/>
			<PopupMaps
				data={data}
				item={item}
				index={index}
				latitude={latitude}
				longitude={longitude}
			/>
			<SourceMaps item={item} index={index} />
		</>
	)
}

export default WrapperMaps
