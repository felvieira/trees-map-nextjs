import { useState } from 'react'
import ReactMapGL from 'react-map-gl'
import { getCenterOfPolygon } from 'utils/helpers'
import MenuYears from 'components/MenuYear'
import MenuChart from 'components/MenuChart'
import WrapperMaps from 'components/WrapperMaps'

export type MainProps = {
	description?: string
}

const Home = ({ datas, years }) => {
	const [viewport, setViewport] = useState({
		latitude: 0.751348,
		longitude: -68.578,
		zoom: 11
	})

	return (
		<>
			<MenuYears years={years} />
			<ReactMapGL
				{...viewport}
				width="100vw"
				height="100vh"
				mapStyle="mapbox://styles/flpchapola/cksw8w3ki161d1anqdenv0a0j"
				mapboxApiAccessToken={process.env.mapBox}
				onViewportChange={setViewport}
			>
				{datas &&
					datas.map((item, i) => {
						const coords = item.geometry.coordinates[0]
						const latitude = getCenterOfPolygon(coords)[1]
						const longitude = getCenterOfPolygon(coords)[0]

						return (
							<div key={`wrapper-maps-${i}`}>
								<WrapperMaps
									data={datas}
									item={item}
									index={i}
									latitude={latitude}
									longitude={longitude}
								/>
								<MenuChart data={datas} years={years} />
							</div>
						)
					})}
			</ReactMapGL>
		</>
	)
}

export default Home
