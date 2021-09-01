import styled from 'styled-components'

export const MarkerIconContainer = styled.div`
	margin-left: -30%;
	margin-top: -50%;
`

export const MarkerIcon = styled.img.attrs(({ Source }) => ({
	src: Source.src
}))`
	max-width: ${({ Source }) => Source.size};
`
