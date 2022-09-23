import './Featured.scss'
import MoreVertIcon from '@mui/icons-material/MoreVert'
// import { CircularProgressbar } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import { VictoryPie } from 'victory-pie'

const myData = [{ y: 900 }, { y: 400 }, { y: 200 }, { y: 100 }]

const Featured = () => {
	return (
		<div className='featured'>
			<div className='top'>
				<h1 className='title'>Total Revenue</h1>
				<MoreVertIcon fontSize='small' />
			</div>
			<div className='bottom'>
				<div className='featuredChart'>
					{/* <CircularProgressbar value={70} text={'70%'} strokeWidth={5} /> */}

					<VictoryPie
						data={myData}
						colorScale={['#9013FE', '#E6E5E6', '#007AFF', '#FB8832']}
						radius={200}
					/>
				</div>
				<p className='title'>Total sales made today</p>
				<p className='amount'>$420</p>
				<p className='desc'>
					Previous transactions processing. Last payments may not be included.
				</p>

				<div className='summary'>
					<div className='item'>
						<div className='itemTitle'>Target</div>
						<div className='itemResult negative'>
							<KeyboardArrowDownIcon fontSize='small ' />
							<div className='resultAmount'>$12.4k</div>
						</div>
					</div>
					<div className='item'>
						<div className='itemTitle'>Last Week</div>
						<div className='itemResult positive'>
							<KeyboardArrowUpIcon fontSize='small ' />
							<div className='resultAmount'>$12.4k</div>
						</div>
					</div>
					<div className='item'>
						<div className='itemTitle'>Last Month</div>
						<div className='itemResult positive'>
							<KeyboardArrowUpIcon fontSize='small ' />
							<div className='resultAmount'>$12.4k</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Featured