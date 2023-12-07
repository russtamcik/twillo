import "../scss/basic.scss";
import back from "../assets/icons/back.svg";
import edit from "../assets/icons/edit.svg";
import tel from "../assets/icons/tel.svg";
import message from "../assets/icons/message.svg";
import email from "../assets/icons/email.svg";
import contact from "../assets/icons/contact.svg";
import { Tabs } from "antd";
import InfoPage from "./InfoPage";

const BasicPage = () => {
  return (
    <div className="box">
      <div className="box_fix">
        <div className="box_back">
          <img src={back} alt="icon" />
          <p>Back</p>
        </div>
        <div className="box_edit">
          <p>Edit</p>
          <img src={edit} alt="icon" />
        </div>
      </div>
      <div className="box_account">
        <div className="box_head">
          <h2>Jared Black</h2>
          <div className="box_social">
            <button className="tel">
              <img src={tel} alt="icon" />
            </button>
            <button className="message">
              <img src={message} alt="icon" />
            </button>
            <button className="email">
              <img src={email} alt="icon" />
            </button>
          </div>
        </div>
        <div className="box_contact">
          <div className="box_lead">
            <img src={contact} alt="icon" />
            <p>Lead</p>
          </div>
        </div>
      </div>
      <Tabs className="tabs">
        <Tabs.TabPane tab="Details" key="tab1">
          <InfoPage />
        </Tabs.TabPane>
        <Tabs.TabPane tab="Coverage" key="tab2">
          <div>
            <h1>User Information</h1>
          </div>
        </Tabs.TabPane>
        <Tabs.TabPane tab="History" key="tab3">
          <div>
            <h1>People Information</h1>
          </div>
        </Tabs.TabPane>
      </Tabs>
    </div>
  );
};

export default BasicPage;
