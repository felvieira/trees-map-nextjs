import { Meta } from '@storybook/react'
import MenuYear from '.'

export default {
	title: 'MenuYear',
	component: MenuYear
} as Meta

export const Default = (args) => <MenuYear {...args} />

Default.args = {
	years: ['2000', '2002', '2004', '2006']
}
