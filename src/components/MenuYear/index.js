import { useAtom } from 'jotai'
import { selectedYearAtom } from 'utils/Atoms'
import * as S from './styles'

const MenuYear = ({ years }) => {
	const [selectedYear, setSelectedYear] = useAtom(selectedYearAtom)

	const handleClickDataByYear = (year) => {
		setSelectedYear(year)
	}

	return (
		<S.MenuBar>
			{years.map((year, i) => {
				return (
					<S.MenuButton
						key={`menu-button-year-${i}`}
						active={year === selectedYear}
						onClick={() => handleClickDataByYear(year)}
					>
						{year}
					</S.MenuButton>
				)
			})}
		</S.MenuBar>
	)
}

export default MenuYear
