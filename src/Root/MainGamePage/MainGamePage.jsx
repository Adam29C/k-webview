import React from "react";
import "./maingamepage.css";
import { Link } from "react-router-dom";
import NastedLayout from "../Containers/NastedLayout";
import PagesIndex from "../Pages/pageIndex";

const MainGamePage = () => {
  const { state } = PagesIndex.useLocation();

  const { selectedProvider } = PagesIndex.useSelector(
    (state) => state.CommonSlice
  );

  const [GetGameType, setGetGameType] = PagesIndex.useState([]);

  const getdata = async () => {
    try {
      const res = await PagesIndex.commanservice.FOR_GET_LIST(
        `${PagesIndex.apiRoutes.GET_GAME_TYPE_LIST}`
      );

      console.log("res", res.data);

      if (res.status) {
        setGetGameType(res.data);
        // setmyList(res.data.textMain);
        // console.log(res.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  PagesIndex.useEffect(() => {
    getdata();
  }, []);

  return (
    <NastedLayout
      title={`${selectedProvider?.providerName} DASHBOARD`}
      route={"/home"}
    >
      <div className="icon-grid-container">
        {/* {items.map((item, index) => (
          <Link
            to={item.path}
            state={{ title: state?.title }}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div className="icon-card" key={index}>
              <div className={`icon ${item.className}`}></div>
              <div className="icon-label">{item.label}</div>
            </div>
          </Link>
        ))} */}

        {GetGameType.map((item, index) => (
          <Link
            to={"singledigitcode"}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div className="icon-card" key={index}>
              <div className={`icon ${"single-digit"}`}></div>
              <div className="icon-label">{item.gameName}</div>
            </div>
          </Link>
        ))}
      </div>
    </NastedLayout>
  );
};

export default MainGamePage;
