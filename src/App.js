import React, { useEffect } from 'react';
import WebcamCapture from './components/WebcamCapture';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Preview from './components/Preview';
import Chats from './components/Chats';
import ChatView from './components/ChatView';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/appSlice';
import Login from './components/Login';
import { auth } from './firebase';

function App() {
	const user = useSelector(selectUser);
	const dispatch = useDispatch();

	// Stay consistent when browser is refreshed
	useEffect(() => {
		auth.onAuthStateChanged((authUser) => {
			if (authUser) {
				dispatch(
					login({
						username: authUser.displayName,
						profilePic: authUser.photoURL,
						id: authUser.uid,
					})
				);
			} else {
				dispatch(logout());
			}
		});
	}, [dispatch]);

	return (
		<div className='app'>
			<Router>
				{!user ? (
					<Login />
				) : (
					<>
						<img
							className='app__logo'
							src='https://play-lh.googleusercontent.com/KxeSAjPTKliCErbivNiXrd6cTwfbqUJcbSRPe_IBVK_YmwckfMRS1VIHz-5cgT09yMo'
							alt=''
						/>
						<div className='app__body'>
							<div className='app__bodyBackground'>
								<Switch>
									<Route exact path='/'>
										<WebcamCapture />
									</Route>
									<Route path='/Preview'>
										<Preview />
									</Route>
									<Route path='/chats/view'>
										<ChatView />
									</Route>
									<Route path='/chats'>
										<Chats />
									</Route>
								</Switch>
							</div>
						</div>
					</>
				)}
			</Router>
		</div>
	);
}

export default App;
