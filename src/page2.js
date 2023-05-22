// import logo from './logo.svg';
import './App.css';
import { Outlet, Link } from "react-router-dom";
// import img from './jail.jpg';
function App() {
  return (
      <>
<div className='bg-[url(/jail.jpg)] absolute bg-fixed w-full h-screen md:w-full bg-center bg-cover bg-no-repeat font-mono overscroll-none'
style={{ backgroundAttachment: 'fixed', overflowY: 'auto' , backgroundPosition: "center"}}
>
        <div className=" md:hidden absolute text-center w-full py-4 md:bg-transparent bg-black bg-opacity-25">
              <h1 className="md:text-6xl text-4xl text-slate-200 text-bold px-5">FeedHungrySam</h1>
            </div>
          <div className='invisible md:visible lg:w-1/3 md:w-1/2 w-full md:text-left absolute md:top-10 sm:top:40  lg:right-20 md:right-10 right-0 md:p-0  top-[95%] ' >
            <div className="md:flex hidden py-4 md:bg-transparent bg-black bg-opacity-25">
              <h1 className="md:text-6xl text-4xl text-slate-200 text-bold px-5">FeedHungrySam</h1>
            </div>
            <div className='md:bg-transparent px-5 py-3'>
              <div className=" mb-5 text-white text-xl ">
              <p className="mb-4">
                FEAT is the first on chain derivative of FTX’s bankruptcy assets, without risk of liquidation. The FEAT team had such a disgusting level of cope due to the FTX fraud, that they decided to come up with a way for the cryptoverse to lever up the value of their own bankruptcy assets. The FTX lawyers are making &gt; $2000/hr. The FTX CEO John Ray is making &gt; $1000 an hour. There’s only 1 way to fight this - by levering up!
                </p>
                <p className="mb-4">
                FEAT’s mission is to increase the price of everyone’s bankruptcy assets by acquiring spot FTT & opening levered positions with proceeds from a 2% tax. Toxic leeches like John Ray, Kyle & Zhu, and FTX’s legal team are all seeking to drain user funds for their own gain. It’s time we created a vehicle for users to fight back.
                </p>
                <p className="mb-3">The project allocation is as follows:</p>
                <ul className='list-disc px-5 mb-4'>
                  <li className='list-item'>10% team</li>
                  <li className='list-item'>15% marketing and development to be used to pay influencers are partnerships - tokens can also be used for liquidity incentives if required</li>
                  <li className='list-item'>5% presale</li>
                  <li className='list-item'>70% liquidity</li>
                </ul>
<p className="mb-4">
it's been quite a bear market
<br />
</p>
              </div>
              <div className="flex space-x-2 justify-left ">
                <div>
                <Link to='/' className="inline-block px-6 py-2 border-4 border-green-600 text-green-600 font-bold text-base leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out m-5">Home</Link>
                  <button type="button" className="inline-block px-6 py-2 border-4 border-green-600 text-green-600 font-bold text-base leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out m-5">Token</button>
                </div>
              </div>
            </div>
          </div>
     
          <div className="lg:w-1/3 md:w-1/2 w-full h-screen md:text-left absolute md:top-10 sm:top:40  lg:right-20 md:right-10 right-0 md:p-0  top-[25%]">
            <div className="md:flex hidden py-4 md:bg-transparent bg-black bg-opacity-50">
              <h1 className="md:text-6xl text-4xl text-slate-200 text-bold px-5">FeedHungrySam</h1>
            </div>
            <div className="bg-opacity-50 bg-black px-5 py-3">
              <div className=" mb-5 text-white text-xl">
                <p className="mb-4">
                FEAT is the first on chain derivative of FTX’s bankruptcy assets, without risk of liquidation. The FEAT team had such a disgusting level of cope due to the FTX fraud, that they decided to come up with a way for the cryptoverse to lever up the value of their own bankruptcy assets. The FTX lawyers are making &gt; $2000/hr. The FTX CEO John Ray is making &gt; $1000 an hour. There’s only 1 way to fight this - by levering up!
                </p>
                <p className="mb-4">
                FEAT’s mission is to increase the price of everyone’s bankruptcy assets by acquiring spot FTT & opening levered positions with proceeds from a 2% tax. Toxic leeches like John Ray, Kyle & Zhu, and FTX’s legal team are all seeking to drain user funds for their own gain. It’s time we created a vehicle for users to fight back.
                </p>
                <p className="mb-3">The project allocation is as follows:</p>
                <ul className='list-disc px-5 mb-4'>
                  <li className='list-item'>10% team</li>
                  <li className='list-item'>15% marketing and development to be used to pay influencers are partnerships - tokens can also be used for liquidity incentives if required</li>
                  <li className='list-item'>5% presale</li>
                  <li className='list-item'>70% liquidity</li>
                </ul>
                <p className="mb-4">
                it's been quite a bear market
                <br />
</p>
              </div>
              <div className="flex space-x-2 justify-left ">
                <div>
                <Link to='/' className="inline-block px-6 py-2 border-4 border-green-600 text-green-600 font-bold text-base leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out m-5">Home</Link>
                  <button type="button" className="inline-block px-6 py-2 border-4 border-green-600 text-green-600 font-bold text-base leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out m-5">Token</button>
                </div>
              </div>
            </div>
          </div>
          </div>
          {/* <div className="bg-black h-[100vh]"></div>
          <div className="bg-black h-[100vh]"></div>
          <div className="bg-black md:bg-none h-[100vh] md:h-0"></div>
          <div className="bg-black md:bg-none h-[100vh] md:h-0"></div>
          <div className="bg-black md:bg-none h-[100vh] md:h-0"></div>
          <div className="bg-black md:bg-none h-[100vh] md:h-0"></div>
          <div className="bg-black md:bg-none h-[100vh] md:h-0"></div> */}
   </>
  );
}

export default App;
