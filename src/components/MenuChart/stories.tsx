import { Meta } from '@storybook/react'
import MenuChart from '.'

export default {
	title: 'MenuChart',
	component: MenuChart
} as Meta

export const Default = (args) => <MenuChart {...args} />

Default.args = {
	years: ['2000', '2002', '2004', '2006'],
	area: ['Area 1', 'Area 2', 'Area 3', 'Area 4'],
	data: [
		{
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
		{
			type: 'Feature',
			properties: {
				id: 2,
				name: 'Area 2'
			},
			geometry: {
				type: 'Polygon',
				coordinates: [
					[
						[-68.55056762695312, 0.811244560531055],
						[-68.58112335205078, 0.7357204426124674],
						[-68.49632263183594, 0.7436162079501766],
						[-68.48602294921875, 0.8332149541586927],
						[-68.55056762695312, 0.811244560531055]
					]
				]
			},
			bbox: [-68.58112, 0.73572, -68.48602, 0.83321],
			population: [
				{
					id_geometria: 2,
					ano: '2000',
					populacao: 17594
				},
				{
					id_geometria: 2,
					ano: '2002',
					populacao: 18998
				},
				{
					id_geometria: 2,
					ano: '2004',
					populacao: 21765
				},
				{
					id_geometria: 2,
					ano: '2006',
					populacao: 20210
				}
			]
		},
		{
			type: 'Feature',
			properties: {
				id: 3,
				name: 'Area 3'
			},
			geometry: {
				type: 'Polygon',
				coordinates: [
					[
						[-68.66832733154297, 0.7075702100461758],
						[-68.68858337402344, 0.6519558403811502],
						[-68.62472534179688, 0.63204437078637],
						[-68.56361389160156, 0.666717741283386],
						[-68.60343933105469, 0.7401832682254795],
						[-68.66558074951172, 0.7649003741792203],
						[-68.66832733154297, 0.7075702100461758]
					]
				]
			},
			bbox: [-68.68858, 0.63204, -68.56361, 0.7649],
			population: [
				{
					id_geometria: 3,
					ano: '2000',
					populacao: 7125
				},
				{
					id_geometria: 3,
					ano: '2002',
					populacao: 7690
				},
				{
					id_geometria: 3,
					ano: '2004',
					populacao: 7912
				},
				{
					id_geometria: 3,
					ano: '2006',
					populacao: 8105
				}
			]
		},
		{
			type: 'Feature',
			properties: {
				id: 4,
				name: 'Area 4'
			},
			geometry: {
				type: 'Polygon',
				coordinates: [
					[
						[-68.72360229492188, 0.6804497024083547],
						[-68.70849609375, 0.6584785461746173],
						[-68.69270324707031, 0.6540156431275282],
						[-68.67382049560545, 0.7082568031442219],
						[-68.72360229492188, 0.6804497024083547]
					]
				]
			},
			bbox: [-68.7236, 0.65847, -68.67382, 0.70825],
			population: [
				{
					id_geometria: 4,
					ano: '2000',
					populacao: 10105
				},
				{
					id_geometria: 4,
					ano: '2002',
					populacao: 11750
				},
				{
					id_geometria: 4,
					ano: '2004',
					populacao: 11940
				},
				{
					id_geometria: 4,
					ano: '2006',
					populacao: 10930
				}
			]
		}
	]
}
