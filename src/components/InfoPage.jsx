import { Checkbox } from "antd";
import "../scss/basic.scss";

const InfoPage = () => {
  return (
    <div>
      <div>
        <h1>Personal Information</h1>
      </div>
      <div className="box_tabs">
        <div className="box_info">
          <div className="box_name">
            <h4>First Name:</h4>
            <p>Jared</p>
          </div>
          <div className="box_surname">
            <h4>Middle Name:</h4>
            <p>William</p>
          </div>
          <div className="box_lastname">
            <h4>Last Name:</h4>
            <p>Black</p>
          </div>
        </div>
        <div className="box_info1">
          <div className="box_number">
            <h4>Phone Number:</h4>
            <p>+99890147432</p>
          </div>
          <div className="box_num2">
            <h4>Secondary Phone:</h4>
            <p>--</p>
          </div>
          <div className="box_email">
            <h4>Email</h4>
            <p>darkknight@gmail. com</p>
          </div>
        </div>
        <div className="box_info2">
          <div className="box_married">
            <h4>Marital Status:</h4>
            <p>Married</p>
          </div>
          <div className="box_word">
            <h4>Mobility Status:</h4>
            <p>Working</p>
          </div>
          <div className="box_benefit">
            <h4>Beneficiaries:</h4>
            <p>CHild, Husband, Sibling</p>
          </div>
        </div>
        <div className="box_info3">
          <div className="box_age">
            <h4>Age:</h4>
            <p>67</p>
          </div>
          <div className="box_id">
            <h4>Valid State ID or License:</h4>
            <p>Yes</p>
          </div>
          <div className="box_acc">
            <h4>Active Bank Account:</h4>
            <p>Yes</p>
          </div>
        </div>
      </div>
      <div className="lead">
        <h1>Lead Eligibility</h1>
      </div>
      <div className="box_lead">
        <div className="box_state">
          <h4>State:</h4>
          <p>Arizona</p>
        </div>
        <div className="box_need">
          <h4>Need insurance for:</h4>
          <p>Themselve</p>
        </div>
        <div className="box_check">
          <Checkbox defaultChecked disabled>
            <p>Saw commercial</p>
          </Checkbox>
        </div>
      </div>
    </div>
  );
};

export default InfoPage;
