import Ancients from '../assets/Ancients/index'

const ancientsData = [
	{
		id: 'azathoth',
		name: 'azathoth',
		cardFace: Ancients.azathoth,
		firstStage: {
			greenCards: 1,
			brownCards: 2,
			blueCards: 1,
		},
		secondStage: {
			greenCards: 2,
			brownCards: 3,
			blueCards: 1,
		},
		thirdStage: {
			greenCards: 2,
			brownCards: 4,
			blueCards: 0,
		},
	},
	{
		id: 'cthulhu',
		name: 'cthulhu',
		cardFace: Ancients.cthulhu,
		firstStage: {
			greenCards: 0,
			brownCards: 2,
			blueCards: 2,
		},
		secondStage: {
			greenCards: 1,
			brownCards: 3,
			blueCards: 0,
		},
		thirdStage: {
			greenCards: 3,
			brownCards: 4,
			blueCards: 0,
		},
	},
	{
		id: 'iogSothoth',
		name: 'iogSothoth',
		cardFace: Ancients.iogSothoth,
		firstStage: {
			greenCards: 0,
			blueCards: 1,
			brownCards: 2,
		},
		secondStage: {
			greenCards: 2,
			blueCards: 1,
			brownCards: 3,
		},
		thirdStage: {
			greenCards: 3,
			blueCards: 0,
			brownCards: 4,
		},
	},
	{
		id: 'shubNiggurath',
		name: 'shubNiggurath',
		cardFace: Ancients.shubNiggurath,
		firstStage: {
			greenCards: 1,
			blueCards: 1,
			brownCards: 2,
		},
		secondStage: {
			greenCards: 3,
			blueCards: 1,
			brownCards: 2,
		},
		thirdStage: {
			greenCards: 2,
			blueCards: 0,
			brownCards: 4,
		},
	},
]

export default ancientsData