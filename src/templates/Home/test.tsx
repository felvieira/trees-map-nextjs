import { renderWithTheme } from 'utils/tests/helpers'

import Home from '.'

describe('<Home />', () => {
	it('should render the MAIN page', () => {
		const { container } = renderWithTheme(<Home />)

		expect(container.firstChild).toMatchSnapshot()
		expect(container.firstChild).toBeTruthy()
	})
})
