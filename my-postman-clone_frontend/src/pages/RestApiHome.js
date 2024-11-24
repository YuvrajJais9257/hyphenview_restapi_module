import React, { useState } from "react";
import { 
  // useDispatch, 
  useSelector } from "react-redux";
import "./RestApiHome.css";

import TopBar from "../components/TopBar/TopBar";
import UrlBar from "../components/UrlBar/UrlBar";
import Tabs from "../components/Tabs/Tabs";
import TabContent from "../components/TabContent/TabContent";
import ResponseSection from "../components/ResponseSection/ResponseSection";

export default function RestApiHome() {
  // const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("params");
  const [selectedFields, setSelectedFields] = useState([]);

  return (
    <div className="rest-api-client">
      <TopBar/>
      <UrlBar/>
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab}/>
      <TabContent activeTab={activeTab}/>
      <ResponseSection selectedFields={selectedFields} setSelectedFields={setSelectedFields}/>
    </div>
  );
}

