import React from 'react'
import { useState, useEffect, useRef } from 'react';
import { Col, Row, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import EmojiPicker from 'emoji-picker-react';
import btnimg2 from '../../Assets/img/header-img/Rectangle 30.svg'
import chatimg1 from '../../Assets/img/chatbox/Group 1321315809.svg'
import chatimg2 from '../../Assets/img/chatbox/Union.svg'
import chatimg3 from '../../Assets/img/chatbox/Vector.svg'
import chatimg4 from '../../Assets/img/chatbox/carbon_phone-filled.svg'
import chatimg5 from '../../Assets/img/chatbox/search.svg'
import sendimg1 from '../../Assets/img/chatbox/Vector2.svg'
import sendimg2 from '../../Assets/img/chatbox/add.svg'
import sendimg3 from '../../Assets/img/chatbox/voice.svg'
import chatprofile1 from '../../Assets/img/chatProfile/Frame 1321315803.svg'
import chatprofile2 from '../../Assets/img/chatProfile/Frame 13213158032.svg'
import chatprofile3 from '../../Assets/img/chatProfile/Call.svg'
import { IoIosArrowRoundBack } from "react-icons/io";



function Chatbox() {


    // --------------------emoji--------------------------
    const [showEmojiPicker, setShowEmojiPicker] = useState(false);
    const messagesEndRef = useRef(null);

    const handleEmojiClick = (emojiObject) => {
        setInputValue((prevInput) => prevInput + emojiObject.emoji);
        // setShowEmojiPicker(false);
    }
    //  --------------------------------------------------------
    const [text, setText] = useState('');

    // ---------------------------------------------------------
    const [messages, setMessages] = useState([]);
    const [inputValue, setInputValue] = useState('');
    // const [inputfile, setInputfile] = useState(' ')
    let lastDate = '';

    // const chatContainerRef = useRef(null);
    const handleInputChange = (e) => {
        setText(e.target.value);
        adjustTextareaHeight(e.target);
        setInputValue(e.target.value);
    };
    const adjustTextareaHeight = (textarea) => {
        textarea.style.height = '1em'; // Reset the height
        textarea.style.height = `${Math.min(textarea.scrollHeight, 5 * 24)}px`; // Limit to 5 rows (approx. 24px per row)
    };

    const handleSendMessage = () => {
        if (inputValue.trim()) {
            const options = { day: '2-digit', month: 'short' };
            const newMessage = {
                id: 1,
                // media: inputfile,
                message: inputValue,
                date: new Date().toLocaleDateString('en-US', options).toUpperCase(),
                time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }).toUpperCase(),
            };

            setMessages([...messages, newMessage]);
            setInputValue('');
            setShowEmojiPicker(false);

        }


    };
    useEffect(() => {
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [messages]);

    // -----------------------------------back btn ----------------------
    const navigate = useNavigate(); // Initialize navigate

    const handleBack = () => {
        navigate(-1); // Go back to the previous page
    };
    return (
        <>
            <Row className='p-0 m-0'>
                <Col className='p-0'>
                    <div className='chat-box'>
                        <div className='chat-box-head'>
                            <button onClick={handleBack} className="back-btn"><IoIosArrowRoundBack /></button>
                            <div className='chat-box-head2'>
                                <div className='chat-box-head-img'>
                                    <img src={btnimg2} alt='dff20' />
                                </div>

                                <div className='chat-box-head-box'>
                                    <span className='chat-box-head-span1'>
                                        Balance Massage & Welness
                                    </span>
                                    <span className='chat-box-head-span2'>Active</span>
                                </div>
                            </div>
                            <div className='chat-head-icons'>
                                <div className='chat-head-icons1'>
                                    <button><img src={chatimg5} alt='dff13' /></button>
                                </div>
                                <div className='chat-head-icons1 edit-icons'>
                                    <button>
                                        <img src={chatimg2} alt='dff115' />
                                        <img src={chatimg1} alt='dff21' className='edit-icons-img' />
                                    </button>
                                </div>
                                <div className='chat-head-icons1'>
                                    <button><img src={chatimg4} alt='dff16' /></button>
                                </div>
                                <div className='chat-head-icons1'>
                                    <button>
                                        <img src={chatimg3} alt='dff18' />
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className='chat-con'>
                            <div className="chatbox">
                                <div className="messages"  >
                                    {messages.map((msg, index) => {
                                        // const isNewDate = msg.date !== lastDate;
                                        // lastDate = msg.date;
                                        const isNewDate = index === 0 || msg.date !== messages[index - 1]?.date;

                                        return (
                                            <div key={index}>
                                                {isNewDate && (
                                                    <div className='outer-date-divider'>
                                                        <div className="date-divider ">
                                                            <span>{msg.date}</span>
                                                        </div>
                                                    </div>
                                                )}
                                                <div className={`message d-flex mb-3 ${msg.id === 1 ? 'align-right' : 'align-left'}`}>
                                                    <div>
                                                        <div className={`message-content ${msg.id === 1 ? 'right-message' : 'left-message'}`}>
                                                            {msg.message}
                                                        </div>
                                                        <div className={`message-time ${msg.id === 1 ? 'right-tym ' : 'left-tym'}`}>
                                                            {msg.time}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })}
                                    <div ref={messagesEndRef} />
                                </div>
                            </div>

                            <div className='chat-inp'>
                                <div className='chat-inp-inner'>
                                    <div className='chat-inp-inbtn1'>
                                        <button className='sendimg3' ><img src={sendimg3} alt="Send" /></button>
                                        <button className='sendimg2'>
                                            <img src={sendimg2} alt="Attachment" />
                                            <input type='file' className='sendimg2-in' id='file-input'
                                                onChange={handleInputChange}
                                            ></input>
                                        </button>
                                    </div>
                                    <textarea
                                        rows={1}
                                        type='text'
                                        placeholder='Write a message...'
                                        id='sendMsg'
                                        className='sendMsg'
                                        value={inputValue}
                                        onKeyDown={(e) => {
                                            if (e.key === 'Enter') {
                                                handleSendMessage();
                                            }
                                        }}
                                        onChange={handleInputChange}
                                    />

                                    <div className='chat-inp-inbtn2'>
                                        <button className={`sendimg1 ${inputValue.trim() ? 'sendimg1-chenge' : ''}`} onClick={handleSendMessage}><img src={sendimg1} alt="Send" /></button>
                                        <button className='sendimg4' onClick={() => setShowEmojiPicker((prev) => !prev)}>😀</button>
                                        {showEmojiPicker && (
                                            <div style={{ position: 'absolute', bottom: '50px', zIndex: 1, right: "0", width: "100%" }}>
                                                <EmojiPicker onEmojiClick={handleEmojiClick} width='100%' />
                                            </div>
                                        )}
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </Col>
                < Col lg={4} className='p-0' >
                    <div className='chatDetail'>
                        <div className='chatDetail-head'>
                            <span className='chatDetail-head-sn'>Details</span>
                        </div>
                        <div className='overF-box'>
                            <Row className='m-0'>
                                <Col xs={6} className='p-0'>
                                    <div className='profile-img'>
                                        <div className='inner-img'>
                                            <img src={chatprofile1} alt='1dd' />
                                            <span>
                                                Client
                                            </span>
                                        </div>
                                        <p className='profile-img-p'>
                                            Caesar
                                        </p>
                                        <button className='profile-img-call'>
                                            <img src={chatprofile3} alt='csc' />
                                        </button>
                                    </div>
                                </Col>

                                <Col xs={6} className='p-0'>
                                    <div className='profile-img'>
                                        <div className='inner-img'>
                                            <img src={chatprofile2} alt='1dd' />
                                            <span>
                                                Client
                                            </span>
                                        </div>
                                        <p className='profile-img-p'>
                                            Caesar
                                        </p>
                                        <button className='profile-img-call'>
                                            <img src={chatprofile3} alt='csc' />
                                        </button>
                                    </div>
                                </Col>
                            </Row>
                            <div className='appoinment'>
                                <span>
                                    Appoinment date
                                </span>
                            </div>
                            <div className='chatDetail-foot'>
                                <div className='appoinment-date'>
                                    <p className='appoinment-date-p1'>21st Feb, 2023</p>
                                    <p className='appoinment-date-p2'>10:00 am -11:30 am</p>
                                </div>
                                <div className='appoinment-btns'>
                                    <button>Haircut</button>
                                    <button>Hairstyle</button>
                                    <button>Wax</button>
                                </div>
                                <Form.Select aria-label="Default select example">
                                    <option>Action</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </Form.Select>

                            </div>
                            <div className='appoinment-Price'>
                                <span className='appoinment-Price-s1'>Price</span>
                                <span className='appoinment-Price-s2'>75USD</span>
                            </div>
                        </div>


                    </div>
                </Col >
            </Row>
        </>
    )
}

export default Chatbox
