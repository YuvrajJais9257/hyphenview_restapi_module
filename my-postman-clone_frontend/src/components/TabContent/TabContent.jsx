import React, { useState } from "react";
import "./TabContent.css";
import { useSelector, useDispatch } from "react-redux";
import ParamsSection from "../ParamsSection/ParamsSection";
import HeadersSection from "../HeadersSection/HeadersSection";
import BodySection from "../BodySection/BodySection";
import AuthSection from "../AuthSection/AuthSection";
import { setHeaders, setParams } from "../../redux/actions/RESTAPIActions";

const TabContent = ({ activeTab }) => {
  const dispatch = useDispatch();
  const params = useSelector((state) => state.restapi.request.params);
  const headers = useSelector((state) => state.restapi.request.headers);
  // const navigateToNextPage = () => {
  //   navigate("/json-to-csv");
  // };
  const [newHeaderKey, setNewHeaderKey] = useState("");
  const [newHeaderValue, setNewHeaderValue] = useState("");
  const [newParamKey, setNewParamKey] = useState("");
  const [newParamValue, setNewParamValue] = useState("");
  const [newAuthRequestKey, setNewAuthRequestKey] = useState("");
  const [newAuthRequestValue, setNewAuthRequestValue] = useState("");
  const [newTokenRequestKey, setNewTokenRequestKey] = useState("");
  const [newTokenRequestValue, setNewTokenRequestValue] = useState("");
  const [newRefreshRequestKey, setNewRefreshRequestKey] = useState("");
  const [newRefreshRequestValue, setNewRefreshRequestValue] = useState("");
  const [showNewTokenConfig, setShowNewTokenConfig] = useState(false);
  const [showJWTBearerAdvancedConfig, setShowJWTBearerAdvancedConfig] =
    useState(false);
  const [showOAuth1AdvancedConfig, setShowOAuth1AdvancedConfig] =
    useState(false);
  const [showOAuth2AdvancedConfig, setShowOAuth2AdvancedConfig] =
    useState(false);

  const handleAddHeader = () => {
    if (newHeaderKey && newHeaderValue) {
      dispatch(
        setHeaders([...headers, { key: newHeaderKey, value: newHeaderValue }])
      );
      setNewHeaderKey("");
      setNewHeaderValue("");
    }
  };
  const handleAddParam = () => {
    if (newParamKey && newParamValue) {
      dispatch(
        setParams([...params, { key: newParamKey, value: newParamValue }])
      );
      setNewParamKey("");
      setNewParamValue("");
    }
  };

  return (
    <div className="tab-content">
      {activeTab === "params" && (
        <ParamsSection
          params={params}
          newParamKey={newParamKey}
          newParamValue={newParamValue}
          setNewParamKey={setNewParamKey}
          setNewParamValue={setNewParamValue}
          handleAddParam={handleAddParam}
        />
      )}
      {activeTab === "headers" && (
        <HeadersSection
          headers={headers}
          newHeaderKey={newHeaderKey}
          newHeaderValue={newHeaderValue}
          setNewHeaderKey={setNewHeaderKey}
          setNewHeaderValue={setNewHeaderValue}
          handleAddHeader={handleAddHeader}
        />
      )}
      {activeTab === "body" && (
        <BodySection/>
      )}
      {activeTab === "authorization" && (
        <AuthSection
        newAuthRequestKey={newAuthRequestKey}
        newAuthRequestValue={newAuthRequestValue}
        setNewAuthRequestKey={setNewAuthRequestKey}
        setNewAuthRequestValue={setNewAuthRequestValue}
        newTokenRequestKey={newTokenRequestKey}
        newTokenRequestValue={newTokenRequestValue}
        setNewTokenRequestKey={setNewTokenRequestKey}
        setNewTokenRequestValue={setNewTokenRequestValue} 
        newRefreshRequestKey={newRefreshRequestKey}
        newRefreshRequestValue={newRefreshRequestValue}
        setNewRefreshRequestKey={setNewRefreshRequestKey}
        setNewRefreshRequestValue={setNewRefreshRequestValue}
        showNewTokenConfig={showNewTokenConfig}
        setShowNewTokenConfig={setShowNewTokenConfig}
        showJWTBearerAdvancedConfig={showJWTBearerAdvancedConfig}
        showOAuth1AdvancedConfig={showOAuth1AdvancedConfig}
        showOAuth2AdvancedConfig={showOAuth2AdvancedConfig}
        setShowOAuth1AdvancedConfig={setShowOAuth1AdvancedConfig}
        setShowOAuth2AdvancedConfig={setShowOAuth2AdvancedConfig}
        setShowJWTBearerAdvancedConfig={setShowJWTBearerAdvancedConfig}
       />
      )}
    </div>
  );
};

export default TabContent;
