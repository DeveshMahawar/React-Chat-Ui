import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import { Col, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import serchicon from "../../Assets/img/header-img/Union.svg";
import btnimg1 from "../../Assets/img/header-img/Rectangle 29.svg";
import Chatbox from "../chatbox/Chatbox";
import Blank from "../blank/Blank";
import Header from "../headar/Header";
function Chatname() {
  const [activeChatId, setActiveChatId] = useState(null);
  const [selectedChat, setSelectedChat] = useState(null); // State to store the selected chat
  const chatDate = new Date().toLocaleDateString().toUpperCase();

  const chatList = [
    {
      id: 1,
      name: "Balance Massage & Wellness",
      message: "Chat content for Wellness 1",
    },
    { id: 2, name: "Therapy & Spa", message: "Chat content for Therapy 2" },
    { id: 3, name: "Fitness & Health", message: "Chat content for Fitness 3" },
    { id: 4, name: "Fitness & Health", message: "Chat content for Fitness 3" },
    { id: 5, name: "Fitness & Health", message: "Chat content for Fitness 3" },
    { id: 6, name: "Fitness & Health", message: "Chat content for Fitness 3" },
    { id: 7, name: "Fitness & Health", message: "Chat content for Fitness 3" },
    { id: 10, name: "devesh", message: "Chat content for Fitness 3" },
  ];
  const navigate = useNavigate();

  const handleChatClick = (chat) => {
    if (window.innerWidth <= 480) {
      navigate(`/Chatbox`);
    } else {
      setSelectedChat(chat);
    }
    setSelectedChat(chat);
    setActiveChatId(chat.id);
  };
  return (
    <>
      <Header />
      <section className="main-box2">
        <Container fluid>
          <Row className="my-row">
            <Col lg={3} className="p-0 ">
              <div className="chatname-box">
                <div className="inner-chatname">
                  <span className="inner-chatname-span">Chats</span>
                  <Form inline className="chatname-form">
                    <Row>
                      <Col xs={12} className="chatname-col">
                        <Form.Control
                          type="text"
                          placeholder="Search by name"
                          className=" mr-sm-2"
                        />
                        <div className="serchicon-box">
                          <img src={serchicon} alt="dff5" />
                        </div>
                      </Col>
                    </Row>
                  </Form>
                </div>
                <div className="inner-chatname2">
                  {chatList.map((chat) => (
                    <div className="chat-pepols" key={chat.id}>
                      <button
                        className={`chat-pepols-btn ${
                          activeChatId === chat.id
                            ? "chat-pepols-btn-active"
                            : ""
                        }`}
                        onClick={() => handleChatClick(chat)}
                      >
                        <img src={btnimg1} alt="icon" />
                        <div className="pepols-btn-box">
                          <div className="pepols-btn-date">
                            <span className="pepols-btn-span">{chat.name}</span>
                            <span className="pepols-btn-span2">{chatDate}</span>
                          </div>
                          <span className="pepols-btn-span2">Yes</span>
                        </div>
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </Col>
            <Col lg={9} className="p-0 main-chat-box">
              {selectedChat ? <Chatbox /> : <Blank />}
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Chatname;
