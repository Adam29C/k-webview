// import { useEffect } from "react";
// import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
// import GameCard from "./GameCard";

// import ContactDetails from "./Contact-Details";
// import {
//   allServices,
//   apiRoutes,
//   gameSlice,
//   useDispatch,
//   useSelector,
// } from "../Pages/pageIndex";
// import StarlineGameCard from "./StarlineGameCard";

// const Home = () => {
//   const dispatch = useDispatch();
//   const { maingames, jackpotgames, starlinegames } = useSelector(
//     (state) => state.AllGames
//   );

//   const GetGamesList = async () => {
//     try {
//       const response = await allServices.FOR_GET_LIST(apiRoutes.GET_ALL_GAMES);
//       const response1 = await allServices.FOR_GET_LIST(
//         apiRoutes.GET_ALL_STARLINE_GAMES
//       );
//       const response2 = await allServices.FOR_GET_LIST(
//         apiRoutes.GET_ALL_JACKPOT_GAMES
//       );

//       if (response.status) {
//         dispatch(gameSlice.setMainGames(response.data));
//         dispatch(gameSlice.setStarlineGames(response1.data));
//         dispatch(gameSlice.setJackpotGames(response2.data));
//       }
//     } catch (error) {
//       console.error("Error fetching game list:", error);
//     }
//   };

//   useEffect(() => {
    
//     GetGamesList();
//   }, []);

//   return (
//     <Tabs>
//       <div className="tab-container ">
//         <TabList>
//           <Tab>Games</Tab>
//           <Tab>Starline</Tab>
//           <Tab>Jackpot</Tab>
//         </TabList>
//       </div>

//       <ContactDetails />
//       <TabPanel>
//         {maingames &&
//           maingames?.map((game, index) => <GameCard key={index} game={game} />)}
//       </TabPanel>
//       <TabPanel>
//         {starlinegames &&
//           starlinegames?.map((game, index) => (
//             <StarlineGameCard key={index} game={game} />
//           ))}
//       </TabPanel>
//       <TabPanel>
//         {jackpotgames &&
//           jackpotgames?.map((game, index) => (
//             <StarlineGameCard key={index} game={game} />
//           ))}
//       </TabPanel>
//     </Tabs>
//   );
// };

// export default Home;


import React from 'react'

const Tabs = () => {
  return (
    <div>Tabs</div>
  )
}

export default Tabs