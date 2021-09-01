import { Story, Meta } from '@storybook/react'
import SourceMaps from '.'
import ReactMapGL from 'react-map-gl'

export default {
	title: 'SourceMaps',
	component: SourceMaps
} as Meta

const viewport = {
	latitude: 0.751348,
	longitude: -68.578,
	zoom: 11
}
export const Default = (args) => (
	<ReactMapGL
		{...viewport}
		width="100vw"
		height="100vh"
		mapStyle="mapbox://styles/flpchapola/cksw8w3ki161d1anqdenv0a0j"
		mapboxApiAccessToken="pk.eyJ1IjoiZmxwY2hhcG9sYSIsImEiOiJja3N1dWI2aDMwMWgzMnVxa3RxbjVubzg3In0.Bt-IiP4NyIHPKY5FnbwmLQ"
	>
		<SourceMaps {...args} />
	</ReactMapGL>
)

Default.args = {
	item: {
		type: 'Feature',
		properties: {
			id: 1,
			name: 'Area 1'
		},
		geometry: {
			type: 'Polygon',
			coordinates: [
				[
					[-68.62129211425781, 0.8407672488339558],
					[-68.66523742675781, 0.7686765862784476],
					[-68.58455657958984, 0.7370936202008591],
					[-68.55331420898438, 0.8122744254223913],
					[-68.62129211425781, 0.8407672488339558]
				]
			]
		},
		bbox: [-68.66523, 0.73709, -68.55331, 0.84076],
		population: [
			{
				id_geometria: 1,
				ano: '2000',
				populacao: 11567
			},
			{
				id_geometria: 1,
				ano: '2002',
				populacao: 12345
			},
			{
				id_geometria: 1,
				ano: '2004',
				populacao: 13450
			},
			{
				id_geometria: 1,
				ano: '2006',
				populacao: 13550
			}
		]
	},
	index: 1
}
