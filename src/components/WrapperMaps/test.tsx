// import { render, screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import BgWrapper from '.'

describe('<BgWrapper />', () => {
	it('should render the BgWrapper with background image', () => {
		const props = {
			backgroundImage: 'https://source.unsplash.com/random/357x667'
		}

		const { container } = renderWithTheme(<BgWrapper {...props} />)

		expect(container.firstChild).toMatchSnapshot()
		expect(container.firstChild).toBeTruthy()
		expect(container.firstChild).toHaveStyle(
			`background-image: url(${props.backgroundImage})`
		)
	})
})
