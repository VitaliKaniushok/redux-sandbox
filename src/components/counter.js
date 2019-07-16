import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions';

const Counter = ({ counter, inc, dec, rnd }) => {

	return (
		<div className='jumbotron'>
			<h1>{counter}</h1>
			<button
				onClick={inc}
				className="btn btn-primary">INC
			</button>
			<button
				onClick={dec}
				className="btn btn-primary ml-1 mr-1">DEC
			</button>
			<button
				onClick={rnd}
				className="btn btn-primary">RND
			</button>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		counter:state
	}
};

// ---------- pierwszy sposób

// const mapDispatchToProps = (dispatch) => {

// 	const { inc, dec, rnd } = bindActionCreators(actions, dispatch);

// 	return {
// 		inc,
// 		dec,
// 		rnd: () => {
// 			const randomValue = ;
// 			rnd(randomValue);
// 		} 
// 	}
// }
// export default connect(mapStateToProps,mapDispatchToProps)(Counter);

// ----------- drugi sposób

// const mapDispatchToProps = (dispatch) => {

// 	return bindActionCreators(actions, dispatch);
// };
// export default connect(mapStateToProps,mapDispatchToProps)(Counter);

// ------------ trzeci sposób

export default connect(mapStateToProps,actions)(Counter);