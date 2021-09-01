import Home from 'templates/Home'
import regions from '../data/regioes_florestais.geojson'
import regionsData from '../data/populacao_de_arvores.json'

const unifyData = (base, target) => {
	let data = []
	base.features.forEach((b) => {
		const isIDmatch = target.filter((t) => t.id_geometria === b.properties.id)
		data.push({
			...b,
			...(!!isIDmatch && {
				population: isIDmatch
			})
		})
	})
	return data
}

export default function Index({ datas, years }) {
	return <Home datas={datas} years={years} />
}

export const getStaticProps = async () => {
	return {
		props: {
			datas: unifyData(regions, regionsData),
			years: [...new Set(regionsData.map((item) => item.ano))]
		}
	}
}
