import React from "react"
import "./Clock.css"

function getIcon(season) {
	let icon = `${season}.png`
	return icon
}

const Clock = props => {
	const { date, season, errorMessage } = props
	const seconds = date.getSeconds()
	const minutes = date.getMinutes()
	const hours = date.getHours()
	const icon = getIcon(season)

	return (
		<div>
			<div className="container">
				<div className="clock-face" style={{ backgroundImage: `url(/${icon})` }}>
					<div className="clock">
						<div className="hours-container">
							<div
								className="hours"
								style={{ transform: `rotateZ(${hours * 30 + minutes / 2}deg)` }}
							></div>
						</div>
						<div className="minutes-container">
							<div className="minutes" style={{ transform: `rotateZ(${minutes * 6}deg)` }}></div>
						</div>
						<div className="seconds-container">
							<div className="seconds" style={{ transform: `rotateZ(${seconds * 6}deg)` }}></div>
						</div>
					</div>
				</div>
			</div>
			<div>
				{errorMessage && (
					<p className="error">
						Oops! Cannot display season: {errorMessage} (try checking location settings)
					</p>
				)}
			</div>
		</div>
	)
}

export default Clock
