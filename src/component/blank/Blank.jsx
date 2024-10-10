import React from "react";
import { Col, Row } from "react-bootstrap";
import { MdChat } from "react-icons/md";

function Blank() {
  return (
    <>
      <Row className="m-0 blank-row">
        <Col lg={12} className="p-0">
          <div className="blank-main">
            <div className="blank-main-icon">
              <div className="blank-maini-img">
                <MdChat />
              </div>
              <p className="blank-main-p1">
                Select a conversation from the list to satrt chatting
              </p>
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
}

export default Blank;
