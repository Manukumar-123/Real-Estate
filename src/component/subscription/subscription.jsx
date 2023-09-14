import React, { useState } from "react";
import './style.css';
import ClearIcon from '@mui/icons-material/Clear';
import { CardCvcElement, CardElement, CardExpiryElement, CardNumberElement, useStripe } from "@stripe/react-stripe-js";
const SubscriptionPlan = ({ elements, stripe }) => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    // const stripe = useStripe();
    const [email, setEmail] = useState({
        email: ''
    })

    const openPopup = () => {
        setIsPopupOpen(true);
    };

    const closePopup = () => {
        setIsPopupOpen(false);
    };

    const getCardDetails = (e) => {
        setEmail((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const createSubscription = async (e) => {
        e.preventDefault();
        if (!stripe || !elements) {
            return
        }
        const cardNumberElement = elements.getElement(CardNumberElement)
        const token = await stripe.createToken(cardNumberElement)
        console.log(token)
    }

    return (
        <div className="w-full min-h-screen flex items-center justify-center ">
            <div className=" flex flex-col justify-center items-center text-center p-6 shadow-2xl border border-green-600 rounded-lg">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                    Premium Subscription
                </h2>
                <div className="flex justify-between items-center mb-4">
                    <span className="text-2xl font-semibold text-gray-700">Price:</span>
                    <span className="text-2xl font-bold text-green-600">$500</span>
                </div>
                <p className="text-gray-600 mb-4">
                    Get access to all premium features with our $500 <br /> yearly
                    subscription plan.
                </p>
                <ul className="text-gray-600 mb-4">
                    <li className="flex items-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-green-600 mr-2"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M10 3a1 1 0 011 1v8a1 1 0 01-2 0V4a1 1 0 011-1z"
                                clipRule="evenodd"
                            />
                            <path
                                fillRule="evenodd"
                                d="M9.293 5.293a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L10 7.414 5.707 11.707a1 1 0 01-1.414-1.414l4-4a1 1 0 010-1.414z"
                                clipRule="evenodd"
                            />
                        </svg>
                        Unlimited access to premium content
                    </li>
                    <li className="flex items-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-green-600 mr-2"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M10 3a1 1 0 011 1v8a1 1 0 01-2 0V4a1 1 0 011-1z"
                                clipRule="evenodd"
                            />
                            <path
                                fillRule="evenodd"
                                d="M9.293 5.293a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L10 7.414 5.707 11.707a1 1 0 01-1.414-1.414l4-4a1 1 0 010-1.414z"
                                clipRule="evenodd"
                            />
                        </svg>
                        Priority customer support
                    </li>
                </ul>
                <button
                    onClick={openPopup}
                    className="bg-green-600 text-white py-2 px-4 rounded-full hover:bg-green-700 focus:outline-none focus:ring focus:ring-green-200"
                >
                    Subscribe Now
                </button>
            </div>
            {isPopupOpen && (
                <div className="fixed inset-0 flex items-center justify-center ">
                    <div className="modal border p-4 relative">
                        <ClearIcon className="absolute right-4 top-4 text-gray-400 cursor-pointer" onClick={closePopup} />
                        <form className="form" onSubmit={createSubscription}>
                            <div className="payment--options flex space-x-4">
                                <button name="paypal" type="button">
                                    <svg
                                        xmlSpace="preserve"
                                        viewBox="0 0 124 33"
                                        height="33px"
                                        width="124px"
                                        y="0px"
                                        x="0px"
                                        id="Layer_1"
                                        version="1.1"
                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M46.211,6.749h-6.839c-0.468,0-0.866,0.34-0.939,0.802l-2.766,17.537c-0.055,0.346,0.213,0.658,0.564,0.658  h3.265c0.468,0,0.866-0.34,0.939-0.803l0.746-4.73c0.072-0.463,0.471-0.803,0.938-0.803h2.165c4.505,0,7.105-2.18,7.784-6.5  c0.306-1.89,0.013-3.375-0.872-4.415C50.224,7.353,48.5,6.749,46.211,6.749z M47,13.154c-0.374,2.454-2.249,2.454-4.062,2.454  h-1.032l0.724-4.583c0.043-0.277,0.283-0.481,0.563-0.481h0.473c1.235,0,2.4,0,3.002,0.704C47.027,11.668,47.137,12.292,47,13.154z"
                                            fill="#253B80"
                                        />
                                        <path
                                            d="M66.654,13.075h-3.275c-0.279,0-0.52,0.204-0.563,0.481l-0.145,0.916l-0.229-0.332  c-0.709-1.029-2.29-1.373-3.868-1.373c-3.619,0-6.71,2.741-7.312,6.586c-0.313,1.918,0.132,3.752,1.22,5.031  c0.998,1.176,2.426,1.666,4.125,1.666c2.916,0,4.533-1.875,4.533-1.875l-0.146,0.91c-0.055,0.348,0.213,0.66,0.562,0.66h2.95  c0.469,0,0.865-0.34,0.939-0.803l1.77-11.209C67.271,13.388,67.004,13.075,66.654,13.075z M62.089,19.449  c-0.316,1.871-1.801,3.127-3.695,3.127c-0.951,0-1.711-0.305-2.199-0.883c-0.484-0.574-0.668-1.391-0.514-2.301  c0.295-1.855,1.805-3.152,3.67-3.152c0.93,0,1.686,0.309,2.184,0.892C62.034,17.721,62.232,18.543,62.089,19.449z"
                                            fill="#253B80"
                                        />
                                        <path
                                            d="M84.096,13.075h-3.291c-0.314,0-0.609,0.156-0.787,0.417l-4.539,6.686l-1.924-6.425  c-0.121-0.402-0.492-0.678-0.912-0.678h-3.234c-0.393,0-0.666,0.384-0.541,0.754l3.625,10.638l-3.408,4.811  c-0.268,0.379,0.002,0.9,0.465,0.9h3.287c0.312,0,0.604-0.152,0.781-0.408L84.564,13.97C84.826,13.592,84.557,13.075,84.096,13.075z"
                                            fill="#253B80"
                                        />
                                        <path
                                            d="M94.992,6.749h-6.84c-0.467,0-0.865,0.34-0.938,0.802l-2.766,17.537c-0.055,0.346,0.213,0.658,0.562,0.658  h3.51c0.326,0,0.605-0.238,0.656-0.562l0.785-4.971c0.072-0.463,0.471-0.803,0.938-0.803h2.164c4.506,0,7.105-2.18,7.785-6.5  c0.307-1.89,0.012-3.375-0.873-4.415C99.004,7.353,97.281,6.749,94.992,6.749z M95.781,13.154c-0.373,2.454-2.248,2.454-4.062,2.454  h-1.031l0.725-4.583c0.043-0.277,0.281-0.481,0.562-0.481h0.473c1.234,0,2.4,0,3.002,0.704  C95.809,11.668,95.918,12.292,95.781,13.154z"
                                            fill="#179BD7"
                                        />
                                        <path
                                            d="M115.434,13.075h-3.273c-0.281,0-0.52,0.204-0.562,0.481l-0.145,0.916l-0.23-0.332  c-0.709-1.029-2.289-1.373-3.867-1.373c-3.619,0-6.709,2.741-7.311,6.586c-0.312,1.918,0.131,3.752,1.219,5.031  c1,1.176,2.426,1.666,4.125,1.666c2.916,0,4.533-1.875,4.533-1.875l-0.146,0.91c-0.055,0.348,0.213,0.66,0.564,0.66h2.949  c0.467,0,0.865-0.34,0.938-0.803l1.771-11.209C116.053,13.388,115.785,13.075,115.434,13.075z M110.869,19.449  c-0.314,1.871-1.801,3.127-3.695,3.127c-0.949,0-1.711-0.305-2.199-0.883c-0.484-0.574-0.666-1.391-0.514-2.301  c0.297-1.855,1.805-3.152,3.67-3.152c0.93,0,1.686,0.309,2.184,0.892C110.816,17.721,111.014,18.543,110.869,19.449z"
                                            fill="#179BD7"
                                        />
                                        <path
                                            d="M119.295,7.23l-2.807,17.858c-0.055,0.346,0.213,0.658,0.562,0.658h2.822c0.469,0,0.867-0.34,0.939-0.803  l2.768-17.536c0.055-0.346-0.213-0.659-0.562-0.659h-3.16C119.578,6.749,119.338,6.953,119.295,7.23z"
                                            fill="#179BD7"
                                        />
                                        <path
                                            d="M7.266,29.154l0.523-3.322l-1.165-0.027H1.061L4.927,1.292C4.939,1.218,4.978,1.149,5.035,1.1  c0.057-0.049,0.13-0.076,0.206-0.076h9.38c3.114,0,5.263,0.648,6.385,1.927c0.526,0.6,0.861,1.227,1.023,1.917  c0.17,0.724,0.173,1.589,0.007,2.644l-0.012,0.077v0.676l0.526,0.298c0.443,0.235,0.795,0.504,1.065,0.812  c0.45,0.513,0.741,1.165,0.864,1.938c0.127,0.795,0.085,1.741-0.123,2.812c-0.24,1.232-0.628,2.305-1.152,3.183  c-0.482,0.809-1.096,1.48-1.825,2c-0.696,0.494-1.523,0.869-2.458,1.109c-0.906,0.236-1.939,0.355-3.072,0.355h-0.73  c-0.522,0-1.029,0.188-1.427,0.525c-0.399,0.344-0.663,0.814-0.744,1.328l-0.055,0.299l-0.924,5.855l-0.042,0.215  c-0.011,0.068-0.03,0.102-0.058,0.125c-0.025,0.021-0.061,0.035-0.096,0.035H7.266z"
                                            fill="#253B80"
                                        />
                                        <path
                                            d="M23.048,7.667L23.048,7.667L23.048,7.667c-0.028,0.179-0.06,0.362-0.096,0.55  c-1.237,6.351-5.469,8.545-10.874,8.545H9.326c-0.661,0-1.218,0.48-1.321,1.132l0,0l0,0L6.596,26.83l-0.399,2.533  c-0.067,0.428,0.263,0.814,0.695,0.814h4.881c0.578,0,1.069-0.42,1.16-0.99l0.048-0.248l0.919-5.832l0.059-0.32  c0.09-0.572,0.582-0.992,1.16-0.992h0.73c4.729,0,8.431-1.92,9.513-7.476c0.452-2.321,0.218-4.259-0.978-5.622  C24.022,8.286,23.573,7.945,23.048,7.667z"
                                            fill="#179BD7"
                                        />
                                        <path
                                            d="M21.754,7.151c-0.189-0.055-0.384-0.105-0.584-0.15c-0.201-0.044-0.407-0.083-0.619-0.117  c-0.742-0.12-1.555-0.177-2.426-0.177h-7.352c-0.181,0-0.353,0.041-0.507,0.115C9.927,6.985,9.675,7.306,9.614,7.699L8.05,17.605  l-0.045,0.289c0.103-0.652,0.66-1.132,1.321-1.132h2.752c5.405,0,9.637-2.195,10.874-8.545c0.037-0.188,0.068-0.371,0.096-0.55  c-0.313-0.166-0.652-0.308-1.017-0.429C21.941,7.208,21.848,7.179,21.754,7.151z"
                                            fill="#222D65"
                                        />
                                        <path
                                            d="M9.614,7.699c0.061-0.393,0.313-0.714,0.652-0.876c0.155-0.074,0.326-0.115,0.507-0.115h7.352  c0.871,0,1.684,0.057,2.426,0.177c0.212,0.034,0.418,0.073,0.619,0.117c0.2,0.045,0.395,0.095,0.584,0.15  c0.094,0.028,0.187,0.057,0.278,0.086c0.365,0.121,0.704,0.264,1.017,0.429c0.368-2.347-0.003-3.945-1.272-5.392  C20.378,0.682,17.853,0,14.622,0h-9.38c-0.66,0-1.223,0.48-1.325,1.133L0.01,25.898c-0.077,0.49,0.301,0.932,0.795,0.932h5.791  l1.454-9.225L9.614,7.699z"
                                            fill="#253B80"
                                        />
                                    </svg>
                                </button>
                                <button name="apple-pay" type="button" className="flex items-center justify-center">
                                    <svg
                                        xmlSpace="preserve"
                                        viewBox="0 0 512 210.2"
                                        y="0px"
                                        x="0px"
                                        id="Layer_1"
                                        version="1.1"
                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M93.6,27.1C87.6,34.2,78,39.8,68.4,39c-1.2-9.6,3.5-19.8,9-26.1c6-7.3,16.5-12.5,25-12.9  C103.4,10,99.5,19.8,93.6,27.1 M102.3,40.9c-13.9-0.8-25.8,7.9-32.4,7.9c-6.7,0-16.8-7.5-27.8-7.3c-14.3,0.2-27.6,8.3-34.9,21.2  c-15,25.8-3.9,64,10.6,85c7.1,10.4,15.6,21.8,26.8,21.4c10.6-0.4,14.8-6.9,27.6-6.9c12.9,0,16.6,6.9,27.8,6.7  c11.6-0.2,18.9-10.4,26-20.8c8.1-11.8,11.4-23.3,11.6-23.9c-0.2-0.2-22.4-8.7-22.6-34.3c-0.2-21.4,17.5-31.6,18.3-32.2  C123.3,42.9,107.7,41.3,102.3,40.9 M182.6,11.9v155.9h24.2v-53.3h33.5c30.6,0,52.1-21,52.1-51.4c0-30.4-21.1-51.2-51.3-51.2H182.6z   M206.8,32.3h27.9c21,0,33,11.2,33,30.9c0,19.7-12,31-33.1,31h-27.8V32.3z M336.6,169c15.2,0,29.3-7.7,35.7-19.9h0.5v18.7h22.4V90.2  c0-22.5-18-37-45.7-37c-25.7,0-44.7,14.7-45.4,34.9h21.8c1.8-9.6,10.7-15.9,22.9-15.9c14.8,0,23.1,6.9,23.1,19.6v8.6l-30.2,1.8  c-28.1,1.7-43.3,13.2-43.3,33.2C298.4,155.6,314.1,169,336.6,169z M343.1,150.5c-12.9,0-21.1-6.2-21.1-15.7c0-9.8,7.9-15.5,23-16.4  l26.9-1.7v8.8C371.9,140.1,359.5,150.5,343.1,150.5z M425.1,210.2c23.6,0,34.7-9,44.4-36.3L512,54.7h-24.6l-28.5,92.1h-0.5  l-28.5-92.1h-25.3l41,113.5l-2.2,6.9c-3.7,11.7-9.7,16.2-20.4,16.2c-1.9,0-5.6-0.2-7.1-0.4v18.7C417.3,210,423.3,210.2,425.1,210.2z"
                                            id="XMLID_34_"
                                        />
                                        <g></g>
                                        <g></g>
                                        <g></g>
                                        <g></g>
                                        <g></g>
                                        <g></g>
                                    </svg>
                                </button>
                                <button name="google-pay" type="button">
                                    <svg
                                        fill="none"
                                        viewBox="0 0 80 39"
                                        height={39}
                                        width={80}
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <g clipPath="url(#clip0_134_34)">
                                            <path
                                                fill="#5F6368"
                                                d="M37.8 19.7V29H34.8V6H42.6C44.5 6 46.3001 6.7 47.7001 8C49.1001 9.2 49.8 11 49.8 12.9C49.8 14.8 49.1001 16.5 47.7001 17.8C46.3001 19.1 44.6 19.8 42.6 19.8L37.8 19.7ZM37.8 8.8V16.8H42.8C43.9 16.8 45.0001 16.4 45.7001 15.6C47.3001 14.1 47.3 11.6 45.8 10.1L45.7001 10C44.9001 9.2 43.9 8.7 42.8 8.8H37.8Z"
                                            />
                                            <path
                                                fill="#5F6368"
                                                d="M56.7001 12.8C58.9001 12.8 60.6001 13.4 61.9001 14.6C63.2001 15.8 63.8 17.4 63.8 19.4V29H61V26.8H60.9001C59.7001 28.6 58 29.5 56 29.5C54.3 29.5 52.8 29 51.6 28C50.5 27 49.8 25.6 49.8 24.1C49.8 22.5 50.4 21.2 51.6 20.2C52.8 19.2 54.5 18.8 56.5 18.8C58.3 18.8 59.7 19.1 60.8 19.8V19.1C60.8 18.1 60.4 17.1 59.6 16.5C58.8 15.8 57.8001 15.4 56.7001 15.4C55.0001 15.4 53.7 16.1 52.8 17.5L50.2001 15.9C51.8001 13.8 53.9001 12.8 56.7001 12.8ZM52.9001 24.2C52.9001 25 53.3001 25.7 53.9001 26.1C54.6001 26.6 55.4001 26.9 56.2001 26.9C57.4001 26.9 58.6 26.4 59.5 25.5C60.5 24.6 61 23.5 61 22.3C60.1 21.6 58.8 21.2 57.1 21.2C55.9 21.2 54.9 21.5 54.1 22.1C53.3 22.6 52.9001 23.3 52.9001 24.2Z"
                                            />
                                            <path
                                                fill="#5F6368"
                                                d="M80 13.3L70.1 36H67.1L70.8 28.1L64.3 13.4H67.5L72.2 24.7H72.3L76.9 13.4H80V13.3Z"
                                            />
                                            <path
                                                fill="#4285F4"
                                                d="M25.9 17.7C25.9 16.8 25.8 15.9 25.7 15H13.2V20.1H20.3C20 21.7 19.1 23.2 17.7 24.1V27.4H22C24.5 25.1 25.9 21.7 25.9 17.7Z"
                                            />
                                            <path
                                                fill="#34A853"
                                                d="M13.1999 30.5999C16.7999 30.5999 19.7999 29.3999 21.9999 27.3999L17.6999 24.0999C16.4999 24.8999 14.9999 25.3999 13.1999 25.3999C9.7999 25.3999 6.7999 23.0999 5.7999 19.8999H1.3999V23.2999C3.6999 27.7999 8.1999 30.5999 13.1999 30.5999Z"
                                            />
                                            <path
                                                fill="#FBBC04"
                                                d="M5.8001 19.8999C5.2001 18.2999 5.2001 16.4999 5.8001 14.7999V11.3999H1.4001C-0.499902 15.0999 -0.499902 19.4999 1.4001 23.2999L5.8001 19.8999Z"
                                            />
                                            <path
                                                fill="#EA4335"
                                                d="M13.2 9.39996C15.1 9.39996 16.9 10.1 18.3 11.4L22.1 7.59996C19.7 5.39996 16.5 4.09996 13.3 4.19996C8.3 4.19996 3.7 6.99996 1.5 11.5L5.9 14.9C6.8 11.7 9.8 9.39996 13.2 9.39996Z"
                                            />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_134_34">
                                                <rect fill="white" height="38.1" width={80} />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </button>
                            </div>
                            <div className="separator">
                                <hr className="line" />
                                <p>or pay using credit card</p>
                                <hr className="line" />
                            </div>
                            <div className="credit-card-info--form">
                                <div className="input_container">
                                    <label htmlFor="password_field" className="input_label">
                                        Your Email
                                    </label>
                                    <input
                                        id="password_field"
                                     className="border rounded-lg p-1.5 border-gray-300 px-3"
                                        type="text"
                                        name="email"
                                        onChange={getCardDetails}
                                        title="Inpit title"
                                        placeholder="Enter your Email"
                                    />
                                </div>
                                <div className="input_container">
                                    <label htmlFor="password_field" className="input_label">
                                        Card Number
                                    </label>
                                    <div className="border rounded-lg p-1.5 border-gray-300 px-3">

                                        <CardNumberElement />
                                    </div>
                                </div>
                                <div className="input_container">
                                    <label htmlFor="password_field" className="input_label">
                                        Expiry Date / CVV
                                    </label>
                                    <div className="split">
                                        <div className="border rounded-lg p-1.5 border-gray-300 px-3">
                                            <CardExpiryElement />
                                        </div>
                                        <div className="border rounded-lg p-1.5 border-gray-300 px-3">
                                            <CardCvcElement />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button className="purchase--btn" type="submit">Checkout</button>
                        </form>
                    </div>

                </div>
            )}
        </div>
    );
};

export default SubscriptionPlan;
