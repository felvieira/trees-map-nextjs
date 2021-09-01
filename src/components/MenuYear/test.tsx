import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import MenuYear from '.'

const years = ['2000', '2002', '2004', '2006']

describe('<MenuYear />', () => {
	it('should render the menu with default strings', () => {
		renderWithTheme(<MenuYear years={years} />)
		expect(screen.getByText(/2000/i)).toBeInTheDocument()
		expect(screen.getByText(/2002/i)).toBeInTheDocument()
		expect(screen.getByText(/2004/i)).toBeInTheDocument()
		expect(screen.getByText(/2006/i)).toBeInTheDocument()
	})

	it('should render the menu with default style', () => {
		renderWithTheme(<MenuYear years={years} />)
		expect(screen.getByText(/2000/i)).toHaveStyle({
			background: '#426A5A'
		})
		expect(screen.getByText(/2002/i)).toHaveStyle({
			background: 'none'
		})
	})
})
