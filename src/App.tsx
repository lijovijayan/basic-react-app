import { Counter, CouterProvider } from './pages/counter'
import './styles/app.scss'

function App() {
    return (
        <CouterProvider>
            <div className="app-container">
                Hello World !
                <Counter />
            </div>
        </CouterProvider>
    )
}

export default App
