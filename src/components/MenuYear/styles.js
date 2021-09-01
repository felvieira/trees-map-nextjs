import styled, { css } from 'styled-components'

export const MenuBar = styled.div`
	${({ theme }) => css`
		z-index: ${theme.zIndex.primary};
		position: absolute;
		display: flex;
		justify-content: space-around;
		width: 100%;
		padding: ${theme.spacings.xsmall};
		background: ${theme.colors.tertiary};
		border-bottom: 6px solid ${theme.colors.quaternary};
	`}
`

export const MenuButton = styled.div`
	${({ theme }) => css`
		background: ${({ active }) => (active ? theme.colors.quaternary : 'none;')};
		padding: ${theme.spacings.xxsmall} ${theme.spacings.xsmall};
		border-radius: ${theme.border.radiusButton};
		font-weight: ${theme.font.bold};
		color: ${({ active }) =>
			active ? theme.colors.tertiary : theme.colors.quaternary};
		cursor: pointer;
	`}
`
