import Image from 'next/image'
import Navigation_Bar from './components/navigation_bar'

function Home_Page()
{
    return(
        <main>
            <Navigation_Bar></Navigation_Bar>
            <div className="main_title">
                <h1>Home Page</h1>
            </div>
        </main>
    )
}

export default Home_Page;