import { styledMapFn } from 'utils/helpers'
import { Source, Layer } from 'react-map-gl'

const SourceMaps = ({ item, index }) => {
	return (
		<Source id={`map-${index}`} type="geojson" data={item}>
			<Layer {...styledMapFn(index)} />
		</Source>
	)
}

export default SourceMaps
