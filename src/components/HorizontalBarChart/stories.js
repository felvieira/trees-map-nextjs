import { Story, Meta } from '@storybook/react'
import HorizontalBarChart from '.'

export default {
	title: 'HorizontalBarChart',
	component: HorizontalBarChart
}

export const Default = (args) => <HorizontalBarChart {...args} />

Default.args = {
	dataChart: {
		labels: ['2000', '2002', '2004', '2006'],
		datasets: [
			{
				label: '# de Árvores',
				data: [11567, 12345, 13450, 13550],
				backgroundColor: [
					'rgba(255, 99, 132, 0.2)',
					'rgba(54, 162, 235, 0.2)',
					'rgba(255, 206, 86, 0.2)',
					'rgba(75, 192, 192, 0.2)',
					'rgba(153, 102, 255, 0.2)',
					'rgba(255, 159, 64, 0.2)'
				],
				borderColor: [
					'rgba(255, 99, 132, 0.8)',
					'rgba(54, 162, 235, 0.8)',
					'rgba(255, 206, 86, 0.8)',
					'rgba(75, 192, 192, 0.8)',
					'rgba(153, 102, 255, 0.8)',
					'rgba(255, 159, 64, 0.8)'
				],
				borderWidth: 1
			}
		]
	}
}
