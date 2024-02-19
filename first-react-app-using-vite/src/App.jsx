
import './App.css'
import CasinoSlots from './CasinoSlots'
import PropertyListing from './PropertyListing';
import ColorBox from './ColorBox';
import ScoreKeeper from './ScoreKeeper';

function App() {
  const properties = [
    { id: 129031, name: "Desert Yurt", rating: 4.9, price: 150 },
    { id: 129331, name: "Lone Mountain Cabin", rating: 4.8, price: 250 },
    { id: 129032, name: "Cactus Retreat", rating: 4.75, price: 300 },
    { id: 129033, name: "Redwood Treehouse Escape", rating: 4.9, price: 120 },
    { id: 129034, name: "Oceanview Condo", rating: 4.7, price: 140 },
    { id: 129035, name: "Gold Miner Campground", rating: 4.69, price: 96 },
  ];

  const colors = ["#75fef8", "#773140", "#71c34b", "#ac642b", "#dc8dd9", "#f35540", "#9110c7","#ef7b2f"]
  return (
    <div>
      <ScoreKeeper playerCount={5} target= {10}/>
    </div>
    // <div>
    //   <ColorBox colors={colors} />
    // </div>
    // <div>
    //   <PropertyListing properties={properties} />
    // </div>
    // <>
    // <CasinoSlots s1="❤️" s2="❤️" s3="❤️" />
    //   <CasinoSlots s1="❤️" s2="🍌" s3="❤️" />
    // </>
  )
}

export default App
