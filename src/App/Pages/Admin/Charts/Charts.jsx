import Main_Containers from "../../../Containers/Main_Containers";
import infinit from "../../../../assets/img/infinit.svg";
import PageIndex from "../../pageIndex";
import { FOR_GET_LIST } from "../../../Service/commanservice";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Charts() {
  const dispatch = PageIndex.useDispatch();

  const { maingames, jackpotgames, starlinegames } = useSelector(
    (state) => state.AllGames
  );

  const fetchAllData = async () => {
    try {
      const [mainGameProivders, starlineGamesProviders, abGamesProviders] =
        await Promise.all([
          FOR_GET_LIST(PageIndex.apiRoutes.GET_ALL_GAMES_PROVIDERS),
          FOR_GET_LIST(PageIndex.apiRoutes.GET_ALL_STARLINE_GAMES_PROVIDERS),
          FOR_GET_LIST(PageIndex.apiRoutes.GET_ALL_JACKPOT_GAMES_PROVIDERS),
        ]);

      if (mainGameProivders?.status) {
        dispatch(PageIndex.gameSlice.setMainGames(mainGameProivders?.data));
      }

      if (starlineGamesProviders?.status) {
        dispatch(
          PageIndex.gameSlice.setStarlineGames(starlineGamesProviders?.data)
        );
      }

      if (abGamesProviders?.status) {
        dispatch(PageIndex.gameSlice.setJackpotGames(abGamesProviders?.data));
      }
    } catch (error) {
      console.error("Error loading data", error.message);
    }
  };

  useEffect(() => {
    fetchAllData();
  }, [dispatch]);

  console.log("maingames", maingames);

  return (
    <div className="mt-3">

      {/* <Main_Containers>
        {maingames?.map((items, index) => {
          return (
            <div class=" d-flex align-items-center border-bottom py-2">
              <img
                src={infinit}
                alt="https://khatri555.com/"
                class="mx-2 img-hover-rotate "
              />
              <h4 class="mx-4">
                <a
                  class="text-decoration-none primary-color"
                  href="/jodi-chart/indramorning/jodi-chart"
                >
                  {items.providerName}
                </a>
              </h4>
     
            </div>
          );
        })}
      </Main_Containers> */}
    </div>
  );
}

export default Charts;
