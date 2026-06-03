import { BrowserRouter, Routes, Route } from 'react-router';
import InvitePage from './page/InvitePage';
import HomePage from './page/HomePage';

function App() {

	return (
			<BrowserRouter>
				<div className="min-h-screen bg-slate-100 flex items-center justify-center p-4">
					<Routes>
						<Route path="/invite/:familyId" element={<InvitePage />} />
						<Route path="/" element={<HomePage />} />
					</Routes>
				</div>
			</BrowserRouter>
		)
}

export default App
